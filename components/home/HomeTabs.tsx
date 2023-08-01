import { View, TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { HomeIcon as HomeOutline, HeartIcon as HeartOutline, ShoppingBagIcon as BagOutline } from 'react-native-heroicons/outline';
import { tabBarStyles } from '../../styles/tabBar';
import { theme } from '../../theme';

export default function HomeTabs({ navigation }: any) {
    const tableIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="white">
        <path d="m231-154 85-213h128v-148q-160-6-265-47.125T74-660.469Q74-721 192.714-764q118.715-43 286.984-43Q649-807 768-764.193 887-721.386 887-660q0 57.03-105.5 98.015T517-515v148h128l85 213h-74l-55-140H361l-56 140h-74Zm249.191-433Q582-587 670.5-606.5T812-660q-53-34-141.691-54-88.692-20-190.5-20Q378-734 289.5-714T149-660q52 34 140.691 53.5 88.692 19.5 190.5 19.5ZM480-660Z"/>
        </svg>
    `;

    return (
        <View style={tabBarStyles}>

            <HomeOutline size="30" strokeWidth={2} color={theme.colors.bgDark} />

            <TouchableOpacity onPress={() => navigation.navigate('favorite')} >
                <HeartOutline size="30" strokeWidth={2} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('reservation')} >
                <SvgXml xml={tableIcon} width={35} height={35} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('cart')} >
                <BagOutline size="30" strokeWidth={2} color="white" />
            </TouchableOpacity>
        </View>
    )
}
