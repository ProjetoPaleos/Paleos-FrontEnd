import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OnboardingScreen from './src/screens/OnboardingScreen';
import BottomTabs from './src/navigation/BottomTabs';
import ViewDetailsScreen from './src/screens/screensMarinhos/ViewDetailsScreen';
import EditScreen from './src/screens/screensMarinhos/EditScreen';
import ViewDetailsScreenTerrestres from './src/screens/ScreenTerrestres/ViewDetailsScreenTerrestres';
import EditScreenTerrestres from './src/screens/ScreenTerrestres/EditscreenTerrestre';
import AddScreenMarinho from './src/screens/screensMarinhos/AddScreenMarinho';
import ViewDetailsScreenAereos from './src/screens/screenAereos/ViewDetailsScreen';
import EditScreenAereos from './src/screens/screenAereos/EditScreenAereo';
import AddScreenTerrestre from './src/screens/ScreenTerrestres/AddScreenTerrestre';
import AddScreenAereo from './src/screens/screenAereos/AddScreenAereo';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="MainTabs" component={BottomTabs} />
        <Stack.Screen name="AddScreenMarinho" component={AddScreenMarinho} />
        <Stack.Screen name="AddScreenTerrestre" component={AddScreenTerrestre} />
        <Stack.Screen name="AddScreenAereo" component={AddScreenAereo} />
        <Stack.Screen name="ViewDetails" component={ViewDetailsScreen} />
        <Stack.Screen name="EditScreen" component={EditScreen} />
        <Stack.Screen name="ViewDetailsTerrestre" component={ViewDetailsScreenTerrestres} />
        <Stack.Screen name="EditScreenTerrestres" component={EditScreenTerrestres} />
        <Stack.Screen name="ViewDetailsAereo" component={ViewDetailsScreenAereos} />
        <Stack.Screen name="EditScreenAereo" component={EditScreenAereos} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
