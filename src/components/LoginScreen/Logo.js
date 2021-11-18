import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { s, vs } from 'react-native-size-matters';


const Logo = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/logo.png')} style={styles.logo} />
            <Text style={styles.text}>Tutor</Text>
        </View>
    )
}

export default Logo

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: vs(20),
        marginLeft: s(17)
    },
    logo: {
        width: vs(25),
        height: vs(15),
    },
    text: {
        fontSize: vs(13),
        fontFamily: 'SemiBold',
        color: 'white',
        marginLeft: s(5),
        transform: [{translateY: vs(3)}]
    },
})
