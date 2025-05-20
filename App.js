import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OnboardingScreen from './src/screens/OnboardingScreen';
import BottomTabs from './src/navigation/BottomTabs';
import AddScreen from './src/screens/AddScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Home" component={BottomTabs} />
        <Stack.Screen name="AddScreen" component={AddScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
