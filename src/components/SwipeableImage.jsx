import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

export default function SwipeableImage({ user }) {
    return (
        <View>
            <Image source={{
                uri: user.picture.medium
            }} style={styles.photo} />
            <View style={styles.textContainer}>
                <View style={styles.textRow}>

                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({

    textContainer:{
        position:"absolute",
        bottom:20,
        left:20
    },
    photo: {
        height: "500px",
        resizeMode: "cover",
        borderRadius: 20,
    },
    textRow:{
        flexDirection:"row"
    }
})