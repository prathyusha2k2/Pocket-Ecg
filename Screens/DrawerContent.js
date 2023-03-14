import React from 'react';
import {View,StyleSheet,Image,TouchableOpacity,ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import {Text} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
} from '@react-navigation/drawer';
import { LinearGradient } from 'expo-linear-gradient';

import { BlurView } from 'expo-blur';




export function DrawerContent(props){
    const navigation = useNavigation();
    
    return (
      <BlurView intensity={80}  tint='dark' style={styles.Drawer}>
          <View style={{ flex: 1 }}>
             
            <DrawerContentScrollView
              {...props}
              contentContainerStyle>
                
              <View
                style={{
                  flexDirection: "column",
                  paddingLeft: 5,
                  //backgroundColor: '#00000000',
                  alignItems: "center",
                  paddingBottom: 10,
                  paddingTop: 35,
                  justifyContent: 'center',
                  //opacity: 0.8,
                  
                
                }}>
                
                 

                
                <TouchableOpacity onPress={() => navigation.navigate('Bluetooth')}>
                  <Image source={require("../assets/icons/bluetooth.png")} style={{ width: 60, height: 60, marginBottom: 20 }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Wifi')}>
                  <Image source={require("../assets/icons/wifi.png")} style={{ width: 45, height: 45, marginBottom: 20, marginTop: 20 }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Battery')}>
                  <Image source={require("../assets/icons/battery.png")} style={{ width: 45, height: 45, marginBottom: 20, marginTop: 20 }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('PicContainer')}>
                  <Image source={require("../assets/icons/piccontainer.png")} style={{ width: 50, height: 50, marginBottom: 20, marginTop: 20 }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                  <Image source={require("../assets/icons/settings.png")} />
                </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Bell')}>
                <Image source={require("../assets/icons/Bell.png")} style={{ width: 50, height: 50, marginLeft: 40, marginTop: 70 }} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Queries')}>
                <Image source={require("../assets/icons/Queries.png")} style={{ width: 50, height: 50, marginLeft: 40, marginTop: 35 }} />
              </TouchableOpacity>
              </View>
             
            </DrawerContentScrollView>
          </View>
          </BlurView>
       

      );
}
const styles = StyleSheet.create({
  //container: {

    //flex: 1,
    //backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    //opacity: 0.4,
   // borderRadius:40,
    
 // },
 Drawer:{
  width:'100%',
  height:'100%',
  borderColor:'#fff',
  borderWidth:2,
  borderRadius:10,
  padding:10,
  alignItems:'center',
  overflow:'hidden',
  position:'absolute',
  //backgroundColor:'#c2fa41',
  //opacity: .2,
  borderRadius: 30,

  
 }
   

  
})
