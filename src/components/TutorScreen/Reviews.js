import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import { s, vs } from 'react-native-size-matters';


const Reviews = ({reviews}) => {
    return (
        <View style={{marginBottom: 0, marginTop: vs(30)}}>
            {reviews.length > 1 || reviews.length === 0 ?
                <Text style={styles.title}>{reviews.length}  Reseñas</Text> :
                <Text style={styles.title}>{reviews.length}  Reseña</Text>
            }
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {reviews.map((review, index) => {
                let stars = [];

                for (let i = 0; i < review.stars; i++) {
                    stars.push(" ");
                }

                return (
                    <View key={index} style={styles.review}>
                        <View key={index} style={styles.header}>
                            <Text style={styles.name}>{review.name}</Text>
                            <View>
                                <View style={styles.stars}>
                                    {stars.map((star, index) => {
                                        return (
                                            <Image source={require("../../../assets/icons/yellowStar.png")} key={index} style={styles.star} />
                                        )
                                    })}
                                </View>
                            </View>

                        </View>
                        <Text style={styles.text}>{review.text}</Text>
                    </View>
                )
            })}
            </ScrollView>
        </View>
    )
}

export default Reviews

const styles = StyleSheet.create({
    title: {
        marginLeft: s(25),
        fontFamily: 'SemiBold',
        color: "#6386FF"
    },
    review: {
        marginRight: s(5),
        marginLeft: s(18),
        marginTop: vs(7),
        marginBottom: vs(25),
        borderRadius: 10,
        paddingHorizontal: s(15),
        paddingVertical: vs(7),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: "#fff"
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    name: {
        fontFamily: 'SemiBold',
        marginRight: s(7),
    },
    stars: {
        flexDirection: 'row',
    },
    star: {
        width: vs(9),
        height: vs(9),
        marginRight: s(3),
    },
    text: {
        fontFamily: 'Light',
        fontSize: vs(7),
        width: s(200),
        marginTop: vs(3),
    }
})
