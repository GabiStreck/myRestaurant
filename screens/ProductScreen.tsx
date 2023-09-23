import { FC, useCallback, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftCircleIcon, ClockIcon } from 'react-native-heroicons/outline';
import { HeartIcon, StarIcon } from 'react-native-heroicons/solid';
import { dishes, drinks } from '../utils/mosk';
import { ProductDetailProps } from '../types/screen';
import { Drink, Dish } from '../types/models';
import CounterChip from '../components/CounterChip';
import ListProductDetail from '../components/product/ListProductDetail';

import { styles } from '../styles/productDetail';

const ProductScreen: FC<ProductDetailProps> = ({ route }) => {
    const { product } = route.params;
    const [data, setData] = useState<Dish | Drink | undefined | null>();
    const [counter, setCounter] = useState<number>(1);
    const navigation = useNavigation<NativeStackNavigationProp<any>>();
    const isDish = data && Object.keys(data).includes('cookingTime')

    useEffect(() => {
        const prod = dishes.find(item => item.product.id === product?.id) ?? drinks.find(item => item.product.id === product?.id);
        setData(prod);
    }, []);

    const handleMaxChange = useCallback(() => {
        setCounter(prev => prev + 1);
    }, []);

    const handleMinimusChange = useCallback(() => {
        setCounter(prev => (prev > 1 ? prev - 1 : prev));
    }, []);

    return (
        <View style={styles.mainContainer}>
            <StatusBar style='light' />
            <View style={styles.headerContainer}>
                <SafeAreaView style={styles.headerArea}>
                    <View style={{ ...styles.headerContein, ...styles.backgroundImage }} />
                    <Image source={require('../assets/images/beansBackground2.png')} style={styles.backgroundImage} />
                    <View style={styles.headerActions}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <ArrowLeftCircleIcon size={50} strokeWidth={1.2} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.favoriteButton}>
                            <HeartIcon size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.imageContainer}>
                        <View style={styles.frameImage}>
                            <Image source={{ uri: product.imageUrl }} style={styles.image} />
                        </View>
                    </View>
                </SafeAreaView>
                {data ? (
                    <View style={styles.titleContainer}>
                        <View style={styles.titleContein}>
                            <Text style={styles.nameText}>{product.name || ''}</Text>
                            <Text style={styles.priceText}>${product.price || ''}</Text>
                        </View>

                        <View style={styles.infoContainer}>
                            <View style={styles.starText}>
                                <StarIcon size={12} color="white" />
                                <Text style={styles.ratingText}>{product.rating || ''}</Text>
                            </View>
                            {isDish ?
                                <View style={styles.cookingTimeContainer}>
                                    <ClockIcon size={25} color="black" />
                                    <Text style={styles.cookingTimeText}>
                                        {(data as Dish).cookingTime || ''} min
                                    </Text>
                                </View>
                                :
                                <Text style={styles.volumeText}>
                                    {(data as Drink).volume}
                                </Text>
                            }
                        </View>
                        <View>
                            <Text style={{ fontSize: 16, color: 'black' }}>{product.description}</Text>
                        </View>
                        {(isDish && (data as Dish).ingredients.length > 0) && (
                            <ListProductDetail data={(data as Dish).ingredients} title='Ingredients:' />
                        )}
                        {(isDish && (data as Dish).allergens.length > 0) && (
                            <ListProductDetail data={(data as Dish).allergens} title='Allergens:' />
                        )}
                    </View>
                ) : null}
            </View>
            {data ? (
                <View style={styles.buyNowButtonContainer}>
                    <CounterChip counter={counter} onMaxChange={handleMaxChange} onMinimusChange={handleMinimusChange} />
                    <TouchableOpacity style={styles.buyNowButton}>
                        <Text style={styles.addToCartText}>Add to Card</Text>
                    </TouchableOpacity>
                </View>
            ) : null}
        </View>
    );
};


export default ProductScreen;
