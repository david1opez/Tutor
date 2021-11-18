import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';
import {s, vs} from 'react-native-size-matters';

const Chat = (props) => {
    let nameMargin = props.unreadMessages > 0 ? s(-10) : vs(3.5);
    return (
        <TouchableOpacity style={styles.chat}>
            <Image source={{uri: props.photo}} style={styles.chatPhoto}/>

            {
                props.unreadMessages > 0 ?
                <View style={styles.bubble}>
                    <Text style={styles.bubbleText}>{props.unreadMessages}</Text>
                </View>
                : null
            }

            <Text style={[styles.chatName, {marginTop: nameMargin}]}>{props.name}</Text>
        </TouchableOpacity>
    )
}

export default Chat

const styles = StyleSheet.create({
    chat: {
        alignItems: 'center',
        marginRight: s(15)
    },
    chatPhoto: {
        width: vs(40),
        height: vs(40),
        borderRadius: 25,
        borderWidth: 2,
    },
    chatName: {
        marginTop: s(-10),
        fontSize: vs(8),
        fontFamily: "Regular",
        color: "#fff",
        maxWidth: s(70),
        textAlign: 'center',
    },
    bubble: {
        left: s(15),
        bottom: vs(10),
        width: 17,
        height: 17,
        borderRadius: 10,
        backgroundColor: '#6386FF',
        borderWidth: 1.5,
        borderColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bubbleText: {
        color: '#fff',
        fontSize: vs(7),
        fontFamily: "Medium",
    }
})
