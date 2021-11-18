import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { vs } from 'react-native-size-matters';


export default function HeaderTitle({name, photo}) {
    return (
        <View style={styles.titleContainer}>
            <TouchableOpacity>
                <Image source={{uri: photo}} style={styles.profilePicture}/>
            </TouchableOpacity>
            <Text style={styles.welcome}>Hola, {name}</Text>
            <Text style={styles.subtitle}>¿Problemas con algúna clase?</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        alignItems: 'center',
        justifyContent: "center",
        marginTop: vs(20),
        marginBottom: vs(-10),
    },
    profilePicture: {
        width: vs(45),
        height: vs(45),
        borderWidth: 3,
        borderColor:'white',
        borderRadius: 100,
        marginBottom: vs(7)
    },
    welcome: {
        fontSize: vs(20),
        fontFamily: "Medium",
        color: "white",
    },
    subtitle: {
        fontFamily: "Light",
        color: "white",
        lineHeight: vs(12),
        fontSize: vs(10),
    }
})
