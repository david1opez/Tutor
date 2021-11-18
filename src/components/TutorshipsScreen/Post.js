import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Animated } from 'react-native';
import { s, vs } from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';


const Post = ({index, scrollY, post}) => {
    const navigation = useNavigation();

    let stars = [];
    for(let i=0; i<post.stars; i++) {stars.push("")};

    let margin = post.first? vs(15) : vs(0);

    const inputRange = [
        -1,
        0,
        (135 * index),
        (135 * (index + 1)),
    ]

    const scale = scrollY.interpolate({
        inputRange: inputRange,
        outputRange: [1, 1, 1, 0.6],
    })
    
    return (
        <Animated.View
            style={{ transform: [{ scale }] }}
        >
            <TouchableOpacity style={[styles.postContainer, {marginTop: margin}]}>

                <View style={{width: "70%"}}>
                    <Text style={styles.postTitle}>{post.title}</Text>            
                    <Text style={styles.postLevel}>{post.level}</Text>
                    <TouchableOpacity style={styles.postNameContainer} onPress={() => navigation.navigate("Tutor")}>
                        <Text style={styles.postNameTitle}>Ofrecido por: </Text>
                        <Text style={styles.postName}>{post.tutor}</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <View style={styles.postStarsContainer}>
                        {stars.map((star, index) => {
                            return (
                                <Image key={index} source={require('../../../assets/icons/star.png')} style={styles.postStar}/>
                            )
                        })}
                    </View>
                                                
                    {post.price > 0 &&
                        <View style={{flexDirection:"row", alignItems: 'flex-end'}}>
                            <Text style={styles.postPrice}>{`$${post.price}`}</Text>
                            <Text style={styles.postPriceTag}>hra</Text>
                        </View>
                    }
                    {post.price === 0 &&
                        <View style={{flexDirection:"row", alignItems: 'flex-end'}}>
                            <Text style={[styles.postPrice, {marginLeft: s(8), fontSize: vs(15)}]}>GRATIS</Text>
                        </View>
                    }
                                
                </View>
            </TouchableOpacity>
        </Animated.View>
    )
}

export default Post

const styles = StyleSheet.create({
    postContainer: {
        backgroundColor: "#fff",
        width: "97%",
        borderRadius: 15,
        marginBottom: vs(25),
        paddingHorizontal: s(15),
        paddingTop: vs(7),
        paddingBottom: 7,
        flexDirection: "row",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginLeft: s(5),
    },
    postTitle: {
        fontFamily: "Medium",
        fontSize: vs(11),
        color: "black"
    },
    postLevel: {
        fontFamily: "Medium",
        fontSize: vs(8),
        color: "#6386FF"
    },
    postNameContainer: {
        flexDirection: "row",
        marginTop: vs(5)
    },
    postNameTitle: {
        fontFamily: "Light",
        fontSize: vs(7),
        marginRight: s(3),
        marginTop: vs(2),
        color: "black"
    },
    postName: {
        fontFamily: "SemiBold",
        color: "#6386FF",
        fontSize: vs(9)
    },
    postStarsContainer: {
        flex: 1,
        flexDirection: 'row',
        marginTop: vs(5),
    },
    postStar: {
        width: vs(10),
        height: vs(10),
        marginRight: s(3),
    },
    postPrice: {
        fontFamily: "SemiBold",
        fontSize: vs(17),
        color: 'black',
        lineHeight: vs(20),
        marginRight: s(3)
    },
    postPriceTag: {
        fontFamily: "SemiBold",
        fontSize: vs(8),
        color: 'black'
    }
})
