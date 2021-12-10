import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Signup from '../components/Signup';
import Signin from '../components/Signin';
import SplashScreen from '../components/SplashScreen';
import TabScreen from '../components/TabNavigation/TabScreen';

const Stack = createStackNavigator();

const screenOptionStyle = {
    headerShown: false,
};

export default function HomeStackNavigator() {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>

            <Stack.Screen name='SplashScreen' component={SplashScreen} />   
            <Stack.Screen name='Signin' component={Signin} />
            <Stack.Screen name='Signup' component={Signup} />   
            <Stack.Screen name='TabScreen' component={TabScreen} /> 
        </Stack.Navigator>
    );
}