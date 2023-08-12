import { StyleSheet } from 'react-native';

export const categoryStyles = StyleSheet.create({
    categoriesContainer: {
        paddingHorizontal: 16,
    },
    categoryButton: {
        padding: 10,
        paddingHorizontal: 20,
        marginRight: 5,
        borderRadius: 100,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 3,
    },
    categoryButtonText: {
        fontWeight: '600',
    }
});

