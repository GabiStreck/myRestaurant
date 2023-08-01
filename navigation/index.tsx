import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductScreen from '../screens/ProductScreen';
import ReservationScreen from '../screens/ReservationScreen';
import HomeScreen from '../screens/HomeScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import CartScreen from '../screens/CartScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Group>
                    <Stack.Screen
                        name="home"
                        options={{ headerShown: false }}
                        component={HomeScreen}
                    />
                    <Stack.Screen
                        name="product"
                        options={{ headerShown: false }}
                        component={ProductScreen}
                    />
                </Stack.Group>
                <Stack.Group screenOptions={{ presentation: 'modal' }} >
                    <Stack.Screen
                        name="favorite"
                        component={FavoriteScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="reservation"
                        component={ReservationScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="cart"
                        component={CartScreen}
                        options={{ headerShown: false }}
                    />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    )
}