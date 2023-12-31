import { View, 
        Text, 
        StyleSheet, 
        TextInput, 
        ActivityIndicator, 
        ImageBackground, 
        TouchableOpacity,
        Platform,
        KeyboardAvoidingView,
        Button,
        Keyboard, } from "react-native";
import React, {useState} from 'react'
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import Register from "./RegisterScreen";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import {authSignInUser} from '../../redux/auth/authOperations'

const initialState = {
    email: '',
    password: '',
};

const Login = () => {
    const [state, setState] = useState(initialState)
    const [loading, setLoading] = useState(false);
    const [isKeyboardShow, setIsKeyboardShow] = useState(false);
    const auth = FIREBASE_AUTH;

    const dispatch = useDispatch()

    const navigation = useNavigation()

    const handleSubmit = () => {
        dispatch(authSignInUser(state))
        Keyboard.dismiss();
        setIsKeyboardShow(false);
        setState(initialState)
    };

    // const signIn = async () => {
    //     setLoading(true);
    //     keyBoardHide()
    //     try{
    //         const responce = await signInWithEmailAndPassword(auth, state.email, state.password);
    //         console.log(responce);
    //         alert('Welcome')
    //     } catch (error) {
    //         console.log(error);
    //         alert('Something went wrong'+ error.message)
    //     } finally {
    //         setLoading(false)
    //     }
    // };

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../images/sky.jpeg.jpg')} style={styles.image}>
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                    <View style={styles.form}>
                    <View>
                        <Text style={styles.inputTitle}>Email</Text>
                        <TextInput 
                            style={styles.input} 
                            autoCapitalize="none"
                            onChangeText={(value) => setState((prevState) => ({...prevState, email: value}) )}
                            textAlign={"center"}
                            value={state.email}
                            onFocus={() => setIsKeyboardShow(true)}>
                        </TextInput>
                    </View>
                    <View style={{marginTop: 20}}>
                        <Text style={styles.inputTitle}>Password</Text>
                        <TextInput 
                            style={styles.input} 
                            autoCapitalize="none"
                            secureTextEntry={true}
                            onChangeText={(value) => setState((prevState) => ({...prevState, password: value}) )}
                            textAlign={"center"}
                            value={state.password}
                            onFocus={() => setIsKeyboardShow(true)}>
                    </TextInput>
                    </View>

                    {loading ? <ActivityIndicator size="large" color="#000000"/>
                : <View>
                    <TouchableOpacity style={styles.button} onPress={handleSubmit} activeOpacity={0.8}>
                        <Text style={styles.btnText}>
                            Sign in
                        </Text>
                    </TouchableOpacity>
                    {/* <Button title="Login"  onPress={signIn}></Button>
                    <Button title="SignUp" onPress={signUp}></Button> */}
                </View>}
                <TouchableOpacity style={styles.navButtonContainer} onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.navButton}>
                        Dont have an account? 
                        <Text style={styles.navBattonLink}> Sign up</Text></Text>
                </TouchableOpacity>
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
        justifyContent: 'center',
      },

    form: {
        marginHorizontal: 30,
        justifyContent: 'flex-end',
    },

    inputTitle: {
        color: '#fff',
        marginBottom: 10,
        fontSize: 18,
        fontFamily: 'RobotoSlab-Regular',
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
    },

    navButtonContainer: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    navButton: {
        color: '#fff',
        fontSize: 18,
    },

    navBattonLink: {
        color: "#ff4500",
        fontSize: 20,
    }
})