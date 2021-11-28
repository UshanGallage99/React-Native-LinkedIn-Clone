import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default class AppNavigator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
             
        };
    }
    render() {
        return (
            <Tab.Navigator>
                <Tab.Screen name="Home" component={'HomeScreen'} />
                <Tab.Screen name="Settings" component={'SettingsScreen'} />
            </Tab.Navigator>
        );
    }
}