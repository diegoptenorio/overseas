import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    filterBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 35,
    },
    filterContainer: {
        backgroundColor: '#fff',
        borderRadius: 5,
        height: 40,
        flex: 1,
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    filterInput: {
        width: '100%',
    },
    filterButton: {
        backgroundColor: '#fff',
        borderRadius: 5,
        height: 40,
        width: 50,
        paddingVertical: 8,
        paddingHorizontal: 13,
        marginLeft: 15,
    },
    iconFilter: {
        width: 24,
        height: 24,
    },
    iconSearch: {
        width: 24,
        height: 24,
        marginRight: 15,
    }
});