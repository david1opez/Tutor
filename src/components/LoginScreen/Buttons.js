import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { s, vs } from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native'
import { getAuth, signInWithEmailAndPassword  } from "firebase/auth";

const auth = getAuth();

const LoginButton = (props) => {

    const navigation = useNavigation();

    let email = props.data.email.trim();
    let password = props.data.password;

    let validateData = () => {
        let code = ""

        // No empty fields
        if(!email) {
            code = `${code}e`
        }
        if(!password) {
            code = `${code}p`
        }

        //Valid email
        function validateEmail(email) {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }
        
        if(!validateEmail(email)) {
            code = `${code}e`
            alert("Email invalido")
        }

        if(password.length < 10) {
            code = `${code}p`
            alert("La contraseña debe tener mínimo 10 caracteres")
        }

        if(code === "") {
            signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigation.replace("Home")
            })
            .catch(error => {
                if(error.message == "Firebase: Error (auth/user-not-found).") {
                    alert("Usuario no encontrado")
                }
                else if(error.message == "Firebase: Error (auth/wrong-password).") {
                    alert("Contraseña incorrecta")
                }
                else {
                    alert(error.message)
                }
            })
        }

        props.setValue(code)
    }

    return (
        <TouchableOpacity style={styles.mainButton} onPress={() => validateData()}>
            <Text style={styles.mainButtonText}>Iniciar sesión</Text>
        </TouchableOpacity>
    )
}

const RegisterButton = () => {  
    
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
            <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    mainButton: {
        backgroundColor: 'white',
        paddingBottom: vs(3),
        paddingTop: vs(6),
        borderRadius: 5,
        marginTop: vs(15),
        marginHorizontal: s(50)
    },
    mainButtonText: {
        textAlign: 'center',
        color: '#6386FF',
        fontSize: vs(13),
        fontFamily: 'SemiBold'
    },
    button: {
        paddingBottom: vs(2),
        paddingTop: vs(3),
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 5,
        marginTop: vs(15),
        marginHorizontal: vs(55)
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: vs(12),
        fontFamily: 'Medium'
    }
})

export {LoginButton, RegisterButton}
