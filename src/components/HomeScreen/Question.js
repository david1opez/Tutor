import React from 'react';
import { StyleSheet, Text, Animated, TouchableOpacity } from 'react-native';
import { s, vs } from 'react-native-size-matters';


const Question = ({index, question, scrollY}) => {
    const inputRange = [
        -1,
        0,
        (170 * index),
        (170 * (index + 1)),
    ]

    const scale = scrollY.interpolate({
        inputRange: inputRange,
        outputRange: [1, 1, 1, 0.6],
    })

    let longDescription = question.description.length > 150;
    let trimmedDescription = question.description.substring(0, 150);
    let longQuestion = question.title.length > 60;
    let trimmedQuestion = question.title.substring(0, 59);


    return (
            <Animated.View
                style={{ transform: [{ scale } ]}}
            >
                <TouchableOpacity style={[styles.questionContainer]}>
                    {longQuestion ?
                        <Text style={styles.title}>{trimmedQuestion}...</Text>
                        :
                        <Text style={styles.title}>{question.title}</Text>
                    }
                    {longDescription ?
                        <Text style={styles.description}>{trimmedDescription}...</Text>
                        :
                        <Text style={styles.description}>{question.description}</Text>
                    }
                    <Text style={styles.answers}>{question.responses} respuestas</Text>
                </TouchableOpacity>
            </Animated.View>
    )
}

export default Question

const styles = StyleSheet.create({
    questionContainer: {
        marginTop: vs(10),
        marginBottom: vs(13),
        marginHorizontal: s(27),
        padding: vs(8),
        paddingHorizontal: s(17),
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 6,
    },
    title: {
        fontSize: vs(11),
        fontFamily: 'SemiBold',
        marginBottom: vs(5),
        marginTop: vs(2),
    },
    description: {
        fontSize: vs(7.5),
        fontFamily: 'Light',
        marginBottom: vs(5),
    },
    answers: {
        fontSize: vs(9),
        fontFamily: 'Medium',
        color: '#6386FF',
    }
})
