import React, {useState} from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { s, vs } from 'react-native-size-matters';


const Header = ({name, reviews, fav}) => {
    const [favorite, setfavorite] = useState(fav);

    let rating = 0;

    if (reviews.length > 1) {
        reviews.forEach(review => {
            rating += review.stars;
        });
        rating = Math.floor(rating / reviews.length);
    }

    let array = [];
    for(let i=0; i<rating; i++) {array.push("")};

    return (
        <View style={styles.container}>

            <View>
                <Text style={styles.text}>{name}</Text>
                {
                    array.length > 0 ?
                    <View style={styles.starsContainer}>
                        {array.map((star, index) => {
                            return (
                                <Image key={index} source={require('../../../assets/icons/star.png')} style={styles.star}/>
                            )
                        })}
                    </View>
                    : null
                }
            </View>

            <TouchableOpacity style={styles.favorite} onPress={() => {setfavorite(!favorite);}}>
                {
                    favorite ?
                        <Image source={require('../../../assets/icons/filledHeart.png')} style={styles.favoriteIcon}/>
                    :
                        <Image source={require('../../../assets/icons/heart.png')} style={styles.favoriteIcon}/>
                }
            </TouchableOpacity>

        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: vs(12),
        paddingBottom: 0,
        flexDirection: 'row',
        marginRight: s(20),
    },
    starsContainer: {
        flexDirection: 'row',
        paddingLeft: s(23),
        marginBottom: vs(12),

    },
    star: {
        width: s(12),
        height: s(12),
        marginRight: s(2),
    },
    text: {
        fontSize: s(18.5),
        marginHorizontal: 20,
        fontFamily: 'SemiBold',
        color: 'black',
        marginTop: vs(4),
    },
    favoriteIcon: {
        width: s(23),
        height: s(19.8),
        marginRight: s(15),
    },
})
