import React from 'react';
import {
    Image, Text, TouchableOpacity, View,
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { IconUser } from '../../assets/img';
import style from './style';

export const Location = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <View style={style.Container}>
                <View>
                    <Text style={style.Title}>Localização</Text>
                    <Text style={style.Address}>São Paulo, Brasil</Text>
                </View>
                <Image
                    style={style.IconUser}
                    source={IconUser}
                />
            </View>
        </TouchableOpacity>
    );
};
