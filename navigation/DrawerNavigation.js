import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabNavigator from "./TabNavigator";
import Profile from '../screens/Profile';

const Drawer = createBottomTabNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={TabNavigator} />
            <Drawer.Screen name="Profile" component={Profile} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;