import { View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';
import Logo from '../../../assets/logo.png';
import CardView from '../../components/CardView';

export function GarageScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.imageLogo}/>
      </View>
      <CardView />
    </SafeAreaView>
  );
}
