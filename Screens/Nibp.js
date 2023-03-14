import React from 'react';
import { SafeAreaView,StyleSheet,Text,View,Image } from 'react-native';


const Nibp =() => {

  const Header = () =>{
    return(
      <View style = {styles.header}>
          <Image source={require('../Images/Return.png')} style={{width:50,height:37,marginTop:10, marginRight:11}}></Image>
          <View style={{marginRight:250}}>
          <Text style={{ fontWeight:'bold',marginTop:10,fontSize:30, marginRight:10}}> BP</Text>
          </View>
      </View>
    )
  }
  const Boxes = () => {
    return(
      <View style = {styles.boxContainer}>
        <View style = {styles.box} >
          <View style = {styles.inner}>
          <Text style={{ fontWeight:'bold',fontSize:30,color: '#ff0000'}}> NIBP mmHg</Text>
          <Image source={require('../Images/HeartRate.png')} style={{width:100,height:100,marginTop:10, marginLeft:30}}></Image>

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
    backgroundColor:'#dae3f3',
    borderRadius:45,
    marginTop:50,
    elevation:10,

  },
  inner: {
    flex: 1,
    backgroundcolor:'yellow',
    justifyContent:'center',
    fontWeight:'bold',
  },

});
export default Nibp;