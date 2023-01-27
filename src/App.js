import { StyleSheet, Text, View } from 'react-native';
import  Constants  from 'expo-constants';
import TopBar from "./components/TopBar"

export default function App() {
  return (
    <View style={styles.container}>
      <TopBar />
      <Text>Tinder</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:Constants.StatusBarHeight
  },
});
