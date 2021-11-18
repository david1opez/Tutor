import React, {useState} from 'react'
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native'
import { vs } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/core';
import * as GoogleSignIn from 'expo-google-sign-in';
import * as Facebook from 'expo-facebook';
import { getAuth, GoogleAuthProvider, signInWithCredential } from "firebase/auth";

const auth = getAuth();

const SocialLogin = () => {
    const navigation = useNavigation();

    const signInWithGoogleAsync = async () => {
        try {
            await GoogleSignIn.askForPlayServicesAsync();

            const {type, user} = await GoogleSignIn.signInAsync();

            if (type === 'success') {                
                const credential = GoogleAuthProvider.credential(user.auth.idToken);

                alert(credential)

                signInWithCredential(credential).then(() => {
                    navigation.replace('Home');
                }).catch((err) => {
                    console.log(err.message)
                })

            }
        } catch ({ message }) {
            alert('Google login: Error:' + message);
        }
    };

    const signInwithFacebookAsync = async () => {
        try {
            await Facebook.initializeAsync({
                appId: 'xxxxxxxxxxxxxxx',
              });
              const { type, token } = await Facebook.logInWithReadPermissionsAsync({
                permissions: ['public_profile'],
              });

              if (type === 'success') {
                signInWithCredential(token)
                .then(() => {
                    navigation.navigate("Home");
                })
                .catch((err) => {
                    alert(err.message)
                })
              } else {
                // type === 'cancel'
              }
        }
        catch ({ message }) {
            alert('Facebook login: Error:' + message);
        }
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => signInWithGoogleAsync()}>
                <Image source={require('../../../assets/icons/google.png')} style={[styles.image, {marginRight: 15}]} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => signInwithFacebookAsync()}>
                <Image source={require('../../../assets/icons/facebook.png')} style={styles.image} />
            </TouchableOpacity>
        </View>
    )
}

export default SocialLogin

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: -5,
    },
    image: {
        width: vs(25),
        height: vs(25)
    }
})
