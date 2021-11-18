import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { s, vs } from 'react-native-size-matters';


export default function NavbarComponent(props) {
    let showMenu = props.showMenu;

    return (
        <View style={styles.navbar}>
            <View style={{flexDirection: "row", alignItems: "center"}}>
                <Image source={require("../../../assets/logo.png")} style={styles.logo}/>
                <Text style={styles.logoText}>Tutor</Text>
            </View>

            <TouchableOpacity onPress={() => {props.setValue(!showMenu)}}    
            >
                <Image source={require("../../../assets/icons/menu.png")} style={styles.menuButton}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        flexDirection:'row',
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: vs(15),
        marginHorizontal: s(16),
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
    menuButton: {
        height: vs(14),
        width: vs(14.5)
    },
})
