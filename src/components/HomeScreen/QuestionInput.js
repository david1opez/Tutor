import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { s, vs } from 'react-native-size-matters';


const QuestionInput = ({title, placeholder, description, multiline, doubleInput}) => {
    let lines = multiline ? 7 : 1;
    let inputWidth = multiline ? "87%" : doubleInput ? "130%" : "80%";
    let alignment = multiline ? "top" : "center";
    let padding = multiline ? vs(10) : vs(2);
    let maxWidth = doubleInput ? s(105) : s(260);

    return (
        <View style={[styles.container]}>
            <Text style={styles.title}>{title}</Text>
            <TextInput
                style={[styles.input,
                    {
                        width: inputWidth,
                        textAlignVertical: alignment,
                        paddingTop: padding,
                        maxWidth: maxWidth,
                    }
                ]}
                placeholder={placeholder}
                multiline={multiline}
                numberOfLines={lines}
            />
            <Text style={styles.description}>{description}</Text>
        </View>
    )
}

export default QuestionInput

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    title: {
        fontSize: vs(10),
        fontFamily: "Medium",
        color: "black",
        marginBottom: vs(3),
    },
    input: {
        fontSize: vs(9),
        fontFamily: "Regular",
        borderWidth: 2,
        borderColor: "#6386FF",
        borderRadius: 6,
        paddingHorizontal: s(10),
        textAlign: "center",
    },
    description: {
        fontSize: s(8),
        fontFamily: "Light",
        color: "gray",
        textAlign: "center",
        marginHorizontal: s(60),
        marginTop: vs(5),
        marginBottom: vs(18),
    },
})
