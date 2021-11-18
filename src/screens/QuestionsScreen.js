import React, {useState, useRef} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Animated } from 'react-native'
import { s, vs } from 'react-native-size-matters';

// COMPONENTS
import Question from '../components/HomeScreen/Question';
import Searchbar from '../components/HomeScreen/Searchbar';


const questions = [
    {
        title: "¿Qué es una tutoría?",
        description: "A word in another language can be requested by going to Category Requested entries or the right page",
        responses: 3,
        id: "76b8c6"
    },
    {
        title: "Saben si me podría explicar qué es una tutoría?",
        description: "This automatically generated list and finding the right page can be requested by going to Category Requested entries or this automatically generated list and finding the right page this automatically generated list and finding the right page",
        responses: 3,
        id: "76b8c6"
    },
    {
        title: "¿Alguien porfavor me podría explicar qué es una tutoría?",
        description: "This automatically generated list and finding the right page can be requested Requested entries or this automatically generated list and finding the right page this automatically generated list and finding the right page",
        responses: 3,
        id: "76b8c6"
    },
    {
        title: "¿Qué es una tutoría?",
        description: "A word in another language can be requested by going to Category Requested entries or the right page",
        responses: 3,
        id: "76b8c6"
    },
    {
        title: "Saben si me podría explicar qué es una tutoría?",
        description: "This automatically generated list and finding the right page can be requested by going to Category Requested entries or this automatically generated list and finding the right page this automatically generated list and finding the right page",
        responses: 3,
        id: "76b8c6"
    },
    {
        title: "¿Alguien porfavor me podría explicar qué es una tutoría?",
        description: "This automatically generated list and finding the right page can be requested Requested entries or this automatically generated list and finding the right page this automatically generated list and finding the right page",
        responses: 3,
        id: "76b8c6"
    },
    {
        title: "¿Qué es una tutoría?",
        description: "A word in another language can be requested by going to Category Requested entries or the right page",
        responses: 3,
        id: "76b8c6"
    },
    {
        title: "Saben si me podría explicar qué es una tutoría?",
        description: "This automatically generated list and finding the right page can be requested by going to Category Requested entries or this automatically generated list and finding the right page this automatically generated list and finding the right page",
        responses: 3,
        id: "76b8c6"
    },
    {
        title: "¿Alguien porfavor me podría explicar qué es una tutoría?",
        description: "This automatically generated list and finding the right page can be requested Requested entries or this automatically generated list and finding the right page this automatically generated list and finding the right page",
        responses: 3,
        id: "76b8c6"
    },
    {
        title: "¿Qué es una tutoría?",
        description: "A word in another language can be requested by going to Category Requested entries or the right page",
        responses: 3,
        id: "76b8c6"
    },
    {
        title: "Saben si me podría explicar qué es una tutoría?",
        description: "This automatically generated list and finding the right page can be requested by going to Category Requested entries or this automatically generated list and finding the right page this automatically generated list and finding the right page",
        responses: 3,
        id: "76b8c6"
    },
]

const QuestionsScreen = () => {
    const [displayQuestions, setdisplayQuestions] = useState(questions);

    const handleSearch = (value) => {
        const removeAccents = (str) => {
            return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        }

        value = removeAccents(value.toLowerCase()).replace(/\s/g, '');

        let newQuestions = questions.filter(question => {
            return removeAccents(question.title.toLowerCase()).replace(/\s/g, '').includes(value) || removeAccents(question.description.toLowerCase()).replace(/\s/g, '').includes(value);
        })

        setdisplayQuestions(newQuestions);
    }

    const scrollY = useRef(new Animated.Value(0)).current;

    return (
        <View style={styles.questionsContainer}>

            <Text style={styles.questionTitle}>Aquí estamos todos para aprender</Text>

            <Searchbar placeholder={"Escribe una pregunta..."} setValue={value => handleSearch(value)} />

            <View style={{height: vs(363), marginTop: vs(10)}}>
                <Animated.ScrollView
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                        { useNativeDriver: true },
                    )}
                >
                    {
                        displayQuestions.length > 0 ? (
                            displayQuestions.map((question, index) => {
                                return(
                                    <Question index={index} question={question} key={index} scrollY={scrollY}/>
                                )
                            })
                            ) : (
                                <View>
                                    <Text style={styles.notFound}>No pudimos encontrar lo que estas buscando</Text>
                                </View>
                            )
                    }
                    <View style={{height: vs(100)}}/>
                </Animated.ScrollView>

            </View>

            <TouchableOpacity style={styles.sendMessageButton}>
                <Text style={styles.sendMessageText}>¡Hacer una pregunta!</Text>
            </TouchableOpacity>

        </View>
    )
}

export default QuestionsScreen

const styles = StyleSheet.create({
    questionsContainer: {
        backgroundColor: "white",
        marginTop: vs(5),
        paddingVertical: vs(20),
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: "100%",
    },
    questionTitle: {
        fontFamily: "SemiBold",
        fontSize: vs(17),
        color: "#6386FF",
        textAlign: "center",
        marginHorizontal: s(70),
        marginBottom: vs(10),
    },
    sendMessageButton: {
        top: vs(-75),
        height: vs(35),
        backgroundColor: "#6386FF",
        justifyContent: "center",
        alignItems: "center",
        width: "65%",
        borderRadius: 6,
        alignSelf: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    sendMessageText: {
        fontFamily: "SemiBold",
        fontSize: vs(11.5),
        color: "white",
    },
    notFound: {
        fontFamily: "Light",
        fontSize: vs(10),
        color: "#6386FF",
        textAlign: "center",
        justifyContent: "center",
        marginTop: vs(15),
        marginHorizontal: s(70),
    },
})
