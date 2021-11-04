import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>大家嗨嗨~~</Text>
      <Text style={styles.text}>我是資工大二的林品妤</Text>
      <Text style={styles.text}>總之先在這裡放個可愛的橘子</Text>
      <Image source={require('./assets/orange.jpg')} style={styles.img} /> 
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5aa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#055',
  },
  img: {
    borderRadius: 50,
    resizeMode: 'contain',
    width: 300,
    height: 300,
  }
});
