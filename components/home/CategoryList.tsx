import { FC } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { Category } from '../../types/models';
import { theme } from '../../theme';
import { categoryStyles as styles } from '../../styles/category';

interface CategoryListProps {
    categories: Category[];
    onSelectCategory: Function;
    selectedCategory: number;
}

const CategoryList: FC<CategoryListProps> = ({ categories, onSelectCategory, selectedCategory }) => (
    <View style={styles.categoriesContainer}>
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            keyExtractor={item => item.id.toString()}
            style={{ overflow: 'visible' }}
            renderItem={({ item }) => {
                const isActive = item.id === selectedCategory;
                return (
                    <TouchableOpacity
                        onPress={() => onSelectCategory(item.id)}
                        style={[
                            styles.categoryButton,
                            { backgroundColor: isActive ? theme.colors.bgLight : 'rgba(0,0,0,0.07)' },
                        ]}
                    >
                        <Text style={[styles.categoryButtonText, { color: isActive ? '#ffffff' : '#374151' }]}>
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                );
            }}
        />
    </View>
)

export default CategoryList