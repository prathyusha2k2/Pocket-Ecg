import React from 'react';
import { SafeAreaView,StyleSheet,Text,View,Image } from 'react-native';

const Spo2 =() => {

  const Header = () =>{
    return(
      <View style = {styles.header}>
          <Image source={require('../Images/Return.png')} style={{width:50,height:37,marginTop:10, marginRight:11}}></Image>
          <View style={{marginRight:235}}>
          <Text style={{ fontWeight:'bold',fontSize:20,marginTop:10, marginRight:10}}> SPO2</Text>
          </View>
      </View>
    )
  }
  const Boxes = () => {
    return(
      <View style = {styles.boxContainer}>
        <View style = {styles.box} >
          <View style = {styles.inner}>
          <Text style={{ fontWeight:'bold',fontSize:20,color: '#2e75b6'}}> SPO2</Text>
          <Image source={require('../Images/Spo2Icon.png')} style={{width:110,height:125,marginTop:0, marginLeft:250}}></Image>

       </View>
        </View>

      <View style = {styles.boxContainer1}>
        <View style ={styles.box1}>
          <View style ={styles.inner1}>
            <Text style={{fontWeight:'bold',fontSize:20,color: '#ff0000'}}>HEART RATE</Text>
              <Image source={require('../Images/BpmIcon.png')} style={{width:110,height:125,marginTop:0, marginLeft:250}}></Image>
          </View>
        </View>
    </View>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
        <Header/>
        <Boxes/>
    </SafeAreaView>

  );
};
const styles =StyleSheet.create({
container: {
    flex:1
  },
header: {
    width:'100%',
    height:'8%',
    backgroundColor:'#c8c8c8',
    alignItems:'center',
    justifyContent: 'center',
    borderRadius:45,
    flexDirection:'row'
  },
  boxContainer:{
    width:'100%',
    height:'90%',
    backgroundColor:'white',
    padding:5,
    flexDirection:'row',
    flexWrap:'wrap'
  },
  boxContainer1:{
    width:'100%',
    height:'90%',
    backgroundColor:'white',
    padding:5,
    flexDirection:'row',
    flexWrap:'wrap'
  },
  box:{
    width:'100%',
    height:'45%',
    padding:5,
    backgroundColor:'#ffd684',
    borderRadius:50,
    marginTop:30,
    elevation:10,
  },
  inner: {
    flex: 1,
    //backgroundcolor:'yellow',
    justifyContent:'center',
    fontWeight:'bold',
  },
  box1:{
    width:'100%',
    height:'45%',
    padding:5,
    backgroundColor:'#a3cc90',
    borderRadius:50,
    marginTop:30,
    elevation:10,
  },
  inner1:{
    //backgroundcolor:'yellow',
    flex: 1,
    justifyContent:'center',
    fontWeight:'bold',

  }

});
export default Spo2;