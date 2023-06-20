import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from
	"react-navigation-material-bottom-tabs";

import HomeScreen from "./HomeScreen1";
import UserScreen from "./SettingsScreen";
import SettingScreen from "./Settings";

const TabNavigator = createMaterialBottomTabNavigator(
{
	Home: {
	screen: HomeScreen,
	navigationOptions: {
		tabBarLabel: "Home",
		tabBarIcon: (tabInfo) => (
		<Ionicons
			name="md-home"
			size={tabInfo.focused ? 26 : 20}
			color={tabInfo.tintColor}
		/>
		),
	},
	},
	User: {
	screen: UserScreen,
	navigationOptions: {
		tabBarLabel: "User",
		tabBarIcon: (tabInfo) => (
		<Ionicons
			name="md-person-circle-outline"
			size={tabInfo.focused ? 26 : 20}
			color={tabInfo.tintColor}
		/>
		),
	},
	},
	Setting: {
	screen: SettingScreen,
	navigationOptions: {
		tabBarLabel: "Setting",
		tabBarIcon: (tabInfo) => (
		<Ionicons
			name="md-settings-outline"
			size={tabInfo.focused ? 26 : 20}
			color={tabInfo.tintColor}
		/>
		),
	},
	},
},
{
	initialRouteName: "Home",
	barStyle: { backgroundColor: "#006600" , marginLeft: 10, marginRight: 10, },
}
);

const Navigator = createAppContainer(TabNavigator);

export default function BottomNav() {
return (
	<Navigator>
	<HomeScreen />
	</Navigator>
);
}
