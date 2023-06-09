import React, { useState } from 'react';
import {
    Button, Image, Modal, Pressable, SafeAreaView, ScrollView, Text, View,
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Header } from '../../features';
import { Add, MasterCard } from '../../assets/img';
import style from './style';

export const Payment = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation();
    return (
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(!modalVisible)}
            >
                <View style={style.centeredView}>
                    <View style={style.modalView}>
                        <Text style={style.modalText}>
                            Agendamento realizado
                            com sucesso
                        </Text>
                        <Pressable
                            style={[style.button, style.buttonClose]}
                            onPress={() => navigation.navigate('Home')}
                        >
                            <Text style={style.textStyle}>Voltar</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Header title="Pagamento" />
            <View style={style.Container}>
                <View style={style.creditCard}>
                    <Image
                        style={style.creditCardLogo}
                        source={MasterCard}
                    />
                    <Text style={style.creditCardNumber}>****  ****  ****  1658</Text>
                    <View style={style.creditCardFooter}>
                        <View>
                            <Text style={style.expirtationLabel}>
                                VALIDADE
                            </Text>
                            <Text style={style.expirationDate}>
                                07/28
                            </Text>
                        </View>
                        <View>
                            <Text style={style.cvvLabel}>
                                CVV
                            </Text>
                            <Text style={style.cvvNumber}>
                                ***
                            </Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Pressable
                        style={style.linkButton}
                        onPress={() => console.log('add card')}
                    >
                        <Image style={style.linkButtonIcon} source={Add} />
                        <Text style={style.linkButtonText}>Adicionar cartão de crédito</Text>
                    </Pressable>
                </View>
                <SafeAreaView style={style.SpecificationList}>
                    <ScrollView>
                        <View style={style.Info}>
                            <Text style={style.Title}>Tesla Model Y</Text>
                            <Text style={style.Value}>3 days</Text>
                            <Text style={style.Value}>R$30/h</Text>
                        </View>
                        <View style={style.Info}>
                            <Text style={style.Title}>Total</Text>
                            <Text style={style.Value}>R$ 7.800,00</Text>
                        </View>
                    </ScrollView>
                </SafeAreaView>
                <Button
                    title="Finalizar"
                    onPress={() => setModalVisible(true)}
                />
            </View>
        </>
    );
};
