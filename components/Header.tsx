import { FC, ReactNode } from 'react';
import { Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { headerStyles } from '../styles/header';

interface Header {
    children: ReactNode
}

const Header: FC<Header> = ({ children }) => (
    <SafeAreaView style={headerStyles.safeAreaView}>
        <Image
            source={require('../assets/images/beansBackground2.png')}
            style={headerStyles.backgroundImage}
        />
        {children}
    </SafeAreaView>
)

export default Header