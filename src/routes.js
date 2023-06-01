import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home, Detail, Profile, Schedule } from './screens';

const AppStack = createNativeStackNavigator();

const Routes = () => (
    <NavigationContainer>
        <AppStack.Navigator screenOptions= {{ headerShown: false }}>
            <AppStack.Screen name="Home" component={Home} />
            <AppStack.Screen name="Detail" component={Detail} />
            <AppStack.Screen name="Profile" component={Profile} />
            <AppStack.Screen name="Schedule" component={Schedule} />
        </AppStack.Navigator>
    </NavigationContainer>
);

export default Routes;