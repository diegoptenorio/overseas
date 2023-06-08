import React from 'react';
import { View } from 'react-native';

import { HighLights, Location, SearchBar } from '../../features';
import style from './style';

export const Home = () => (
    <View style={style.Container}>
        <Location />
        <SearchBar />
        <HighLights />
    </View>
);
