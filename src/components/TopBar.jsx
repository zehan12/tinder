import { View, Text, StyleSheet } from "react-native"
import { FontAwesome5, FontAwesome } from "@expo/vector-icons"
import tailwind from "tailwind-rn"

const TopBar = () => {
    return (
        <View style={styles.container}>
            {/* <Text style={tailwind("bg-red-400")}>flksak</Text> */}
            <FontAwesome5 name="fire" size={27} color="#F06795"></FontAwesome5>
            <FontAwesome5 name="comments" size={27} color="#5c5c5c"></FontAwesome5>
            <FontAwesome5 name="user" size={27} color="#5c5c5c"></FontAwesome5>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 15,
        backgroundColor: 'white',
        shadowColor:"#000",
        shadowOffset:{
            width:0,
            height:10
        },
        shadowOpacity: 0.12,
        shadowRadius: 5.46,
        elevation:9
    }
})

export default TopBar;