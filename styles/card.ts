import { ViewStyle, Dimensions, Platform, ImageStyle } from 'react-native';
import { theme } from '../theme';

const { width, height } = Dimensions.get('window');
const ios = Platform.OS == 'ios';

export const containerStyle = {
    height: ios ? height * 0.4 : height * 0.48,
    width: width * 0.70,
    position: 'relative',
    flexDirection: 'column',
    paddingTop: 60
} as ViewStyle;

export const imageContainerStyle = {
    width: '100%',
    marginTop: ios ? -(height * 0.08) : 15,
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 10,
    flex: 1,
    alignItems: 'center'
} as ViewStyle;

export const frameImageStyle = {
    height: 160,
    width: 160,
    borderRadius: 100,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 30,
} as ViewStyle;

export const imageStyle = {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
} as ImageStyle;

export const detailsContainerStyle = {
    paddingHorizontal: 16,
    paddingTop: 100,
    borderRadius: 20,
    backgroundColor: theme.colors.bgDark,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    columnGap: 30,
    marginTop: ios ? 10 : 0
} as ViewStyle;

export const nameTextStyle = {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    zIndex: 10,
    width: width * 0.75,
    overflow: 'hidden',
    marginBottom: 5
} as ViewStyle;

export const ratingContainerStyle = {
    backgroundColor: 'rgba(0,0,0,0.2)',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    borderRadius: 20,
    padding: 4,
    paddingLeft: 8,
    paddingRight: 8,
    width: 60,
    elevation: 50
} as ViewStyle;

export const ratingTextStyle = {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
} as ViewStyle;

export const priceContainerStyle = {
    backgroundColor: ios ? theme.colors.bgDark : 'transparent',
    shadowColor: theme.colors.bgDark,
    shadowRadius: 25,
    shadowOffset: { width: 0, height: 40 },
    elevation: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
} as ViewStyle;

export const priceTextStyle = {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold'
} as ViewStyle;

export const plusButtonStyle = {
    shadowColor: 'black',
    shadowRadius: 40,
    shadowOffset: { width: -20, height: -10 },
    shadowOpacity: 1,
    padding: 12,
    backgroundColor: theme.colors.bgLight,
    borderRadius: 40,
    elevation: 10
} as ViewStyle;

export default {
    containerStyle,
    imageContainerStyle,
    frameImageStyle,
    imageStyle,
    detailsContainerStyle,
    nameTextStyle,
    ratingContainerStyle,
    ratingTextStyle,
    priceContainerStyle,
    priceTextStyle,
    plusButtonStyle
} 