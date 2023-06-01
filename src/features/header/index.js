import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { IconGoBack } from '../../assets/img';
import style from './style';

export const Header = ({ title }) => {
    const navigation = useNavigation(); 
    return (
        <View style={style.Container}>
            <Pressable style={style.goBackButton} onPress={() => navigation.goBack()}>
                <Image
                    style={style.goBackFilter}
                    source={IconGoBack}
                />
            </Pressable>
            <Text style={style.h1}>{title}</Text>
            <View style={style.goBackButton} />
        </View>
    )
};