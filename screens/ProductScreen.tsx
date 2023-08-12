import { View, Text } from 'react-native'
import { FC } from 'react'
import { ProductParams } from '../types/screen'

const ProductScreen: FC<ProductParams> = ({ productId }) => {
    return (
        <View >
            <Text >
                ProductScreen
            </Text>
        </View>
    )
}
export default ProductScreen