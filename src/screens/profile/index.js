import React from 'react';
import { View } from 'react-native';
import { Header } from '../../features';
import style from './style';

export const Profile = () => (
    <View>
        <Header title={'Perfil'} />
        <View style={style.Container}>
        </View>
    </View>
);