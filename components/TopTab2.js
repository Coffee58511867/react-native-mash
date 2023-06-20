import * as React from "react";
import { Text, View, FlatList, TextInput, StyleSheet, Button } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

function HomeScreen() {
  const [Items, setItems] = React.useState([
    { key: "1", name: "Item1" },
    { key: "2", name: "Item1" },
    { key: "3", name: "Item1" },
    { key: "4", name: "Item1" },
  ]);
  return (
    <View style={{ flex: 1}}>
      <FlatList
        data={Items}
        renderItem={({ item }) => (
          <Text style={{ margin: 10 }}>{item.name}</Text>
        )}
      />
    </View>
  );
}

function SettingsScreen() {
    const [name , setName] = React.useState('');
    const [number, setNumber] = React.useState(5);

    const submit = () => {
     setNumber(number + 5);
    }  
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
     <TextInput 
     style={styles.input}
     placeholder="Enter your name"
     value={name}
     onChangeText={text => setName(text)}
     maxLength={6}
     />
     <Text style={{marginTop: 10, fontSize: 17}}>Your name is {name}</Text>
     <Text style={{marginTop: 10, fontSize: 17, fontStyle: 'italic'}}>Number is {number}</Text>
     <View style={{height: 40, width: 250, marginTop: 10,}}> 

     <Button title="Submit Form" onPress={submit}></Button>
     </View>
    </View>
  );
}
const styles = StyleSheet.create({
    input:
    {
        borderBottomWidth: 1,
        height: 40,
        width: 300,
    }
})
function ProfileScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: "blue",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>1</Text>
      </View>
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: "blue",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>2</Text>
      </View>
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: "blue",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>3</Text>
      </View>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function TopBar() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        options={{
          title: "Home",
        }}
        component={HomeScreen}
      />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
