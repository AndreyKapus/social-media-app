import { View, 
        Text, 
        StyleSheet, 
        TextInput, 
        ActivityIndicator, 
        ImageBackground, 
        TouchableOpacity,
        Platform,
        KeyboardAvoidingView,
        Keyboard, } from "react-native";
import React, {useState} from 'react'
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [isKeyboardShow, setIsKeyboardShow] = useState(false)
    const auth = FIREBASE_AUTH;

    const keyBoardHide = () => {
        // Keyboard.dismiss();
        // setIsKeyboardShow(false)
    }

    const signIn = async () => {
        setLoading(true);
        try{
            const responce = await signInWithEmailAndPassword(auth, login, password);
            console.log(responce);
            keyBoardHide()
            alert('Welcome')
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
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                    <View style={{...styles.form, marginBottom: isKeyboardShow ? 20 : 100}}>
                    <View>
                        <Text style={styles.inputTitle}>Email</Text>
                        <TextInput 
                            style={styles.input} 
                            autoCapitalize="none"
                            onChangeText={(text) => setLogin(text)}
                            textAlign={"center"}
                            onFocus={() => setIsKeyboardShow(true)}>
                        </TextInput>
                    </View>
                    <View style={{marginTop: 20}}>
                        <Text style={styles.inputTitle}>Password</Text>
                        <TextInput 
                            style={styles.input} 
                            autoCapitalize="none"
                            secureTextEntry={true}
                            onChangeText={(text) => setPassword(text)}
                            textAlign={"center"}
                            onFocus={() => setIsKeyboardShow(true)}>
                    </TextInput>
                    </View>

                    {loading ? <ActivityIndicator size="large" color="#000000"/>
                : <View>
                    <TouchableOpacity style={styles.button} onPress={signIn} activeOpacity={0.8}>
                        <Text style={styles.btnText}>
                            Sign in
                        </Text>
                    </TouchableOpacity>
                    {/* <Button title="Login"  onPress={signIn}></Button>
                    <Button title="SignUp" onPress={signUp}></Button> */}
                </View>}
                </View>
                </KeyboardAvoidingView>
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
        justifyContent: 'flex-end',
      },

    form: {
        marginHorizontal: 30,
    },

    inputTitle: {
        color: '#fff',
        marginBottom: 10,
        fontSize: 18,
    },

    input: {
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#fff',
        color: '#fff',
        paddingLeft: 10,
    },

    button: {
        backgroundColor: '#ff8c00',
        height: 50,
        borderRadius: 5,
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },

    btnText: {
        color: '#fff',
        fontSize: 18,
    }
})