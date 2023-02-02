import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import TopBar from "./components/TopBar"
import { useEffect, useState, useRef } from 'react';
import SwipeableImage from './components/SwipeableImage';
import axios from 'axios';
import BottomBar from './components/BottomBar';
import Swipes from './components/Swipes';
import usersData from "./data/usersData.json"

export default function App() {

  const [users, setUsers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0)
  const swipesRef = useRef(null)


  useEffect(() => {
    setUsers(usersData.users)
  }, [])

  function handleLike() {
    console.log('like')
    nextUser()
  }

  function handlePass() {
    console.log('pass')
    nextUser()
  }

  function nextUser() {
    const nextIndex = users.length - 2 === currentIndex ? 0 : currentIndex + 1
    setCurrentIndex(nextIndex)
  }

  function handleLikePress() {
    swipesRef.current.openLeft()
  }
  function handlePassPress() {
    swipesRef.current.openRight()
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <TopBar />
      <View style={styles.swipes} >
        {/* {
          users.length !== 0 &&
          <SwipeableImage user={users[currentIndex]} />

        } */}
        {users.length > 1 &&
          users.map(
            (u, i) =>
              currentIndex === i && (
                <Swipes
                  key={i}
                  ref={swipesRef}
                  currentIndex={currentIndex}
                  users={users}
                  handleLike={handleLike}
                  handlePass={handlePass}
                ></Swipes>
              )
          )}
      </View>
      <BottomBar />
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
