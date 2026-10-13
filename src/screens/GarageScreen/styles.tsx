import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#181818',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 60,
    marginHorizontal: 10
  },
  imageLogo: {
    flex: 1,
    width: '35%',
    resizeMode: 'contain'
  },
  cameraBox: {
    position: 'relative',
    width: 350,
    height: '90%',
    overflow: 'hidden'
  }
})
