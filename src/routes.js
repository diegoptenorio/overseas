import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
    Detail, Home, Payment, Profile, Schedule, Search,
} from './screens';

const Stack = createNativeStackNavigator();

const Routes = () => (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Detail" component={Detail} />
            <Stack.Screen name="Payment" component={Payment} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Schedule" component={Schedule} />
            <Stack.Screen name="Search" component={Search} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default Routes;
