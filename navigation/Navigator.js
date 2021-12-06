import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Signup from '../components/Signup';
import Signin from '../components/Signin';
import Firestore from '../components/Firestore';
import Loadall from '../components/Loadall';
import Upload from '../components/Upload';
import SplashScreen from '../components/SplashScreen';
import TabScreen from '../components/TabNavigation/TabScreen';

const Stack = createStackNavigator();

const screenOptionStyle = {
    headerShown: false,
};

export default function HomeStackNavigator() {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>

            {/* <Stack.Screen name='SplashScreen' component={SplashScreen} />    */}
            {/* <Stack.Screen name='Signin' component={Signin} /> */}
            {/* <Stack.Screen name='Signup' component={Signup} />    */}
            <Stack.Screen name='TabScreen' component={TabScreen} /> 
            {/* <Stack.Screen name='Firestore' component={Firestore} /> */}
            {/* <Stack.Screen name='Loadall' component={Loadall} /> */}
            {/* <Stack.Screen name='Upload' component={Upload} />   */}
        </Stack.Navigator>
    );
}