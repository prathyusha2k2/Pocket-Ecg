import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const QueriesScreen = () => {
  const [query, setQuery] = useState('');

  const handleQuerySubmit = () => {
    // Handle the query submission here
    console.log(`Query submitted: ${query}`);
    setQuery('');
  };

  return (
    <LinearGradient
      colors={['#fbdcdc', '#f4b38f', '#f79794']}
      style={{ flex: 1 }}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Ionicons name="md-help-circle-outline" size={64} color="white" />
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white', marginTop: 16 }}>
          Have a query or feedback?
        </Text>
        <Text style={{ fontSize: 16, color: 'white', marginHorizontal: 32, textAlign: 'center', marginTop: 8 }}>
          We're here to help! Send us your queries or feedback using the form below and we'll get back to you as soon as possible.
        </Text>
        <View style={{ backgroundColor: 'white', borderRadius: 8, margin: 16, padding: 16 }}>
          <TextInput
            placeholder="Enter your query or feedback here"
            value={query}
            onChangeText={setQuery}
            multiline
            style={{ height: 120 }}
          />
          <TouchableOpacity onPress={handleQuerySubmit} style={{ backgroundColor: '#f79794', borderRadius: 4, padding: 8, marginTop: 16 }}>
            <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>Submit Query</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default QueriesScreen;
