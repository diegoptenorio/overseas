import React, { useEffect } from 'react';
import { Button, FlatList, Text, View } from 'react-native';
import { useFetch } from '../../hooks/useFetch';
import { Card } from '../../components';
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
    const { fetchCars, cars } = useFetch();
    useEffect(() => {
        fetchCars();
    }, []);
    return (
        <>
            {cars && (
                <View>
                    <Text>{JSON.stringify(cars)}</Text>
                    <FlatList
                        data={highlights}
                        keyExtractor={highlights => highlights.title}
                        renderItem={({ item: highlights }) => (
                            <View>
                                <Text style={style.h1}>{highlights.title}</Text>
                                <Card car={cars[0]} />
                            </View>
                        )}
                    />
                    <Button title='Ver Todos' />
                </View>
            )}
        </>
    )
};