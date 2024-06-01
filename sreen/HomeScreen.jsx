import { StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header'
import Category from '../components/Category'
import Task from '../components/Task'

const HomeScreen = () => {
  return (
    <View style={styles.HomeScreen}>
      <Header />
      <Category />
      <Task />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  HomeScreen: {
    marginHorizontal: 20,
}
})