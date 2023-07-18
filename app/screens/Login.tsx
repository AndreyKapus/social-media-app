import { View, Text, StyleSheet, TextInput, Button, ActivityIndicator } from "react-native";
import React, {useState} from 'react'
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

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
            <TextInput 
                style={styles.input} 
                placeholder="Email" 
                autoCapitalize="none"
                onChangeText={(text) => setLogin(text)}>
            </TextInput>
            <TextInput 
                style={styles.input} 
                placeholder="Password" 
                autoCapitalize="none"
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}>
            </TextInput>

            {loading ? <ActivityIndicator size="large" color="#000000"/>
            : <View>
                <Button title="Login"  onPress={signIn}></Button>
                <Button title="SignUp" onPress={signUp}></Button>
              </View>}
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 20,
        
    },

    input: {
        marginVertical: 4,
        height: 50,
        borderWidth: 1,
        borderRadius: 4,
        color: '#000000',
        paddingLeft: 10,
    },

    button: {
        marginBottom: 10
    }
})