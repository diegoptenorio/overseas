import React from 'react';
import { Text, View } from 'react-native';
import { Header } from '../../features';
import style from './style';

export const Detail = () => (
    <View style={style.Container}>
        <Header />
        <Text>Detail</Text>
    </View>
);