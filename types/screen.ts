import { ParamListBase } from '@react-navigation/native';

export interface ProductParams {
    productId: number;
}

export interface RootStackParamList extends ParamListBase {
    home: undefined;
    product: ProductParams;
    favorite: undefined;
    reservation: undefined;
    card: undefined;
};