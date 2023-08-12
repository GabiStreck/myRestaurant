import { StyleSheet } from "react-native";
export const headerStyles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        flexDirection: 'column',
        gap: 10,
        maxHeight: 190,
        position: 'relative',
    },
    backgroundImage: {
        top: 0,
        bottom: 0,
        position: 'absolute',
        width: '100%',
        height: 210,
        opacity: 0.2,
    },
});

