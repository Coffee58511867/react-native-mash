import React from "react";
import { Image, StyleSheet, View , Text} from "react-native";

const DetailsPage = () => {
    return(
       <View style={styles.container}>
        <Image source={ uri = 'https://lh3.googleusercontent.com/p/AF1QipPtJGtJH74I_-fcuBmbUpK6-uaKSqABUlEJjgA=s680-w680-h510'}>
        </Image>
        <Text style={styles.text}>Book Flight Now</Text>
       </View>
    )
}
const styles = StyleSheet.create({
container :{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
},
text : {
    fontSize: 30,
    fontWeight: 600,
    color: 'blue',
}
})
export default DetailsPage;