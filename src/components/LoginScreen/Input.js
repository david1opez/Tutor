import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { vs } from 'react-native-size-matters';


const Input = (props) => {
    let security = props.placeholder=="Contraseña :" ? true : false;

    return (
        <View style={styles.container}>
            <Text style={[styles.placeholder, {color: props.placeholderColor}]}>{props.placeholder}</Text>
            <TextInput
                style={[styles.input, {borderColor: props.borderColor}]}
                maxLength={35}
                secureTextEntry={security}
                onChangeText={(value) => props.setInputValue(value)}
                autoCapitalize = 'none'
            />
        </View>
    )
}
    

export default Input

const styles = StyleSheet.create({
    container: {
        marginBottom: vs(17),
    },
    placeholder: {
        fontSize: vs(11),
        fontFamily: 'Medium',
    },
    input: {
        fontFamily: 'Light',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingTop: vs(2),
        width: "100%",
        color: 'white',
        fontSize: vs(10),
    }
})
