import React, {useState} from 'react'
import { StyleSheet, Text, TouchableOpacity, ScrollView, View } from 'react-native'
import { vs } from 'react-native-size-matters';


const Filter = ({title, items}) => {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.container}>
                {items.map((item, index) => {
                    const [activeFilter, setactiveFilter] = item.active ? useState({color: "white", backgroundColor: "black"}) : useState({color: "black", backgroundColor: "white"});
                    let margin = index === items.length -1 ? 50 : 7;

                    const setAllInactive = () => {
                        items.forEach(item => {
                            item.active = false
                        })
                    }

                    return(
                        <TouchableOpacity 
                            key={index}
                            style={[styles.button, {marginRight: margin, backgroundColor: activeFilter.backgroundColor}]}
                            onPress={() => {
                                setAllInactive();
                                let configuration = item.active ? {color: "black", backgroundColor: "white"} : {color: "white", backgroundColor: "black"};
                                item.active = item.active ? false : true;
                                setactiveFilter(configuration);
                            }}
                        >
                            <Text style={[styles.itemTitle, {color: activeFilter.color}]}>{item.name}</Text>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default Filter

const styles = StyleSheet.create({
    container: {
        marginLeft: -32,
        width: "117%",
        marginTop: 4,
        paddingHorizontal: 40,
    },
    title: {
        fontSize: 12,
        fontFamily: "Medium",
        marginTop: 10,
        paddingHorizontal: 10,
    },
    button: {
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 5,
        paddingVertical: 3,
        paddingBottom: 0,
        paddingHorizontal: 10,
    },
    itemTitle: {
        fontFamily: "Medium",
        fontSize: 12
    }
})
