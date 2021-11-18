import React, {useState} from 'react'
import { StyleSheet, Text, View, StatusBar, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { vs } from 'react-native-size-matters';

// COMPONENTS
import Logo from '../components/LoginScreen/Logo'
import Input from '../components/LoginScreen/Input'
import {LoginButton, RegisterButton} from '../components/LoginScreen/Buttons'
import SocialLogin from '../components/LoginScreen/SocialLogin'


const LoginScreen = () => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    
    const [error, seterror] = useState('');

    return (
        <View style={styles.container}>
            <Logo/>

            <View style={styles.bodyContainer}>

                {/* Title */}
                <Text style={styles.title}>Hagamos la escuela un poco más fácil</Text>

                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.inputContainer}>

                    <Input
                        placeholder={"Correo :"}
                        setInputValue={value => setemail(value)}
                        borderColor={
                            error.includes("e") ? '#FA8072' : 'white'
                        }
                        placeholderColor={
                            error.includes("e") ? '#FFDDD9' : 'white'
                        }
                    />
                    <Input
                        placeholder={"Contraseña :"}
                        setInputValue={value => setpassword(value)}
                        borderColor={
                            error.includes("p") ? '#FA8072' : 'white'
                        }
                        placeholderColor={
                            error.includes("p") ? '#FFDDD9' : 'white'
                        }
                    />
                    
                    {/* Forgot password */}
                    <TouchableOpacity>
                        <Text style={styles.forgotPassword}>¿Olvidaste tu contraseña?</Text>
                    </TouchableOpacity>

                    {/* Buttons */}
                    <LoginButton data={{email: email, password: password}} setValue={value => {seterror(value)}}/>
                    <RegisterButton />

                </KeyboardAvoidingView>

                {/* Login with Google or Facebook */}
                <SocialLogin />

                {/*Terms, Conditions & Privacy*/}
                <View>
                    <TouchableOpacity>
                        <Text style={[styles.forgotPassword, {marginTop: vs(30)}]}>Términos y condiciones</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={[styles.forgotPassword, {marginTop: 5}]}>Aviso de privacidad</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#6386FF",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    bodyContainer: {
        flex: 1,
        alignItems: "center",
    },
    title: {
        fontSize: vs(18),
        fontFamily: "SemiBold",
        color: "white",
        marginTop: vs(85),
        marginBottom: vs(30),
        width: "70%",
    },
    inputContainer: {
        justifyContent: "center",
        width: "70%",
        marginBottom: vs(30),
        zIndex: 99
    },
    forgotPassword: {
        fontSize: vs(8.5),
        fontFamily: "Light",
        color: "white",
        textDecorationLine: "underline",
        textAlign: "center",
    }
})