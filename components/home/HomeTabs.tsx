import { View, TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { HomeIcon, HeartIcon, ShoppingBagIcon } from 'react-native-heroicons/outline';
import { SCREEN_FAVORITES, SCREEN_RESERVATION, SCREEN_CART } from '../../constants/routes';
import { theme } from '../../theme';
import { tabBarStyles } from '../../styles/tabBar';

const tableIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="white">
    <path d="m231-154 85-213h128v-148q-160-6-265-47.125T74-660.469Q74-721 192.714-764q118.715-43 286.984-43Q649-807 768-764.193 887-721.386 887-660q0 57.03-105.5 98.015T517-515v148h128l85 213h-74l-55-140H361l-56 140h-74Zm249.191-433Q582-587 670.5-606.5T812-660q-53-34-141.691-54-88.692-20-190.5-20Q378-734 289.5-714T149-660q52 34 140.691 53.5 88.692 19.5 190.5 19.5ZM480-660Z"/>
    </svg>
`;

export default function HomeTabs({ navigation }: any) {
    return (
        <View style={tabBarStyles}>
            <HomeIcon size="25" strokeWidth={2} color={theme.colors.bgDark} />
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_FAVORITES)} >
                <HeartIcon size="25" strokeWidth={2} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_RESERVATION)} >
                <SvgXml xml={tableIcon} width={30} height={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(SCREEN_CART)} >
                <ShoppingBagIcon size="25" strokeWidth={2} color="white" />
            </TouchableOpacity>
        </View>
    );
}
