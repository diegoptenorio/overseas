import { Button, FlatList, Text, View } from 'react-native';
import { ChevroletBoltEv, TeslaModelY, TeslaModelX } from '../../assets/img';
import { Card } from '../../components';
import style from './style';

const data = [
    {
        title: 'Melhor avaliação',
        car: {
            name: 'Model X',
            image: TeslaModelX,
            manufactor: 'Tesla',
            city: 'São Paulo',
            price: 30,

        }
    },
    {
        title: 'Destaque em potência',
        car: {
            name: 'Model Y',
            image: TeslaModelY,
            manufactor: 'Tesla',
            city: 'São Paulo',
            price: 30,

        }
    },
    {
        title: 'Mais acessível',
        car: {
            name: 'Bolt EV',
            image: ChevroletBoltEv,
            manufactor: 'Chevrolet',
            city: 'São Paulo',
            price: 25,

        }
    },
];

export const HighLights = () => (
    <View>
        <FlatList
            data={data}
            keyExtractor={data => data.title}
            renderItem={({item: data}) => (
                <View>
                    <Text style={style.h1}>{data.title}</Text>
                    <Card car={data.car} />
                </View>
            )}
        />
        <Button title='Ver Todos' />
    </View>
);