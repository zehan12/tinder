import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import TopBar from "./components/TopBar"
import { useEffect, useState } from 'react';
import SwipeableImage from './components/SwipeableImage';
import axios from 'axios';

export default function App() {

  const [users, setUsers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0)

  async function fetchUsers() {
    try {
      const { data } = await axios.get('https://randomuser.me/api/?gender=female&results=50')
      setUsers(data.results)
    } catch (error) {
      console.log(error)
    }
  }

  console.log(users[0],"why")

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <SafeAreaView style={styles.wrapper}>
      {/* <View style={styles.container}> */}
      <TopBar />
      <View style={styles.swipes} >
        {
          users.length !== 0 &&
            <SwipeableImage user={users[currentIndex]} />
          
        }
      </View>
      {/* </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    border: "2px solid black"
  },
  swipes: {
    flex: 1,
    padding: 10,
    paddingTop: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Constants.StatusBarHeight
  },
});
