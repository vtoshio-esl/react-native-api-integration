import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';
import CardView from '../../components/CardView';

export function GarageScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cameraBox}>
        <CardView />
      </View>
    </SafeAreaView>
  );
}
