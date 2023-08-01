import { View, Text } from 'react-native'
import HomeTabs from '../components/home/HomeTabs'

export default function HomeScreen({ navigation }: any) {

    return (
        <View style={{ position: "relative", height: '100%' }}>
            <Text >
                home
            </Text>
            <HomeTabs navigation={navigation} />
        </View>
    )
}
