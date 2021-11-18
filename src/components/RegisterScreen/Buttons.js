import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import { vs } from 'react-native-size-matters';

const RegisterButton = (props) => {

    let validateData = () => {
        let code = ""
        if(!props.data.email) {
            code = `${code}e`
        }
        if(!props.data.password) {
            code = `${code}p`
        }
        if(!props.data.name) {
            code = `${code}n`
        }
        if(!props.data.confirmPassword) {
            code = `${code}c`
        }

        props.setValue(code)
    }

    const handleRegistration = () => {
        let name = data.name.trim()
        let email = data.email.replace(/\s+/g, '');

        register(email, data.password, name)
    }

    return (
        <TouchableOpacity style={styles.mainButton} onPress={() => validateData()}>
            <Text style={styles.mainButtonText}>Registrarse</Text>
        </TouchableOpacity>
    )
}

const LoginButton = () => {  

    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.buttonText}>Iniciar sesión</Text>
        </TouchableOpacity>
    )
}

export {LoginButton, RegisterButton}

const styles = StyleSheet.create({
    mainButton: {
        backgroundColor: 'white',
        paddingBottom: 5,
        paddingTop: 8,
        borderRadius: 5,
        marginTop: 20,
        marginHorizontal: 120,
    },
    mainButtonText: {
        textAlign: 'center',
        color: '#6386FF',
        fontSize: 18,
        fontFamily: 'SemiBold'
    },
    button: {
        paddingBottom: 3,
        paddingTop: 5,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 5,
        marginTop: 20,
        marginHorizontal: 135
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
        fontFamily: 'Medium'
    }
})