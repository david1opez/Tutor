import React from 'react'
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native'

const SocialLogin = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image source={require('../../../assets/icons/google.png')} style={[styles.image, {marginRight: 15}]} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require('../../../assets/icons/facebook.png')} style={styles.image} />
            </TouchableOpacity>
        </View>
    )
}

export default SocialLogin

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginHorizontal: 170
    },
    image: {
        width: 30,
        height: 30
    }
})
