import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#D4DEEE',
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 40,
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
        color: '#445684',
    },
    arrowIcon: {
        height: 12,
        width: 9,
    },
});
