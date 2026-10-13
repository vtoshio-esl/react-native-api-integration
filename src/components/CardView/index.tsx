import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  Image,
  TouchableOpacity
} from 'react-native';
import { AntDesign } from '@react-native-vector-icons/ant-design';

import { CAR_ASSETS_BASE_URL } from '../../constants/car';
import { CarModel } from '../../models/CarModel';

import { styles } from './styles';
import { Divider } from '../Divider';
import { BuyButton } from '../BuyButton';
import { loadCarData, handlePreviousItem, handleNextItem } from './actions';

export default function CardView() {
  const [currentCarData, setCurrentCarData] = useState<CarModel | null>(null);

  useEffect(() => {
    (async () => {
      await loadCarData(1, setCurrentCarData);
    })();
  }, [])

  const renderCarName = () => (
    <Text style={styles.carName}>
      { currentCarData?.carName }
    </Text>
  )

  const renderCarDetails = () => (
    <View style={styles.carDetailsContainer}>
      <Text style={styles.carBrand}>
        Lamborghini
        { (currentCarData?.releaseYear && currentCarData?.releaseYear < 1990) ? ' (Classic)' : ''}
      </Text>
      <Text style={styles.carBrand}>
        { currentCarData?.releaseYear }
      </Text>
    </View>
  )

  const renderCarImage = () => (
    <View style={styles.carImageContainer}>
      <Image 
        source={{ 
          uri: `${CAR_ASSETS_BASE_URL}/${currentCarData?.id}.png` 
        }} 
        style={styles.carImage}  
      />
    </View>
  )

  const renderPriceControls = () => (
    <View style={styles.priceControlsContainer}>
      <TouchableOpacity 
        onPress={() => handlePreviousItem(currentCarData, setCurrentCarData)}  
        style={styles.buttonControl}
      >
        <AntDesign 
          name='left' 
          color='#000' 
          size={15} 
        />
      </TouchableOpacity>
      <Text style={styles.priceLabel}>
        { currentCarData?.price }
      </Text>
      <TouchableOpacity 
        onPress={() => handleNextItem(currentCarData, setCurrentCarData)}  
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

      { renderCarName() }
      { renderCarImage() }
      
      <Divider />
      
      { renderCarDetails() }      
      { renderPriceControls() }
      <BuyButton />
    </View>
  );
}