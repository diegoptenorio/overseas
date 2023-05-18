import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import style from './style';

export const Card = ({ car }) => {
    const navigation = useNavigation();
    const goTo = (component, props) => navigation.navigate(component, props);
    return (
        <TouchableOpacity onPress={() => goTo('Detail', {})}>
            <View style={style.Card}>
                <Image
                    style={style.Car}
                    source={car.image}
                />
                <View style={style.Info}>
                    <Text style={style.h1}>{car.name}</Text>
                    <Text style={style.h2}>{car.manufactor}</Text>
                    <Text style={style.p}>{car.city}</Text>
                    <Text style={style.p}>R$ {car.price}/h</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
};