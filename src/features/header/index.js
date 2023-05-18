import React from 'react';
import { Text, View } from 'react-native';
import style from './style';

export const Header = ({ title }) => (
    <View style={style.Container}>
        <Text>{title}</Text>
    </View>
);