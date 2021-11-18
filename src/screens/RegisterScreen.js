import React, {useState} from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { vs } from 'react-native-size-matters';

//COMPONENTS
import Logo from '../components/LoginScreen/Logo'
import { RegisterButton, LoginButton } from '../components/RegisterScreen/Buttons'
import ProfilePicture from '../components/RegisterScreen/ProfilePicture'
import Input from '../components/RegisterScreen/Input'
import SocialLogin from '../components/RegisterScreen/SocialLogin'

const RegisterScreen = () => {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');

    const [error, seterror] = useState('');

    return (
        <View style={styles.container}>
            <Logo />

            <Text style={styles.title}>¡Únete a la comunidad!</Text>

            <ProfilePicture />

            <Input
                placeholder={"Nombre :"}
                setInputValue={value => setname(value)}
                borderColor={
                    error.includes("n") ? '#FA8072' : 'white'
                }
                placeholderColor={
                    error.includes("n") ? '#FFDDD9' : 'white'
                }
            />
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
            <Input
                placeholder={"Confirmar contraseña :"}
                setInputValue={value => setconfirmPassword(value)}
                borderColor={
                    error.includes("c") ? '#FA8072' : 'white'
                }
                placeholderColor={
                    error.includes("c") ? '#FFDDD9' : 'white'
                }
            />

            


            <RegisterButton
                data={{
                    name: name,
                    email: email,
                    password: password,
                    confirmPassword: confirmPassword
                }}
                setValue={value => {seterror(value)}}
            />

            {name ?
            <Text style={styles.termsAndConditions}>
                {name}, al hacer click en registrarse representas que has leído, entendido y aceptado los términos y condiciones,
                junto con la política de privacidad de Tutor®.
            </Text>
            : null
            }

            <LoginButton />

            <SocialLogin />
        </View>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#6386FF",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    title: {
        fontSize: 33,
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 50,
        marginBottom: 10,
    },
    termsAndConditions: {
        fontSize: 10,
        color: "#fff",
        textAlign: "center",
        marginTop: 10,
        marginHorizontal: "17%"
    }
})