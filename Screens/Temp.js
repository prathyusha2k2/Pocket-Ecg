import React from 'react';
import { SafeAreaView,StyleSheet,Text,View,Image } from 'react-native';

const Temp =() => {

  const Header = () =>{
    return(
      <View style = {styles.header}>
          <Image source={require('../Images/Return.png')} style={{width:50,height:37,marginTop:10, marginRight:11}}></Image>
          <View style={{marginRight:170}}>
          <Text style={{ fontWeight:'bold',fontSize:20,marginTop:15, marginRight:10}}> Temperature</Text>
          </View>
      </View>
    )
  }
  const Boxes = () => {
    return(
      <View style = {styles.boxContainer}>
        <View style = {styles.box} >
          <View style = {styles.inner}>
          <Text style={{ fontWeight:'bold',fontSize:20,color: '#002060'}}> Temperature</Text>
          <Image source={require('../Images/Temperature.png')} style={{width:65,height:125,marginTop:20, marginLeft:300}}></Image>

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
    //alignItems:'center',
    justifyContent: 'center',
    borderRadius:45,
    //marginLeft:10,
    flexDirection:'row'
  },
  boxContainer:{
    width:'100%',
    height:'95%',
    backgroundColor:'white',
    padding:5,
    flexDirection:'row',
    flexWrap:'wrap'
  },
  box:{
    width:'100%',
    height:'45%',
    padding:5,
    backgroundColor:'#a2c1e5',
    borderRadius:50,
    marginTop:50,
    elevation:15,

  },
  inner: {
    flex: 1,
    backgroundcolor:'yellow',
    justifyContent:'center',
    fontWeight:'bold',
    elevation:15,
  },

});
export default Temp;