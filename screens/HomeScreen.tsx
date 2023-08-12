import { useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { BellIcon } from 'react-native-heroicons/outline';
import { categories, products } from '../utils/mosk';
import HomeTabs from '../components/home/HomeTabs';
import MenuOptionsList from '../components/menu/MenuOptionsList';
import CategoryList from '../components/home/CategoryList';
import SearchBar from '../components/home/SearchBar';
import Header from '../components/Header';
import { styles } from '../styles/homeScree';

export default function HomeScreen({ navigation }: any) {
    const [activeCategory, setActiveCategory] = useState(1);
    return (
        <View style={styles.container}>
            <StatusBar />
            <Header>
                <View style={styles.header}>
                    <Image
                        source={{ uri: 'https://picsum.photos/30/30' }}
                        style={styles.avatar}
                    />
                    <View style={styles.headerTextContainer}>
                        <Text style={styles.headerTitle}>MyRestaurant</Text>
                        <Text style={styles.headerSubtitle}>Welcome username</Text>
                    </View>
                    <BellIcon size="27" color="black" />
                </View>
                <View style={styles.filterContainer}>
                    <SearchBar />
                    <CategoryList
                        categories={categories}
                        onSelectCategory={setActiveCategory}
                        selectedCategory={activeCategory}
                    />
                </View>
            </Header>
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.menuContainer}>
                    <MenuOptionsList title='Menu' products={products} />
                    <MenuOptionsList title='Recommends' products={products} />
                </View>
            </ScrollView>
            <HomeTabs navigation={navigation} />
        </View >
    );
}
