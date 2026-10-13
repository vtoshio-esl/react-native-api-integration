import React from 'react';
import { 
  View,
  TouchableOpacity,
  Text 
} from 'react-native';

import { AntDesign } from '@react-native-vector-icons/ant-design';
import { styles } from './styles';

export function BuyButton() {
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <AntDesign 
        name='shopping-cart' 
        color='#fff' 
        size={20} 
      />
      <Text style={styles.buttonLabel}>
        ENQUIRE MODEL
      </Text>
    </TouchableOpacity>
  );
}