import React from 'react'
import { StyleSheet, View, ImageBackground, TouchableOpacity, Image } from 'react-native'
import {useNavigation} from '@react-navigation/native';
import {s, vs} from 'react-native-size-matters';

const ProfileImage = ({image}) => {
    const navigation = useNavigation();

    return (
        <ImageBackground source={{uri: image}} resizeMode="cover" style={[styles.imageBackground]}>

            {/* Dark overlay */}
            <View style={styles.darkBackground}>
                {/* Top buttons */}
                <View style={styles.topButtons}>

                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('../../../assets/icons/return.png')} style={styles.returnButton}/>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image source={require('../../../assets/icons/menuDots.png')} style={styles.buttonIcon}/>
                    </TouchableOpacity>

                </View>

                {/* Message button */}
                <TouchableOpacity style={styles.messageButton} onPress={() => navigation.navigate("Messages", {id})}>
                    <Image source={require('../../../assets/icons/message.png')} style={styles.messageButtonIcon}/>
                </TouchableOpacity>
            </View>

        </ImageBackground>
    )
}

export default ProfileImage

const styles = StyleSheet.create({
    imageBackground: {
        justifyContent: 'center',
        height: vs(220),
    },
    darkBackground: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.25)",
    },
    returnButton: {
        width: vs(22),
        height: vs(22),
    },
    buttonIcon: {
        marginTop: vs(7),
        width: vs(18),
        height: vs(16),
    },
    topButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: vs(32),
        marginHorizontal: s(17),
    },
    messageButton: {
        position: 'absolute',
        bottom: vs(33),
        right: s(17),
        backgroundColor: '#6386FF',
        width: vs(35),
        height: vs(35),
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: vs(2),
    },
    messageButtonIcon: {
        width: vs(18),
        height: vs(18),
    },
})
