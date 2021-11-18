import React, {useState, useRef} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Animated } from 'react-native'
import { s, vs } from 'react-native-size-matters';


// COMPONENTS
import Filter from '../components/TutorshipsScreen/Filter';
import BestTutors from '../components/TutorshipsScreen/BestTutors';
import BestTutorsLoading from '../components/TutorshipsScreen/BestTutorsLoading';
import Post from '../components/TutorshipsScreen/Post';
import Searchbar from '../components/HomeScreen/Searchbar';

import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Setting a timer for a long period of time, i.e. multiple minutes, is a performance and correctness issue on Android as it keeps the timer module awake, and timers can only be called when the app is in the foreground. See https://github.com/facebook/react-native/issues/12981 for more info.']);


const filters = [
    [
        {name: "Matematicas", active: false},
        {name: "Química", active: true},
        {name: "Calculo Integral", active: false},
        {name: "Biología", active: false},
    ],
    [
        {name: "Secundaria", active: false},
        {name: "Preparatoria", active: true},
        {name: "Universidad", active: false},
    ],
    [
        {name: "Gratis", active: false},
        {name: "< $100", active: false},
        {name: "$100 - $250", active: true},
        {name: "$250 - $400", active: false},
        {name: "$400 - $500", active: false},
        {name: "$500+", active: false},
    ]
];

const filterNames = ["Materia", "Nivel", "Precio"]

const posts = [
    {
        title: "Tutorías de Cálculo Diferencial 2do Semestre",
        level: "Universidad",
        tutor: "David Lopez",
        stars: 3,
        price: 120,
        id: "0001",
        first: true
    },
    {
        title: "Clases de nivelación biología",
        level: "Preparatoria",
        tutor: "Enrique Macias",
        stars: 5,
        price: 300,
        id: "0002",
    },
    {
        title: "Matemáticas Discretas",
        level: "Preparatoria",
        tutor: "Mariza Castañeda",
        stars: 0,
        price: 0,
        id: "0003",
    },
    {
        title: "Tutorías de química de secundaria",
        level: "Secundaria",
        tutor: "Roberto Martínez",
        stars: 3,
        price: 200,
        id: "0004",
    },
    {
        title: "Tutorías de Cálculo Diferencial 2do Semestre",
        level: "Universidad",
        tutor: "David Lopez",
        stars: 3,
        price: 120,
        id: "0001",
        first: true
    },
    {
        title: "Clases de nivelación biología",
        level: "Preparatoria",
        tutor: "Enrique Macias",
        stars: 5,
        price: 300,
        id: "0002",
    },
    {
        title: "Matemáticas Discretas",
        level: "Preparatoria",
        tutor: "Mariza Castañeda",
        stars: 0,
        price: 0,
        id: "0003",
    },
    {
        title: "Tutorías de química de secundaria",
        level: "Secundaria",
        tutor: "Roberto Martínez",
        stars: 3,
        price: 200,
        id: "0004",
    }
];



const TutorshipsScreen = ({bestTutorsLoading, bestTutors}) => {
    const [showFilters, setshowFilters] = useState(false);
    const [displayPosts, setdisplayPosts] = useState(posts);

    const handleSearch = (value) => {
        const removeAccents = (str) => {
            return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        }

        value = removeAccents(value.toLowerCase()).replace(/\s/g, '');

        let newPosts = posts.filter(post => {
            return removeAccents(post.title.toLowerCase()).replace(/\s/g, '').includes(value) || removeAccents(post.tutor.toLowerCase()).replace(/\s/g, '').includes(value);
        })

        setdisplayPosts(newPosts);
    }

    const scrollY = useRef(new Animated.Value(0)).current;

    return (
        <View style={styles.contentContainer}>

            <Text style={[styles.titles, {marginBottom: vs(-3)}]}>Nuestros Mejores tutores :</Text>

            <View style={{height: vs(65), marginBottom: vs(20)}}>
                {
                    bestTutorsLoading ?
                    <BestTutorsLoading />
                    :
                    <BestTutors bestTutors={bestTutors} />
                }
            </View>


            <Text style={styles.titles}>Buscar algo más específico :</Text>


            <Searchbar placeholder={"Tutor, tema o título..."} setValue={value => handleSearch(value)}/>

            <TouchableOpacity style={{marginTop: 23}}
                onPress={() => { showFilters ? setshowFilters(false) : setshowFilters(true) }}
            >
                <Text style={styles.filterText}>Filtros</Text>
            </TouchableOpacity>

            {
                showFilters ? (
                    <View style={{marginBottom: vs(15)}}>
                        {
                            filters.map((item, index) => {
                                return (
                                    <Filter title={filterNames[index]} items={item} key={index}/>
                                )
                            })
                        }
                    </View>
                ) : null
            }

            <View style={{height: vs(305)}}>
                <Animated.ScrollView
                    style={{width: "100%"}} showsVerticalScrollIndicator={false}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                        { useNativeDriver: true },
                    )}
                >
                    {
                        displayPosts.length > 0 ? (
                        displayPosts.map((post, index) => {
                            return(
                                <Post scrollY={scrollY} index={index} post={post} key={index}/>
                            )
                        })
                        ) : (
                            <View>
                                <Text style={styles.notFound}>No pudimos encontrar lo que estas buscando</Text>
                            </View>
                        )
                    }
                </Animated.ScrollView>
            </View>
        </View>
    )
}

export default TutorshipsScreen

const styles = StyleSheet.create({
    contentContainer: {
        backgroundColor: "white",
        marginTop: vs(5),
        paddingHorizontal: s(22),
        paddingVertical: vs(20),
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: "100%",
    },
    titles: {
        fontFamily: "SemiBold",
        fontSize: vs(11),
        color: "#6386FF",
        marginLeft: s(8),
        marginBottom: vs(3),
    },
    filterText: {
        fontFamily: "Light",
        fontSize: vs(9),
        color: "#6386FF",
        textDecorationLine: "underline",
        marginLeft: s(10),
        marginTop: vs(-7),
    },
    notFound: {
        fontFamily: "Light",
        fontSize: vs(10),
        color: "#6386FF",
        textAlign: "center",
        justifyContent: "center",
        marginTop: vs(15),
        marginHorizontal: s(60),
    },
})
