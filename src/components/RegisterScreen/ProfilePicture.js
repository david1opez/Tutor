import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import { vs } from 'react-native-size-matters';


const ProfilePicture = () => {
    return (
        <TouchableOpacity style={styles.container}>
        </TouchableOpacity>
    )
}

export default ProfilePicture

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    profilePicture: {
        width: 80,
        height: 80,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: 'white',
        marginTop: 20,
        marginBottom: 20,
    },
    placeholder: {
        fontSize: 14,
        fontFamily: 'SemiBold',
        color: 'white',
    }
})
