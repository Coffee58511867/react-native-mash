import React from "react";
import { View, Button , Text ,TouchableOpacity , StyleSheet} from "react-native";

function Register({ navigation }) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Create an Account</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container : {
        flex: 1, 
        alignItems: "center", 
        justifyContent: "center" ,
    },
    text:
    {
       fontSize: 30,
       fontWeight: 800,
    }
  })
export default Register;