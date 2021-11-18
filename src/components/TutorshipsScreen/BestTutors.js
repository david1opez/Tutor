import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import {s, vs} from 'react-native-size-matters';

//COMPONENTS
import BestTutorCard from './BestTutorCard';


const BestTutors = ({bestTutors}) => {
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.bestTutorsContainer}>
            {bestTutors.map((tutor, index) => {
                return (
                    <BestTutorCard key={index} name={tutor.name} subjects={tutor.subjects} id={tutor.id} last={tutor.last}/>
                );
            })}
        </ScrollView>
    )
}

export default BestTutors

const styles = StyleSheet.create({
    bestTutorsContainer: {
        flexDirection: "row",
        width: "117%",
        marginLeft: s(-20),
        marginBottom: vs(-5),
    },
})
