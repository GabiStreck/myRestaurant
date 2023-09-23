import { ParamListBase, RouteProp } from '@react-navigation/native';
import { Product } from './models';

export type ProductDetailRouteProp = RouteProp<RootStackParamList, 'product'>;

export interface ProductDetailProps {
    route: ProductDetailRouteProp & { params: ProductParamsWithProduct };
}

export interface ProductParamsWithProduct {
    product: Product;
}

export interface RootStackParamList extends ParamListBase {
    home: undefined;
    product: ProductDetailProps;
    favorite: undefined;
    reservation: undefined;
    card: undefined;
};