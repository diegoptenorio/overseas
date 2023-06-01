import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    Container: {
        height: 76,
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    goBackButton: {
        backgroundColor: '#fff',
        borderRadius: '50%',
        height: 40,
        width: 40,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginLeft: 10
    },
    goBackFilter: {
        width: 11,
        height: 20,
    },
    h1: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 22
    }
})