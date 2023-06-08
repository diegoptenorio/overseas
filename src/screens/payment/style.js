import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#D4DEEE',
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 20,
    },
    creditCard: {
        width: '100%',
        aspectRatio: 164 / 283,
    },
    linkButton: {
        justifyContent: 'flex-end',
    },
    linkButtonText: {
        marginLeft: 10,
        color: '#3B7EFF',
    },
    SpecificationList: {
        flex: 1,
        marginBottom: 20,
    },
    Info: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        borderBottomColor: '#BDC8E3',
        borderBottomWidth: 1,
    },
    Title: {
        fontWeight: 'bold',
        color: '#445684',
    },
    Value: {
        color: '#445684',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 5,
        paddingTop: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        width: '100%',
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 10,
        elevation: 2,
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginTop: 20,
        marginRight: 20,
        marginBottom: 40,
        marginLeft: 20,
        textAlign: 'center',
    },
});
