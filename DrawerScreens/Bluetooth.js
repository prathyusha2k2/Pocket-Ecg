import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Bluetooth } from 'expo';

export default function BluetoothScreen() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isDiscovering, setIsDiscovering] = useState(false);
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    const checkBluetoothEnabled = async () => {
      const enabled = await Bluetooth.getAvailabilityAsync();
      setIsEnabled(enabled);
    };
    checkBluetoothEnabled();
  }, []);

  const handleDiscoverButtonPress = async () => {
    if (isDiscovering) {
      await Bluetooth.stopDiscoveryAsync();
      setIsDiscovering(false);
    } else {
      await Bluetooth.startDiscoveryAsync();
      setIsDiscovering(true);
    }
  };

  const handleDevicePress = async (device) => {
    // handle device selection
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bluetooth Screen</Text>
      {isEnabled ? (
        <>
          <TouchableOpacity
            style={styles.button}
            onPress={handleDiscoverButtonPress}
          >
            <Text style={styles.buttonText}>
              {isDiscovering ? 'Stop' : 'Discover'} Devices
            </Text>
          </TouchableOpacity>
          {devices.map((device) => (
            <TouchableOpacity
              key={device.id}
              style={styles.deviceButton}
              onPress={() => handleDevicePress(device)}
            >
              <Text>{device.name}</Text>
              <Text>{device.id}</Text>
            </TouchableOpacity>
          ))}
        </>
      ) : (
        <Text style={styles.disabled}>Bluetooth is disabled.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#007AFF',
    borderRadius: 4,
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  deviceButton: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginBottom: 8,
  },
  disabled: {
    color: '#ccc',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
