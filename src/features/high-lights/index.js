import React from 'react';
import {
    Button, FlatList, Text, View,
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import useFetch from '../../hooks/useFetch';
import { Card, Loading } from '../../components';
import style from './style';

const highlights = [
    {
        title: 'Melhor avaliação',
    },
    {
        title: 'Destaque em potência',
    },
    {
        title: 'Mais acessível',
    },
];

export const HighLights = () => {
    const { cars, isLoading } = useFetch();
    const navigation = useNavigation();
    return (
        <View style={style.container}>
            {isLoading && <Loading />}
            {cars
                && (
                    <View>
                        <FlatList
                            data={highlights}
                            keyExtractor={(highlights) => highlights.title}
                            renderItem={({ item: highlights, index }) => (
                                <View>
                                    <Text style={style.h1}>{highlights.title}</Text>
                                    <Card car={cars[index]} />
                                </View>
                            )}
                            style={style.list}
                        />
                        <Button onPress={() => navigation.navigate('Search')} title="Ver Todos" />
                    </View>
                )}
        </View>
    );
};
