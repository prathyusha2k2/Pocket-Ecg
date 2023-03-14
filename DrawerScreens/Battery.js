
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import Constants from 'expo-constants';
import * as Battery from 'expo-battery';
import { LinearGradient } from 'expo-linear-gradient';

const BatteryScreen = () => {
  const [batteryLevel, setBatteryLevel] = useState(null);

  useEffect(() => {
    const getBatteryLevel = async () => {
      const batteryInfo = await Battery.getBatteryLevelAsync();
      setBatteryLevel(batteryInfo);
    };

    getBatteryLevel();

    const subscription = Battery.addBatteryLevelListener(({ batteryLevel }) => {
      setBatteryLevel(batteryLevel);
    });

    return () => subscription.remove();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <LinearGradient colors={['#fbdcdc', '#f4b38f', '#f79794']} style={styles.gradient}>
        <View style={styles.content}>
          <Text style={styles.title}>Battery Level</Text>
          <View style={styles.batteryContainer}>
            <View style={[styles.batteryLevel, { width: batteryLevel ? `${batteryLevel * 100}%` : 0 }]} />
          </View>
          <Text style={styles.level}>{batteryLevel ? `${Math.round(batteryLevel * 100)}%` : 'Unknown'}</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Constants.statusBarHeight + 50,
    marginBottom: 50,
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  batteryContainer: {
    width: 200,
    height: 30,
    borderRadius: 20,
    borderColor: '#aaa',
    borderWidth: 1,
    overflow: 'hidden',
  },
  batteryLevel: {
    height: '100%',
    borderRadius: 20,
    backgroundColor: 'green',
  },
  level: {
    fontSize: 36,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#333',
  },
});

export default BatteryScreen;
