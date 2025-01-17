import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

import Chat from '../Chat/Chat';
import Home from '../Home/Home';
import Inbox from '../Inbox/Inbox';
import Matches from '../Matches/Matches';
import Prime from '../Prime/Prime';
import { enableScreens } from 'react-native-screens';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileDetails from '../ProfileDetails/ProfileDetails';
import CreateProfile from '../CreateProfile/CreateProfile';
import HomeStack from '../Home/HomeStack';
import MatchesStack from '../Matches/MatchesStack';
import PrimeStack from '../Prime/PrimeStack';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
enableScreens();

const { height } = Dimensions.get("window");

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: '#D9D9D9', height: height / 16 },
        tabBarActiveTintColor: 'black',
        tabBarLabelStyle: { fontWeight: 'bold', fontSize: 15 }
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home-outline" color={color} size={size} />
          ),
          title: "Home"
        }}
      />

      <Tab.Screen
        name="MatchesStack"
        component={MatchesStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart-outline" color={color} size={size} />
          ),
          title: "Matches"
        }}
      />
      <Tab.Screen
        name="PrimeStack"
        component={PrimeStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="star-outline" color={color} size={size} />
          ),
          title: "Prime"
        }}
      />
    </Tab.Navigator>
  )
}

const Layout = () => {
  return (
     <Drawer.Navigator screenOptions={{ headerShown: false ,
      drawerStyle:{
        backgroundColor:'#f5f5f5'
      },
      drawerLabelStyle: {
        color: '#561825', // Set your desired text color
        fontWeight: 'bold', // Optional: make text bold
      },
      drawerActiveTintColor: '#E9BA9B',
      drawerInactiveTintColor: '#000'
      }}>
      <Drawer.Screen name='Tabs' component={BottomTabs} options={{ drawerLabel: () => null, title: null, drawerItemStyle: { height: 0 } }}/>
      <Drawer.Screen name='Create Profile' component={CreateProfile} />
     </Drawer.Navigator>
  );
};

export default Layout;
