import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';

const NOTIFICATIONS_DATA = [
  { id: '1', title: 'New message', message: 'You have received a new message' },
  { id: '2', title: 'New friend request', message: 'You have a new friend request' },
  { id: '3', title: 'New post', message: 'A friend has posted a new photo' },
];

const NotificationItem = ({ title, message }) => (
  <TouchableOpacity style={styles.notificationItem}>
    <View style={styles.notificationIconContainer}>
      <Ionicons name="notifications" size={24} color="white" />
    </View>
    <View style={styles.notificationTextContainer}>
      <Text style={styles.notificationTitle}>{title}</Text>
      <Text style={styles.notificationMessage}>{message}</Text>
    </View>
  </TouchableOpacity>
);

const NotificationsScreen = () => {
  const [notifications, setNotifications] = useState(NOTIFICATIONS_DATA);

  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <NotificationItem title={item.title} message={item.message} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#fbdcdc',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  notificationIconContainer: {
    backgroundColor: '#f79794',
    padding: 10,
    borderRadius: 20,
  },
  notificationTextContainer: {
    flex: 1,
    marginLeft: 20,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  notificationMessage: {
    fontSize: 14,
    color: '#666',
  },
});

export default NotificationsScreen;
