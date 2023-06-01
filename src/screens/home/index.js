import React from 'react';
import { View } from 'react-native';

import { HighLights, Location, Search } from '../../features';
import style from './style';

export const Home = () => (
    <View style={style.Container}>
        <Location />
        <Search />
        <HighLights />
    </View>
);