import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#D4DEEE',
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 40,
    },
    Car: {
        width: '100%',
        aspectRatio: 73 / 64,
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
        color: '#445684'
    },
    Value: {
        color: '#445684'
    }
});