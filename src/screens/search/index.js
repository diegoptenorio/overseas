import React from 'react';
import { Text, View } from 'react-native';

import { SearchBar } from '../../features';
import style from './style';

export const Search = () => (
    <View style={style.container}>
        <SearchBar />
        <Text style={style.h1}>Resultado da busca</Text>
        {/* <View style={style.containerList}>
            <View>
                <FlatList
                    data={highlights}
                    keyExtractor={(highlights) => highlights.title}
                    renderItem={({ item: highlights, index }) => <Card car={cars[index]} />}
                    style={style.list}
                />
            </View>
        </View> */}
    </View>
);
