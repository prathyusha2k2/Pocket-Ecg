import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

function Subtitle(props){
    return(
        <View  style={styles.container}>
            <Text style={styles.text}>{props.title}</Text>
            <View style ={styles.line}/>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        marginVertical:15,
        flexDirection:'row',
        alignItems:'center'

    },
    title:{
        marginLeft:10,
        fontWeight:'bold',
        fontSize:18,
        color:'gray',
        flex:1
    },
    line:{
      borderBottomWidth:1,
      flex:1,
      marginLeft:5,
      marginTop:3,
      borderColor:'#eceff1'

    }

})
export default Subtitle;