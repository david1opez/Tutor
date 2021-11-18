import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import {s, vs} from 'react-native-size-matters';
import { getAuth, signOut } from "firebase/auth";
import { useNavigation } from '@react-navigation/core';

const auth = getAuth();

const MenuComponent = () => {
    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.button, {marginBottom: 0}]} onPress={() => {
                signOut(auth).then(() => { navigation.replace("Login") });
            }}>

                {/* <Image source={require('../../../assets/icons/star.png')} style={styles.icon}/> */}
                <Text style={styles.buttonText}>Cerrar sesión</Text>

            </TouchableOpacity>
        </View>
    )
}

export default MenuComponent

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        padding: vs(8),
        paddingHorizontal: s(10),
        position: 'absolute',
        right: s(40),
        top: vs(40),
        borderRadius: s(10),
        borderTopRightRadius: 0,
        zIndex: 1,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: vs(5),
    },
    buttonText: {
        fontSize: vs(8.5),
        color: '#6386FF',
        fontFamily: 'Light',
        transform: [{translateY: vs(2)}],
    },
    icon: {
        width: s(12),
        height: s(12),
        marginRight: s(5),
    }
})
