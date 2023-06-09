import React from 'react';
import {
    Button, Image, Text, View, SafeAreaView, ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Header } from '../../features';
import { getCarImageByModel } from '../../utils';
import style from './style';

export const Detail = ({ route }) => {
    const { car } = route.params;
    const navigation = useNavigation();
    return (
        <>
            <Header title={car?.modelo} />
            <Image
                style={style.Car}
                source={getCarImageByModel(car?.modelo)}
            />
            <View style={style.Container}>
                <SafeAreaView style={style.SpecificationList}>
                    <ScrollView>
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
                            <Text style={style.Value}>
                                {car?.autonomiaKm}
                                {' '}
                                km
                            </Text>
                        </View>
                        <View style={style.Info}>
                            <Text style={style.Title}>Autonomia</Text>
                            <Text style={style.Value}>
                                R$
                                {' '}
                                {car?.valorHora}
                                {' '}
                                /h
                            </Text>
                        </View>
                    </ScrollView>
                </SafeAreaView>
                <Button
                    style={style.nextButton}
                    title="Alugar"
                    onPress={() => navigation.navigate('Payment')}
                />
            </View>
        </>
    );
};
