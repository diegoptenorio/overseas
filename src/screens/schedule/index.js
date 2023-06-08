import React from 'react';
import { View } from 'react-native';
import { Header } from '../../features';
import style from './style';

export const Schedule = () => (
    <View>
        <Header title="Agendar" />
        <View style={style.Container} />
    </View>
);
