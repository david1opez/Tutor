import React from 'react'
import { StyleSheet, Text, View, Image, StatusBar, ScrollView } from 'react-native'
import {s, vs} from 'react-native-size-matters';

// COMPONENTS
import Chat from '../components/MessagesScreen/Chat.js';

const MessagesScreen = () => {
    return (
        <View style={styles.container}>

            <View style={styles.navbar}>

                <View style={styles.logoContainer}>
                    <Image source={require("../../assets/logo.png")} style={styles.logo}/>
                    <Text style={styles.logoText}>Tutor</Text>
                </View>

                <Image source={require("../../assets/icons/return.png")} style={styles.returnIcon}/>
            </View>

            <View style={styles.headerContainer}>
                <Text style={styles.title}>Mensajes</Text>
                <Text style={styles.info}>12 chats / 2 mensajes sin leer</Text>
            </View>

            <ScrollView style={styles.chatsContainer} horizontal={true}>

                <Chat name={"Maricarmen Estrada"} unreadMessages={3} photo={"https://www.helpguide.org/wp-content/uploads/pensive-woman-looking-out-window-768.jpg"}/>
                <Chat name={"Maricarmen"} unreadMessages={3} photo={"https://www.helpguide.org/wp-content/uploads/pensive-woman-looking-out-window-768.jpg"}/>
                <Chat name={"Maricarmen"} unreadMessages={0} photo={"https://www.helpguide.org/wp-content/uploads/pensive-woman-looking-out-window-768.jpg"}/>
                <Chat name={"Maricarmen"} unreadMessages={0} photo={"https://www.helpguide.org/wp-content/uploads/pensive-woman-looking-out-window-768.jpg"}/>
                <Chat name={"Maricarmen"} unreadMessages={0} photo={"https://www.helpguide.org/wp-content/uploads/pensive-woman-looking-out-window-768.jpg"}/>
                <Chat name={"Maricarmen"} unreadMessages={0} photo={"https://www.helpguide.org/wp-content/uploads/pensive-woman-looking-out-window-768.jpg"}/>
                <Chat name={"Maricarmen"} unreadMessages={0} photo={"https://www.helpguide.org/wp-content/uploads/pensive-woman-looking-out-window-768.jpg"}/>
                <Chat name={"Maricarmen"} unreadMessages={0} photo={"https://www.helpguide.org/wp-content/uploads/pensive-woman-looking-out-window-768.jpg"}/>

            </ScrollView>
        </View>
    )
}

export default MessagesScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#6386FF",
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    navbar: {
        flexDirection:'row',
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: vs(15),
        paddingHorizontal: s(16),

    },
    logoContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    logo: {
        width: vs(22),
        height: vs(14),
    },
    logoText: {
        fontSize: vs(11.5),
        fontFamily: "SemiBold",
        color: "white",
        marginLeft: s(6),
        marginTop: vs(8),
    },
    returnIcon: {
        width: vs(22),
        height: vs(22),
    },
    headerContainer: {
        marginTop: vs(20),
        marginBottom: vs(20),
        paddingHorizontal: s(16),
    },
    title: {
        fontSize: vs(17),
        fontFamily: "SemiBold",
        color: "#fff",
        letterSpacing: 1,
    },
    info: {
        fontSize: vs(9),
        fontFamily: "Light",
        color: "#fff",
    },
})
