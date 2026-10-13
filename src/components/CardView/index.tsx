import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

export default function CardView() {
  return (
    <View style={styles.container}>
      <Text>Card View Works</Text>
    </View>
  );
}