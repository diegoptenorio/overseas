import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';

import { Header, SearchBar } from '../../features';
import { Card } from '../../components';
import { mockCars } from '../../server/cars';
import style from './style';

export const Search = () => {
    const [value, onChangeValue] = useState('');
    const cars = mockCars.filter((car) => car.modelo.toUpperCase().includes(value.toUpperCase()));
    return (
        <>
            <Header title="Buscar Carro" />
            <View style={style.container}>
                <SearchBar value={value} onChangeValue={onChangeValue} />
                <Text style={style.h1}>Resultado da busca</Text>
                <View style={style.containerList}>
                    <View>
                        <FlatList
                            data={cars}
                            keyExtractor={(cars) => cars.id}
                            renderItem={({ item: cars }) => <Card car={cars} />}
                            style={style.list}
                        />
                    </View>
                </View>
            </View>
        </>
    );
};
