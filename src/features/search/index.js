import React, { useState } from 'react';
import { Image, Pressable, TextInput, View } from 'react-native';

import { IconFilter, IconSearch } from '../../assets/img';

import style from './style';

export const Search = () => {
    const [value, onChangeValue] = useState(''); 
    return (
        <View style={style.filterBar}>
            <View style={style.filterContainer}>
                <Image
                    style={style.iconSearch}
                    source={IconSearch}
                />
                <TextInput
                    style={style.filterInput}
                    onChangeText={onChangeValue}
                    value={value}
                    placeholder='Procurar carro'
                    />
            </View>
            <Pressable style={style.filterButton} onPress={() => console.log('clique')}>
                <Image
                    style={style.iconFilter}
                    source={IconFilter}
                />
            </Pressable>
        </View>
    )
};