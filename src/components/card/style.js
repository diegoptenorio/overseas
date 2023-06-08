import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    Card: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 30,
    },
    Car: {
        width: '50%',
        aspectRatio: 73 / 64,
    },
    Info: {
        width: '50%',
        backgroundColor: '#fff',
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        paddingVertical: 15,
        paddingHorizontal: 15,
    },
    h1: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5,
    },
    h2: {
        color: '#3B7EFF',
        fontWeight: 'normal',
        fontSize: 18,
        marginBottom: 12,
    },
    p: {
        color: '#445684',
        fontWeight: 'normal',
        fontSize: 15,
        marginBottom: 8,
    },
});
