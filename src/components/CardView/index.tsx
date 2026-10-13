import React from 'react';
import { 
  View, 
  Text, 
  Image,
  TouchableOpacity
} from 'react-native';
import { AntDesign } from '@react-native-vector-icons/ant-design';

import { CAR_ASSETS_BASE_URL } from '../../constants/car';

import { styles } from './styles';
import { Divider } from '../Divider';
import { BuyButton } from '../BuyButton';

export default function CardView() {
  const renderCarDetails = () => (
    <View style={styles.carDetailsContainer}>
      <Text style={styles.carName}>
        Revuelto SV
      </Text>
      <Text style={styles.carBrand}>
        Lamborghini
      </Text>
    </View>
  )

  const renderCarImage = () => (
    <Image 
      source={{ 
        uri: `${CAR_ASSETS_BASE_URL}/1.png` 
      }} 
      style={styles.carImage}  
    />
  )

  const renderPriceControls = () => (
    <View style={styles.priceControlsContainer}>
      <TouchableOpacity 
        onPress={() => {}}  
        style={styles.buttonControl}
      >
        <AntDesign 
          name='left' 
          color='#000' 
          size={15} 
        />
      </TouchableOpacity>
      <Text style={styles.priceLabel}>
        Valor
      </Text>
      <TouchableOpacity 
        onPress={() => {}}  
        style={styles.buttonControl}
      >
        <AntDesign 
          name='right' 
          color='#000' 
          size={15} 
        />
      </TouchableOpacity>
    </View>
  )

  return (
    <View style={styles.container}>
      <Divider />

      { renderCarImage() }
      
      <Divider />
      
      { renderCarDetails() }      
      { renderPriceControls() }
      <BuyButton />
    </View>
  );
}