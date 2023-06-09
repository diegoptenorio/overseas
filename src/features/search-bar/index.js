import React from 'react';
import {
    Image, Pressable, TextInput, View,
} from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { IconFilter, IconSearch } from '../../assets/img';

import style from './style';

export const SearchBar = ({ value, onChangeValue }) => {
    const navigation = useNavigation();
    const filter = () => {
        navigation.navigate('Search');
    };
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
                    placeholder="Procurar carro"
                />
            </View>
            <Pressable style={style.filterButton} onPress={() => filter()}>
                <Image
                    style={style.iconFilter}
                    source={IconFilter}
                />
            </Pressable>
        </View>
    );
};
