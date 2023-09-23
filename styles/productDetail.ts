import {
    StyleSheet,
    Platform
} from 'react-native';
import { theme } from '../theme';

const ios = Platform.OS == 'ios';

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        position: 'relative',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingBottom: 16
    },
    headerContainer: {
        flexDirection: 'column',
        flexGrow: 1,
        gap: 20
    },
    headerArea: {
        flex: 1,
        paddingTop: 16,
        position: 'relative',
        maxHeight: '45%'
    },
    headerContein: {
        backgroundColor: theme.colors.bgLight,
        opacity: 1
    },
    headerActions: {
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
        zIndex: 20
    },
    favoriteButton: {
        borderWidth: 2,
        borderRadius: 999,
        padding: 8,
        borderColor: 'white'
    },
    titleContainer: {
        paddingHorizontal: 16,
        flexDirection: 'column',
        gap: 15
    },
    titleContein: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    cookingTimeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10
    },
    cookingTimeText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    },
    nameText: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    priceText: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    ratingText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white'
    },
    volumeText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    },
    ingredientsContainer: {
        flexDirection: 'column',
        gap: 10
    },
    ingredientText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    },
    imageContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        alignItems: 'center',
        zIndex: 10,
    },
    frameImage: {
        height: 250,
        width: 250,
        borderRadius: 150,
        top: 55,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 30,
    },
    image: {
        flex: 1,
        width: '100%',
        resizeMode: 'cover',
    },
    backgroundImage: {
        height: 260,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        width: '100%',
        position: 'absolute',
        opacity: 0.3,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 30,
    },
    starText: {
        backgroundColor: theme.colors.bgLight,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 36,
        padding: 1,
        paddingVertical: 4,
        gap: 2,
        opacity: 0.9,
        width: 60,
    },
    volumeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: ios ? 6 : 3,
    },
    buyNowButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
    },
    buyNowButton: {
        backgroundColor: theme.colors.bgLight,
        padding: 16,
        borderRadius: 999,
        flex: 1,
        marginLeft: 16
    },
    addToCartText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    }
});



export const listProductDetailStyles = StyleSheet.create({
    listProductDetailContainer: {
        flexDirection: 'column',
        gap: 10
    },
    listProductDetailText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    },
});