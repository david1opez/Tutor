import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {s, vs} from 'react-native-size-matters';

const BestTutorsLoading = () => {
    return (
        <View style={styles.container}>

            <View style={styles.fakeCard}>
                <View style={styles.fakeCardHeader} />
                <View style={styles.fakeCardBody} />
            </View>
            
            <View style={styles.fakeCard}>
                <View style={styles.fakeCardHeader} />
                <View style={styles.fakeCardBody} />
            </View>

        </View>
    )
}

export default BestTutorsLoading

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        marginLeft: s(-20),
        marginBottom: vs(-5),
    },
    fakeCard: {
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: "#6386FF",
        height: vs(47),
        marginTop: vs(7),
        paddingHorizontal: s(5),
        paddingRight: s(7),
        justifyContent: "center",
        marginLeft: s(23),
        minWidth: s(150),
        opacity: 0.6,
    },
    fakeCardHeader: {
        height: vs(9),
        width: "70%",
        backgroundColor: "#D7E0FF",
        marginLeft: s(7),
        marginBottom: vs(8),
        borderRadius: 10,
    },
    fakeCardBody: {
        height: vs(5),
        width: "85%",
        backgroundColor: "#D7E0FF",
        marginLeft: s(7),
        borderRadius: 10,
    },
})
