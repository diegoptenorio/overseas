import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { getCarImageByModel } from '../../utils';
import style from './style';

export const Card = ({ car }) => {
    const navigation = useNavigation();
    const goTo = (component, props) => navigation.navigate(component, props);
    return (
        <TouchableOpacity onPress={() => goTo('Detail', { car })}>
            <View style={style.Card}>
                <Image
                    style={style.Car}
                    source={getCarImageByModel(car?.modelo)}
                />
                <View style={style.Info}>
                    <Text style={style.h1}>{car?.modelo}</Text>
                    <Text style={style.h2}>{car?.marca}</Text>
                    <Text style={style.p}>{car?.endereco}</Text>
                    <Text style={style.p}>R$ {car?.valorHora}/h</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
};