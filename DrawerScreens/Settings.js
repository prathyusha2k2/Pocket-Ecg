import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';

const SettingsScreen = ({ navigation }) => {
  const handleLogout = () => {
    // Handle logout logic here
  };

  return (
    <LinearGradient colors={['#fbdcdc', '#f4b38f', '#f79794']} style={styles.container}>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>Customer Support</Text>
        <AntDesign name="right" size={24} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>Demo Videos</Text>
        <AntDesign name="right" size={24} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>Contact Us</Text>
        <AntDesign name="right" size={24} color="#fff" />
      </TouchableOpacity>
      <View style={styles.versionContainer}>
        <Text style={styles.versionText}>Version: 1.0.0</Text>
      </View>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    width: '80%',
  },
  itemText: {
    fontSize: 16,
    color: '#fff',
  },
  versionContainer: {
    marginTop: 20,
  },
  versionText: {
    fontSize: 14,
    color: '#fff',
  },
  logoutButton: {
    marginTop: 40,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  logoutText: {
    color: '#f79794',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default SettingsScreen;
