import {View,StyleSheet,Image,Text,TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'

const Home = () => {
    const navigation = useNavigation();
  return (
    <LinearGradient 
    style={styles.container}
    colors={["#fbdcdc","#f4b38f","#f79794"]}
    
    >
      <View style={styles.up}>
      <Image source={require('../Images/inno.png')} style={{marginLeft:140,width:90,height:90}}></Image>
      <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
      <Image source={require('../Images/profile.png')} style={{marginTop:20,marginLeft:100,width:50,height:50}}></Image>
      </TouchableOpacity>
      </View>
          <Image source={require('../Images/mainpic.png')} style={styles.mainpic}></Image>
      <View>
      <TouchableOpacity onPress={()=>navigation.navigate('BlueConnectEstablish')}>
    <Image source={require('../Images/BluetoothIcon.png')} style={styles.BluetoothIcon}></Image>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate('Battery')}>
    <Image source={require('../Images/BatteryIcon.png')} style={styles.BatteryIcon}></Image>
    </TouchableOpacity>

    <View style={styles.spacer} />
    </View>
      <View style={styles.container1}>
      <TouchableOpacity onPress={()=>navigation.navigate('Ecg')}>
      <Image source={require('../Images/ecg.png')} style={{width:100,height:100,marginTop:20}}></Image>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('Spo2')}>
      <Image source={require('../Images/spo2.png')} style={{width:100,height:100,marginTop:20}}></Image>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('Nibp')}>
      <Image source={require('../Images/nibp.png')} style={{width:100,height:100,marginTop:20}}></Image>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('Temp')}>
      <Image source={require('../Images/temp.png')} style={{width:100,height:100,marginTop:20}}></Image>
      </TouchableOpacity>
      </View>
    </LinearGradient>
  )
};
const newLocal = 50
const styles = StyleSheet.create({

  container: {

    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
},
container1 : {
  flexDirection:"row",
  padding:20,
  alignItems: 'center',
  justifyContent: 'center',
},
up:{
    flexDirection:"row",
},

mainpic:{
  width:300,
  height:250,
  marginLeft:50,
  marginTop:5,
  borderRadius:45,
  
},
inno:{
  marginLeft:50,
},
spacer: {
  margin: 30,
  height: 2,
  width: '90%',
  backgroundColor: '#FFFFFF',
  opacity: 0.4,
  marginTop:10,
  marginLeft:20,
},
BluetoothIcon:{
  flexDirection:"row",
  //padding:8,
  marginLeft:40,
  marginTop:15,
 
 
},BatteryIcon:{
  marginLeft:300,
  //marginTop:15,
  flexDirection:"row",
  
}


});

export default Home;



