import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { s, vs } from 'react-native-size-matters';


const SubjectsOffered = ({subjects}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ofrece tutorías de:</Text>
            <ScrollView horizontal={true}>
                {subjects.map((subject, index) => {
                    return(
                        <Text key={index} style={styles.text}>{subject}</Text>
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default SubjectsOffered

const styles = StyleSheet.create({
    container: {
        marginBottom: vs(18),
        marginHorizontal: s(19),
    },
    title: {
        fontSize: vs(7.5),
        transform: [{translateX: s(3)}],
        fontFamily: 'Light',
        marginBottom: vs(3),
    },
    text: {
        color: "white",
        fontSize: vs(9.5),
        fontFamily: 'Medium',
        marginRight: s(5),
        marginLeft: s(5),
        borderRadius: 5,
        paddingTop: vs(2.5),
        paddingHorizontal: s(10),
        backgroundColor: "#7D99FF",
        textAlign: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginBottom: vs(7),
    },
})
