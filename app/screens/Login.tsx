import { View, Text, StyleSheet, TextInput, Button, ActivityIndicator, ImageBackground } from "react-native";
import React, {useState} from 'react'
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const image = {uri: './images/sky.jpeg.jpg'}

const Login = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;

    const signIn = async () => {
        setLoading(true);
        try{
            const responce = await signInWithEmailAndPassword(auth, login, password);
            console.log(responce);
            alert('Check your email')
        } catch (error: any) {
            console.log(error);
            alert('Something went wrong'+ error.message)
        } finally {
            setLoading(false)
        }
    };

    
    const signUp = async () => {
        setLoading(true);
        try{
            const responce = await createUserWithEmailAndPassword(auth, login, password);
            console.log(responce);
            alert('Check your email')
        } catch (error: any) {
            console.log(error);
            alert('Something went wrong'+ error.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../images/sky.jpeg.jpg')} style={styles.image}>
            <TextInput 
                style={styles.input} 
                placeholder="Email" 
                autoCapitalize="none"
                onChangeText={(text) => setLogin(text)}
                textAlign={"center"}>
            </TextInput>
            <TextInput 
                style={styles.input} 
                placeholder="Password" 
                autoCapitalize="none"
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
                textAlign={"center"}>
            </TextInput>

            {loading ? <ActivityIndicator size="large" color="#000000"/>
            : <View>
                <Button title="Login"  onPress={signIn}></Button>
                <Button title="SignUp" onPress={signUp}></Button>
              </View>}
            </ImageBackground>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',  
    },

    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
      },

    input: {
        marginVertical: 4,
        marginHorizontal: 20,
        height: 50,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#fff',
        color: '#fff',
        paddingLeft: 10,
    },

    button: {
        marginBottom: 10
    },
})