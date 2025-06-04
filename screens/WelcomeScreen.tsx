import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the App!</Text>
      <Image source={require('../assets/profile.jpg')} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
  image: { width: 200, height: 200, borderRadius: 100 },
});
