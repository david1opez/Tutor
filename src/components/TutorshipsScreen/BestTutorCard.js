import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { s, vs } from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';


const BestTutorCard = ({name, subjects, id, last}) => {
    const navigation = useNavigation();

    let right = last ? s(30) : s(-7);

    return (
        <TouchableOpacity style={[styles.container, {marginRight: right}]} onPress={() => {navigation.navigate("Tutor", {id})}}>
            <View style={[styles.cardContainer]}>

                <View style={styles.titleContainer}>
                    <Text style={styles.nameTitle}>{name}</Text>
                </View>

                <Text style={styles.subtitle}>{subjects}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default BestTutorCard

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: "#7D99FF",
        height: vs(47),
        marginTop: vs(7),
        paddingHorizontal: s(5),
        paddingRight: s(7),
        justifyContent: "center",
        marginLeft: s(23),
        minWidth: s(150),
    },
    cardContainer: {
        height: vs(40),
        paddingHorizontal: s(10),
        paddingVertical: vs(4),
    },
    titleContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    nameTitle: {
        fontFamily: "Medium",
        fontSize: vs(11),
        color: "white"
    },
    subtitle: {
        fontFamily: "Light",
        fontSize: vs(7.5),
        width: "100%",
        color: "white",
    },
})
