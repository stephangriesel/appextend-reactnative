import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={{ padding: 30 }}>
      <View>
        <TextInput
          placeholder="Course Goal"
          style={{ borderBottomColor: 'black', borderBottomWidth: 2, padding: 10 }}
        />
        <Button title="ADD" />
      </View>
      <View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
