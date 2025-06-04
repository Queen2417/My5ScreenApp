import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

type User = {
  id: number;
  company: string;
  email: string;
};

export default function ListScreen() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('https://fakejson-api.mock.beeceptor.com/users')
      .then((res) => res.json())
      .then(setUsers);
  }, []);

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={users}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.text}>Company: {item.company}</Text>
          <Text style={styles.text}>Email: {item.email}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: { padding: 10 },
  item: {
    backgroundColor: '#eee',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
  },
  text: { fontSize: 16 },
});
