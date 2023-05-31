import React from 'react';
import { Image, Text, View } from 'react-native';
import { Header } from '../../features';
import { getCarImageByModel } from '../../utils';
import style from './style';

export const Detail = ({ route }) => {
    const { car } = route.params; 
    return (
        <View style={style.Container}>
            <Header title={car?.modelo} />
            <View>
                <Image
                    style={style.Car}
                    source={getCarImageByModel(car?.modelo)}
                />
                <View style={style.Info}>
                    <Text>{car?.modelo}</Text>
                    <Text>{car?.marca}</Text>
                    <Text>{car?.city}</Text>
                    <Text>R$ {car?.valorHora}/h</Text>
                </View>
            </View>
        </View>
    )
};