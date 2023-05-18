import React from 'react';
import { Text, View } from 'react-native';

import { Header, HighLights, Search } from '../../features';
import style from './style';

export const Home = () => (
    <View style={style.Container}>
        <Header />
        <Text>Home</Text>
        <Search />
        <HighLights />
    </View>
);