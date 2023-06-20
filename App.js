import * as React from "react";
import { View, Text, Button , StyleSheet, TouchableOpacity} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Register from "./components/Register";
import DetailsPage from "./components/DetailsPage";
import Tabs from "./components/Tabs";
import BottomNav from "./screens/BottomNav";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnTex} onPress={() => navigation.push("Create an Account")}>
          Create an Account
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnTex} onPress={() => navigation.push("Tabs")}>
          Tabs
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnTex} onPress={() => navigation.push("bottom")}>
          Bottom Tabs
        </Text>
      </TouchableOpacity>
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Create an Account" 
        
        component={Register} />
        <Stack.Screen name="Details Page" component={DetailsPage} />
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="bottom" component={BottomNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: 800,
    marginBottom: 40,
  },
  btn: {
    height: 40,
    marginTop: 10,
    backgroundColor: "darkblue",
    width: 250,
    borderRadius: 6,
  },
  btnTex: {
    color: "white",
    textAlign: "center",
    marginTop: 9,
    fontSize: 16,
  },

});

export default App;
