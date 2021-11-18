import React, { useState, useRef, useCallback } from 'react';
import AppLoading from 'expo-app-loading';
import { Animated, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import { s, vs } from 'react-native-size-matters';

// FIREBASE
import { doc, getDoc } from "firebase/firestore";
import {db} from '../../firebase/firebase';
import { getAuth, updateProfile  } from "firebase/auth";

// COMPONENTS
import Header from '../components/TutorScreen/Header';
import Reviews from '../components/TutorScreen/Reviews';
import SubjectsOffered from '../components/TutorScreen/SubjectsOffered';
import ProfileImage from '../components/TutorScreen/ProfileImage';


const auth = getAuth();

const TutorScreen = ({route}) => {
    const id = route.params.id;
    const uid = auth.currentUser.uid;

    const userRef = doc(db, "Users", uid);
    
    const [isFavorite, setisFavorite] = useState(false);
    const [loadingFavorites, setloadingFavorites] = useState(true);
    
    if(loadingFavorites) {
        getDoc(userRef).then(doc => {
            let favoriteTutors = doc.data().favorites;

            if (favoriteTutors.includes(id)) {
                setisFavorite(true);
            }
        })
        .then(() => {
            setloadingFavorites(false);
        })
    }
    
    const ref = doc(db, "Tutors", id);

    const [tutor, setTutor] = useState(null);
    const [loadingTutor, setloadingTutor] = useState(true);

    if(loadingTutor) {
        getDoc(ref).then(doc => {
            setTutor(doc.data());
        })
        .then(() => {
            setloadingTutor(false);
        })
    }


    if(loadingTutor) {
        return <AppLoading />
    }
    return (
        <View>
            {/* Image background */}
            <ProfileImage image={tutor.photo} id={id}/>

            <View style={styles.body}>
                
                    
                    <ScrollView showsVerticalScrollIndicator={false}>

                        <Header name={tutor.name} reviews={tutor.reviews} fav={isFavorite}/>

                        <SubjectsOffered subjects={tutor.subjects} />

                        <Text style={styles.description}>{tutor.description}</Text>

                        <View>
                            <Text style={styles.title}>Estudios :</Text>
                            <View>
                                {tutor.studies.map((study, index) => {
                                    return (
                                        <Text key={index} style={styles.study}>{study}</Text>
                                    )
                                })}
                            </View>

                            <Text style={styles.title}>Tutorias :</Text>
                            <View>
                                {tutor.tutorships.map((tutoria, index) => {
                                    return (
                                        <TouchableOpacity key={index}>
                                            <Text style={styles.tutoria}>{tutoria}</Text>
                                        </TouchableOpacity>
                                    )
                                })}
                            </View>
                        </View>

                        <Reviews reviews={tutor.reviews}/>

                    </ScrollView>

                
            </View>
        </View>
    )
}

export default TutorScreen

const styles = StyleSheet.create({
    body: {
        borderRadius: 20,
        backgroundColor: "white",
        transform: [{translateY: vs(-15)}],
        height: vs(500),
    },
    description: {
        fontSize: vs(8),
        fontFamily: "Light",
        marginHorizontal: s(25),
        marginBottom: vs(22),
    },
    title: {
        fontSize: vs(9),
        fontFamily: "Medium",
        marginHorizontal: s(23),
        marginBottom: vs(3),
    },
    study: {
        fontSize: vs(7.5),
        fontFamily: "Light",
        marginHorizontal: s(33),
        marginBottom: vs(5)
    },
    tutoria: {
        fontSize: vs(7.5),
        fontFamily: "Light",
        marginHorizontal: s(33),
        marginBottom: vs(4),
        color: "#6386FF",
        textDecorationLine: "underline"
    },
});