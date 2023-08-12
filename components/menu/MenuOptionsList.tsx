import { FC } from 'react';
import { View, Text, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { Product } from '../../types/models';
import Card from '../card/Card';
import { menuOptionListStyles as styles } from '../../styles/menu';

const { width } = Dimensions.get('window');

interface MenuOptionsListProps {
    products: Product[];
    title?: string;
}

const MenuOptionsList: FC<MenuOptionsListProps> = ({ products, title }) => (
    <View style={styles.menuContainer}>
        {title ?
            <Text style={styles.carouselTitle}>{title}</Text>
            : null}
        <Carousel
            containerCustomStyle={{ overflow: 'visible' }}
            data={products}
            renderItem={({ item }) => <Card product={item} />}
            firstItem={1}
            loop={true}
            inactiveSlideScale={0.75}
            inactiveSlideOpacity={0.75}
            sliderWidth={width}
            itemWidth={width * 0.63}
            slideStyle={{ display: 'flex', alignItems: 'center' }}
        />
    </View>
)

export default MenuOptionsList