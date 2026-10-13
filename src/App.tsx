import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { GarageScreen } from './screens/GarageScreen';

export function App() {
  return (
    <SafeAreaProvider>
      <GarageScreen />
      <StatusBar style='auto'/>
    </SafeAreaProvider>
  );
}