import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, ScrollView, TouchableOpacity, Image } from 'react-native';
import { vs } from 'react-native-size-matters';
import { ShakeEventExpo } from '../ShakeEventExpo';

// FIREBASE
import { doc, getDoc } from "firebase/firestore";
import {db} from '../../firebase/firebase';
import { getAuth  } from "firebase/auth";

const auth = getAuth();

//COMPONENTS
import NavbarComponent from '../components/HomeScreen/NavbarComponent'
import HeaderTitle from '../components/HomeScreen/HeaderTitle';
import QuestionPopup from '../components/HomeScreen/QuestionPopup';
import TutorshipsScreen from './TutorshipsScreen';
import QuestionsScreen from './QuestionsScreen';
import MenuComponent from '../components/HomeScreen/MenuComponent';


const HomeScreen = () => {
    const [showComponent, setShowComponent] = useState(false);
    const [questionsPage, setquestionsPage] = useState(false);
    const [currentPageButton, setCurrentPageButton] = useState("Tutorias");

    const name = auth.currentUser.displayName || "";
    const photo = auth.currentUser.photoURL || "";

    let shake = () => {
        ShakeEventExpo.addListener(() => {
            ShakeEventExpo.removeListener();
            ShakeEventExpo.addListener(() => {
                ShakeEventExpo.removeListener();
                setShowComponent(true);
                ShakeEventExpo.addListener(() => {
                    ShakeEventExpo.removeListener();
                    ShakeEventExpo.addListener(() => {
                        ShakeEventExpo.removeListener();
                        setShowComponent(false);
                        shake;
                    });
                })
            });
        });
    }

    shake();

    const ref = doc(db, "BestTutors", "tutors");

    const [bestTutors, setbestTutors] = useState([]);
    const [bestTutorsLoading, setbestTutorsLoading] = useState(true);

    if(bestTutorsLoading) {
        getDoc(ref).then(doc => {
            setbestTutors(doc.data().list)
        }).then(() => {
            setbestTutorsLoading(false);
        })
    }

    const [showMenu, setshowMenu] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <NavbarComponent setValue={(value) => {setshowMenu(value)}} showMenu={showMenu} />
                {
                    showMenu ? 
                        <MenuComponent />
                    :
                    null
                }
                <HeaderTitle name={name.split(" ")[0]} photo={photo}/>

                {/* Top buttons */}
                <View style={styles.headerButtons}>
                    {
                    currentPageButton === "Tutorias" ? (
                        <TouchableOpacity style={{marginRight: vs(10)}}>
                            <Text style={styles.headerText}>Tutorías</Text>
                        </TouchableOpacity>
                    ) : 
                        <TouchableOpacity style={{marginRight: vs(10)}} onPress={() => {setquestionsPage(false); setCurrentPageButton("Tutorias")}}>
                            <Text style={styles.headerTextInactive}>Tutorías</Text>
                        </TouchableOpacity>
                    }
                    {
                        currentPageButton === "Preguntas" ? (
                            <TouchableOpacity>
                                <Text style={styles.headerText}>Preguntas</Text>
                            </TouchableOpacity>
                        ) : 
                            <TouchableOpacity onPress={() => {setquestionsPage(true); setCurrentPageButton("Preguntas")}}>
                                <Text style={styles.headerTextInactive}>Preguntas</Text>
                            </TouchableOpacity>
                    }
                    
                </View>
            </View>
            
            {
                questionsPage ? 
                    <QuestionsScreen />
                :
                    <TutorshipsScreen bestTutors={bestTutors} bestTutorsLoading={bestTutorsLoading} />
            }

            {
                showComponent ? (
                    <QuestionPopup />
                ) : null
            }

        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#6386FF",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    headerButtons: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: vs(25),
    },
    headerText: {
        fontSize: vs(10),
        fontFamily: "Medium",
        color: "white",
    },
    headerTextInactive: {
        fontSize: vs(8),
        transform: [{translateY: vs(3)}],
        fontFamily: "Medium",
        color: "white",
        opacity: 0.6,
    },
})
