import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import MainStack from './stacks/MainStack';
import AddMeasurementScreen from './screens/AddMeasurementScreen';
import AddWorkout from './screens/AddWorkout';

const Stack = createNativeStackNavigator();


export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen options={{ headerShown: false }} name="Register" component={RegisterScreen} />
                <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
                <Stack.Screen options={{ headerShown: false }} name="Home" component={MainStack} />
                <Stack.Screen options={{ headerShown: false }} name="AddMeasurement" component={AddMeasurementScreen} />
                <Stack.Screen options={{ headerShown: false }} name="AddWorkout" component={AddWorkout} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
