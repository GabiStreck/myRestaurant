import { FC } from 'react';
import { View, Text, FlatList } from 'react-native';

import { categoryStyles } from '../../styles/category';
import { listProductDetailStyles } from '../../styles/productDetail';

interface ListProductDetailProps {
    title: string;
    data: string[];
}

const ListProductDetail: FC<ListProductDetailProps> = ({ title, data }) => (
    <View style={listProductDetailStyles.listProductDetailContainer}>
        <Text style={listProductDetailStyles.listProductDetailText}>
            {title}
        </Text>
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data}
            keyExtractor={item => item.trim()}
            style={{ overflow: 'visible' }}
            renderItem={({ item }) => {

                return (
                    <View
                        style={[
                            categoryStyles.categoryButton,
                            { backgroundColor: 'rgba(0,0,0,0.07)' },
                        ]}
                    >
                        <Text style={[categoryStyles.categoryButtonText, { color: '#374151' }]}>
                            {item}
                        </Text>
                    </View>
                );
            }}
        />
    </View>
)


export default ListProductDetail;
