import React from 'react';
import { Image, Text, View } from 'react-native';
import { Header } from '../../features';
import style from './style';

export const Detail = ({ route }) => {
    const { car } = route.params; 
    return (
        <View style={style.Container}>
            <Header title={car.name} />
            <View>
                <Image
                    style={style.Car}
                    source={car.image}
                />
                <View style={style.Info}>
                    <Text>{car.name}</Text>
                    <Text>{car.manufactor}</Text>
                    <Text>{car.city}</Text>
                    <Text>R$ {car.price}/h</Text>
                </View>
            </View>
        </View>
    )
};