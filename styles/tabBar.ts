import { ViewStyle, Platform } from "react-native";
import { theme } from "../theme"

const ios = Platform.OS == 'ios';

export const tabBarStyles = {
    marginBottom: 15,
    height: 65,
    display: "flex",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-around",
    borderRadius: 100,
    marginHorizontal: 20,
    backgroundColor: theme.colors.bgLight,
    marginTop: ios ? 30 : 0,
    position: "absolute",
    right: 0,
    left: 0,
    bottom: 0,
    zIndex: 100
} as ViewStyle