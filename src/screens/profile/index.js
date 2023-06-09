import React from 'react';
import {
    Image, SafeAreaView, ScrollView, Text, View,
} from 'react-native';
import { Header } from '../../features';
import { ArrowRight } from '../../assets/img';
import style from './style';

export const Profile = () => (
    <View style={{ flex: 1 }}>
        <Header title="Perfil" />
        <View style={style.Container}>
            <SafeAreaView style={style.SpecificationList}>
                <ScrollView>
                    <View style={style.Info}>
                        <Text style={style.Title}>Informações pessoais</Text>
                        <Image style={style.arrowIcon} source={ArrowRight} />
                    </View>
                    <View style={style.Info}>
                        <Text style={style.Title}>Notificação</Text>
                        <Image style={style.arrowIcon} source={ArrowRight} />
                    </View>
                    <View style={style.Info}>
                        <Text style={style.Title}>Meus pedidos</Text>
                        <Image style={style.arrowIcon} source={ArrowRight} />
                    </View>
                    <View style={style.Info}>
                        <Text style={style.Title}>Pagamento</Text>
                        <Image style={style.arrowIcon} source={ArrowRight} />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    </View>
);
