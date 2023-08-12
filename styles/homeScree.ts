import { StyleSheet, Platform } from "react-native";
const ios = Platform.OS === 'ios';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        flexDirection: 'column',
        gap: 20,
        marginBottom: ios ? -32 : 0,
        height: '100%'
    },
    header: {
        marginLeft: 16,
        marginRight: 16,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    avatar: {
        borderRadius: 50,
        height: 30,
        width: 30,
    },
    headerTextContainer: {
        marginLeft: 8,
        flexDirection: 'column',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 18,
        lineHeight: 24,
        fontWeight: '600',
    },
    headerSubtitle: {
        fontSize: 10,
        lineHeight: 12,
        fontWeight: '400',
    },
    filterContainer: {
        flex: 1,
        flexDirection: 'column',
        gap: 20
    },
    scrollContainer: {
        flex: 1
    },
    menuContainer: {
        flex: 1,
        flexDirection: 'column',
        height: '100%',
        marginBottom: 120
    }
});

