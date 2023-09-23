import { Platform, StyleSheet } from 'react-native';
import { theme } from '../theme';

const ios = Platform.OS == 'ios';

const styles = StyleSheet.create({
    volumeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: ios ? 6 : 3,
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
    },
    button: {
        borderRadius: 100,
        backgroundColor: theme.colors.bgLight,
        padding: 8,
    },
    counterText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
        paddingHorizontal: 8,
    },
});

export default styles;
