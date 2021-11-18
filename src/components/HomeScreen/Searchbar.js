import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { s, vs } from 'react-native-size-matters';


const SearchBar = (props) => {
    return (
        <View style={styles.container}>

            <TextInput
                placeholder={props.placeholder}
                style={styles.input}
                onChangeText={(text) => props.setValue(text)}
            />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Buscar</Text>
            </TouchableOpacity>
        </View>  
    )
}

export default SearchBar

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row",
    },
    input: {
        fontSize: vs(9),
        fontFamily: 'Regular',
        borderWidth: 1.5,
        borderColor: "lightgray",
        borderRadius: 7,
        paddingTop: vs(2),
        paddingLeft: s(10),
        width: s(220),
        height: vs(25),
        marginRight: s(10),
        color: "#6386FF",
        backgroundColor: "white"
    },
    button: {
        width: s(70),
        height: vs(23),
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#7D99FF",
        borderRadius: 5,
        paddingTop: vs(1)
    },
    buttonText: {
        fontFamily: "SemiBold",
        fontSize: vs(10),
        color: "white"
    },
})
