import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');

  const handleUpdate = () => {
    alert(`Updated:\nName: ${name}\nBio: ${bio}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />

      <Text style={styles.label}>Bio</Text>
      <TextInput style={styles.input} value={bio} onChangeText={setBio} />

      <Button title="Update" onPress={handleUpdate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  label: { fontSize: 16, marginTop: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 6,
    marginTop: 5,
  },
});
