import { registerRootComponent } from 'expo';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './navigation/DrawerNavigation';
import { AppRegistry } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

registerRootComponent(App);