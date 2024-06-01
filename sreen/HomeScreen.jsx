import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'

const HomeScreen = () => {
  return (
    <View style={styles.HomeScreen}>
      <Header />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  HomeScreen: {
    marginHorizontal: 20,
    marginTop: 60,
}
})