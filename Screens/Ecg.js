import React from "react";
import { SafeAreaView,StyleSheet,Text,View,Image,Button,Alert,TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native'
import { useState } from "react";

const Ecg =() => {
  const navigation = useNavigation();
  const Header =() =>{
  return(
    <View style = {styles.header}>
          <Image source={require('../Images/ReturnBack.png')} style={{width:50,height:37,marginTop:3, marginRight:11}}></Image>
          <View style={{marginRight:250}}>
          <Text style={{ fontWeight:'bold',fontSize:30,marginTop:5, marginRight:10}}> ECG</Text>
          </View>
      </View>
  )
}
const Boxes =() => {
  const [isDisabled, setIsDisabled] = useState(false);
    
    const TaskLI = () => {
      navigation.navigate('LI')
      setIsDisabled(true);
      
    }
    const TaskLII = () => {
      navigation.navigate('LII')
      setIsDisabled(true);
    }
    const TaskV1 = () => {
      navigation.navigate('V1')
      setIsDisabled(true);
    }
    const TaskV2 = () => {
      navigation.navigate('V2')
      setIsDisabled(true);
    }
    const TaskV3 = () => {
      navigation.navigate('V3')
      setIsDisabled(true);
    }
    const TaskV4 = () => {
      navigation.navigate('V4')
      setIsDisabled(true);
    }
    const TaskV5 = () => {
      navigation.navigate('V5')
      setIsDisabled(true);
    }
    const TaskV6 = () => {
      navigation.navigate('V6')
      setIsDisabled(true);
    }
    
  
  return(
    <LinearGradient
      style={styles.container}
      colors={["#fbdcdc", "#f4b38f", "#f79794"]}

    >
      <View style={styles.boxContainer}>
        <View style={styles.box}>
          <View style={styles.inner}>
            <Image source={require('../Images/BpmIcon.png')} style={{ width: 200, height: 200,}}></Image>
            <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black', marginTop: 60, marginLeft: 10}}> Please Select Click on the Leads Button to take reading
            </Text>
          </View>
        </View>
        <Image source={require('../Images/LeadPosition.png')} style={styles.leadposition}></Image>
      </View>



      <View style={styles.fixToText}>
        <TouchableOpacity onPress={() => navigation.navigate('LI')}>
          <Button color='#f9d5ee'
            title="   L  I    "
            onPress={() => TaskLI()}  disabled={isDisabled}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('LII')}>
        <Button color='#f9d5ee'
          title="   L II    " disabled={isDisabled}
          onPress={() => TaskLII()} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('V1')}> 
      <Button color='#f9d5ee' 
        title="    V 1   " disabled={isDisabled}
        onPress={() => TaskV1()} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('V2')}>
      <Button color='#f9d5ee'
        title="   V 2    " disabled={isDisabled}
        onPress={() => TaskV2()}/>
        </TouchableOpacity>
    </View>
    <View style={styles.fixToText1}>
      <TouchableOpacity onPress={() => navigation.navigate('V3')}>
      <Button color='#f9d5ee'
          title="   V 3   " disabled={isDisabled}
          onPress={() => TaskV3()} />
      </TouchableOpacity >
      <TouchableOpacity onPress={() => navigation.navigate('V4')} >
         <Button color='#f9d5ee'
          title="   V 4   " disabled={isDisabled}
          onPress={() => TaskV4() }/></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('V5')}>
        <Button color='#f9d5ee'
          title="   V 5    " disabled={isDisabled}
          onPress={() => TaskV5()} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('V6')}>
        <Button color='#f9d5ee'
          title="    V 6   " disabled={isDisabled}
          onPress={() => TaskV6()} />
        </TouchableOpacity>


      </View>
      
    
    </LinearGradient>
  )

}
  return(
  <SafeAreaView style={styles.container}>
    <Header/>
    <Boxes/>
  </SafeAreaView>
  );
};
const styles =StyleSheet.create({
  container:{
    flex:1,
  },
  inner:{
    flexDirection:"row",
    padding:10,
  },
  header:{
    width:'100%',
    height:'7%',
    backgroundColor:'#fdabab',
    alignItems:'center',
    justifyContent: 'center',
    borderRadius:45,
    flexDirection:'row'

  },
  boxContainer:{
    width:'100%',
    height:'75%',
    //backgroundColor:'yellow',
    padding:5,
    flexDirection:'row',
    flexWrap:'wrap',

  },
  box:{
    width:'50%',
    height:'50%',
    padding:5,
    //backgroundColor:'green'
  },
  leadposition:{
    
      width:330,
      height:190,
      marginLeft:30,
      marginTop:1,
      borderRadius:25,
      //marginBottom:10
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    //backgroundColor:'#f9d5ee'
    width:'100%',
    marginBottom:5
    
  },
  fixToText1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    //backgroundColor:'#f9d5ee'
    width:'100%',
    marginTop:10
  },


});
export default Ecg;
