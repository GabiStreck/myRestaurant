import { StyleSheet } from 'react-native';
import { theme } from '../theme';

export const searchBarStyles = StyleSheet.create({
    searchBar: {
        paddingHorizontal: 16,
    },
    searchBarInputContainer: {
        elevation: 4,
        padding: 4,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: '#ffffff',
    },
    searchBarInput: {
        padding: 10,
        flex: 1,
        fontWeight: '600',
        color: '#374151',
    },
    searchBarButton: {
        padding: 8,
        borderRadius: 50,
        backgroundColor: theme.colors.bgLight,
    }
});

