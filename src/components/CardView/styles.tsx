import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '80%',
    height: '100%',
  },
  carDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  carName: {
    color: '#fff',
    
    lineHeight: 30,
    height: 60,
    flexShrink: 0,
    textAlign: 'center',

    fontWeight: 'bold',
    fontSize: 24,
    letterSpacing: 1.3,
  },
  carBrand: {
    color: '#fff',
    fontWeight: '400',
    fontSize: 18,
    fontStyle: 'italic'
  },
  carImageContainer: {
    width: '100%',
    height: 400,
    flexShrink: 0,
  },
  carImage: {    
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  priceControlsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    
    width: '100%',
    marginVertical: 20,
  },
  buttonControl: {
    paddingVertical: 20,
    paddingHorizontal: 5,
    borderRadius: 3,
    backgroundColor: '#f2f2f2'
  },
  priceLabel: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '300',
    letterSpacing: 1.3
  }
})