import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import MarinhosScreen from '../screens/screensMarinhos/MarinhosScreen';
import TerrestresScreen from '../screens/ScreenTerrestres/TerrestresScreen';
import AereosScreen from '../screens/screenAereos/AereosScreen';

import HomeIcon from '../assets/svgs/home.svg';
import MarinhosIcon from '../assets/svgs/marinhos.svg';
import TerrestresIcon from '../assets/svgs/terrestres.svg';
import AereosIcon from '../assets/svgs/aereos.svg';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' },
        tabBarStyle: {
          backgroundColor: '#f9f8fa',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          height: 80,
          position: 'absolute',
          paddingBottom: 10,
        },
        tabBarIcon: ({ focused }) => {
          const color = focused ? '#704f2c' : '#ccc';
          const size = 24;

          const IconWrapper = ({ children }) => (
            <View style={{ width: size, height: size }}>
              {children}
            </View>
          );

          switch (route.name) {
            case 'Home':
              return (
                <IconWrapper>
                  <HomeIcon />
                </IconWrapper>
              );
            case 'Marinhos':
              return (
                <IconWrapper>
                  <MarinhosIcon />
                </IconWrapper>
              );
            case 'Terrestres':
              return (
                <IconWrapper>
                  <TerrestresIcon />
                </IconWrapper>
              );
            case 'Aereos':
              return (
                <IconWrapper>
                  <AereosIcon />
                </IconWrapper>
              );
            default:
              return null;
          }
        },
        tabBarActiveTintColor: '#704f2c',
        tabBarInactiveTintColor: '#ccc',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Marinhos" component={MarinhosScreen} />
      <Tab.Screen name="Terrestres" component={TerrestresScreen} />
      <Tab.Screen name="Aereos" component={AereosScreen} />
    </Tab.Navigator>
  );
}
