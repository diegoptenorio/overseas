import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import style from './style';

export const Loading = () => {
    return (
        <View style={style.Loading}>
            <ActivityIndicator size="large" color="#2196f3" />
            <Text style={style.Warning}>A primeira requisição pode demorar bastante</Text>
        </View>
    )
};