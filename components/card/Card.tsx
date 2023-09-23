import { FC } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { StarIcon } from 'react-native-heroicons/solid';
import { PlusIcon } from 'react-native-heroicons/outline';
import { theme } from '../../theme';
import { Product } from '../../types/models';
import { RootStackParamList } from '../../types/screen';
import {
    containerStyle,
    detailsContainerStyle,
    frameImageStyle,
    imageContainerStyle,
    imageStyle,
    nameTextStyle,
    plusButtonStyle,
    priceContainerStyle,
    priceTextStyle,
    ratingContainerStyle,
    ratingTextStyle
} from '../../styles/card';
import { SCREEN_PRODUCT_DETAIL } from '../../constants/routes';

export interface CardProps {
    product: Product
}

const Card: FC<CardProps> = ({ product }) => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return (
        <View style={containerStyle}>
            <View style={imageContainerStyle}>
                <View style={frameImageStyle}>
                    <Image source={{ uri: product.imageUrl }} style={imageStyle} />
                </View>
            </View>
            <View style={detailsContainerStyle}>
                <View style={{ marginBottom: 10 }}>
                    <Text
                        numberOfLines={1}
                        ellipsizeMode="tail"
                        style={nameTextStyle}
                    >
                        {product.name}
                    </Text>
                    <View style={ratingContainerStyle}>
                        <StarIcon size={15} color="white" />
                        <Text style={ratingTextStyle}>{product.rating}</Text>
                    </View>

                </View>

                <View style={priceContainerStyle}>
                    <Text style={priceTextStyle}>$ {product.price}</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate(SCREEN_PRODUCT_DETAIL, { product: product })}
                        style={plusButtonStyle}
                    >
                        <PlusIcon size={25} strokeWidth={2} color={theme.colors.bgDark} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default Card