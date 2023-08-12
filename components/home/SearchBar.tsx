import { View, TouchableOpacity, TextInput } from 'react-native';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import { searchBarStyles as styles } from '../../styles/search';

const SearchBar = () => (
    <View style={styles.searchBar}>
        <View style={styles.searchBarInputContainer}>
            <TextInput
                placeholder="Search"
                style={styles.searchBarInput}
            />
            <TouchableOpacity
                style={styles.searchBarButton}
            >
                <MagnifyingGlassIcon size={20} strokeWidth={2} color="#ffffff" />
            </TouchableOpacity>
        </View>
    </View>
)

export default SearchBar