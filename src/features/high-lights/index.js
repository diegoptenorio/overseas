import React, { useEffect } from 'react';
import { Button, FlatList, Text, View } from 'react-native';
import { useFetch } from '../../hooks/useFetch';
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
    const { fetchCars, cars, isLoading } = useFetch();
    useEffect(() => {
        fetchCars();
    }, []);
    return (
        <>
            {isLoading && <Loading />}
            {cars &&
                <View>
                    <FlatList
                        data={highlights}
                        keyExtractor={highlights => highlights.title}
                        renderItem={({ item: highlights, index }) => (
                            <View>
                                <Text style={style.h1}>{highlights.title}</Text>
                                <Card car={cars[index]} />
                            </View>
                        )}
                    />
                    <Button title='Ver Todos' />
                </View>
            }
        </>
    )
};