import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, useWindowDimensions } from 'react-native'
import { s, vs } from 'react-native-size-matters'
import QuestionInput from './QuestionInput'


const QuestionPopup = () => {
    const { height, width } = useWindowDimensions();
    const bgHeight = height > 700 ? vs(730) : vs(750);
    const containerHeight = height > 700 ? "70%" : "80%";

    return (
        <View style={[styles.background, {height: bgHeight}]}>
            <View style={[styles.makeQuestionPopup, {height: containerHeight }]}>
                <View style={styles.makeQuestionHeader}>
                    <Text style={styles.makeQuestionTitle}>¡Haz una pregunta!</Text>
                    <Text style={styles.makeQuestionSubtitle}>Estamos aquí para ayudar</Text>
                </View>

                <View>
                    <QuestionInput
                        title={"Título de tu pregunta :"}
                        placeholder={"e.g. ¿Cómo se deriva una función?"}
                        description={"Sé específico, imagina que le estás haciendo una pregunta a otra persona"}
                    />
                    <QuestionInput
                        title={"Descripción"}
                        description={"Describe la pregunta o el problema que tienes, si es necesario adjunta un archivo y si es posible explica lo que ya intentaste"}
                        multiline={true}
                    />

                    <View style={styles.subjectLevelContainer}>
                        <QuestionInput
                            title={"Materia"}
                            doubleInput={true}
                        />
                        <QuestionInput
                            title={"Nivel"}
                            doubleInput={true}
                        />
                    </View>
                </View>

                <TouchableOpacity style={styles.makeQuestionButton} onPress={() => setShowComponent(false)}>
                    <Text style={styles.makeQuestionButtonText}>Publicar pregunta</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default QuestionPopup

const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        width: "100%",
        height: vs(730),
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0,0.65)',
        marginTop: 0,
        zIndex: 9999
    },
    makeQuestionPopup: {
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        height: "70%",
        width: "89%",
        borderRadius: 20
    },
    makeQuestionHeader: {
        alignItems: "center",
        backgroundColor: "#6386FF",
        width: "100%",
        paddingVertical: vs(10),
        marginTop: vs(-5),
        marginBottom: vs(20),
    },
    makeQuestionTitle: {
        fontSize: vs(18),
        fontFamily: "SemiBold",
        color: "white",
    },
    makeQuestionSubtitle: {
        fontFamily: "Medium",
        color: "white",
        fontSize: vs(10),
    },
    subjectLevelContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: s(45),
    },
    makeQuestionButton: {
        backgroundColor: "#6386FF",
        paddingHorizontal: s(15),
        paddingVertical: vs(7),
        borderRadius: 5,
        marginTop: 0,
    },
    makeQuestionButtonText: {
        fontSize: vs(11),
        fontFamily: "SemiBold",
        color: "white",
    },
})

