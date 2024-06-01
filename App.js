import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './sreen/HomeScreen';

export default function App() {
  return (
    <ScrollView>
      <HomeScreen />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  
});
