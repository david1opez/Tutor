import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { vs } from 'react-native-size-matters';


const Input = (props) => {
    const safe = props.placeholder === 'Contraseña :' || props.placeholder === 'Confirmar contraseña :' ? true : false
    return (
        <View style={styles.container}>
            <Text style={[styles.placeholder, {color: props.placeholderColor}]}>{props.placeholder}</Text>
            <TextInput
                style={[styles.input, {borderColor: props.borderColor}]}
                maxLength={35}
                secureTextEntry={safe}
                onChangeText={(value) => props.setInputValue(value)}
            />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
        alignItems: 'center',
    },
    placeholder: {
        fontSize: 15,
        fontFamily: 'Medium',
        color: 'white',
    },
    input: {
        fontFamily: 'Medium',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingTop: 3,
        width: "70%",
        color: 'white',
        textAlign: 'center',
    }
})
