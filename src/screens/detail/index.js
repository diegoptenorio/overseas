import React from 'react';
import { Button, Image, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Header } from '../../features';
import { getCarImageByModel } from '../../utils';
import style from './style';

export const Detail = ({ route }) => {
    const { car } = route.params;
    const navigation = useNavigation();
    const goTo = (component, props) => navigation.navigate(component, props); 
    return (
        <>
            <Header title={car?.modelo} />
            <Image
                style={style.Car}
                source={getCarImageByModel(car?.modelo)}
            />
            <View style={style.Container}>
                <View style={style.Info}>
                    <Text style={style.Title}>Marca</Text>
                    <Text style={style.Value}>{car?.marca}</Text>
                </View>
                <View style={style.Info}>
                    <Text style={style.Title}>Ano</Text>
                    <Text style={style.Value}>{car?.ano}</Text>
                </View>
                <View style={style.Info}>
                    <Text style={style.Title}>Velocidade máxima</Text>
                    <Text style={style.Value}>{car?.velocidade}</Text>
                </View>
                <View style={style.Info}>
                    <Text style={style.Title}>Autonomia</Text>
                    <Text style={style.Value}>{car?.autonomiaKm} km</Text>
                </View>
                <View style={style.Info}>
                    <Text style={style.Title}>Autonomia</Text>
                    <Text style={style.Value}>R$ {car?.valorHora} /h</Text>
                </View>
                <Button title='Alugar' onPress={() => goTo('Schedule')} />
            </View>
        </>
    )
};