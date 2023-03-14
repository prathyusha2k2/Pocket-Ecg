import React from 'react';
import{ View,Text,TouchableOpacity,StyleSheet,Image} from 'react-native';
import Separator from '../DrawerScreens/Separator'

function Device(props){
    return(
        <>
        <TouchableOpacity style={styles.wrapper} onPress={props.onPress}>
                <View style={styles.wrapperLeft}> 
                    <Image style={styles.wrapper.iconLeft} source={props.iconLeft}/>
                </View>
                <View style={styles.wrapperName}>
                    <Text style={styles.name}>{props.name}</Text>
                </View>
                <Image style={styles.iconRight} source={props.iconRight}/>
        </TouchableOpacity>
        <Separator color='black'/>
        </>
    );
}
const styles=StyleSheet.create({
    wrapper:{
        flexDirection:'row',
        paddingLeft:20,
        paddingRight:20,
        alignItems:'center',
        padding:10,
        justifyContent:'space-between'

    },
    wrapperLeft:{
        width:40,
        height:40,
        borderRadius:20,
        borderColor:'gray',
        borderWidth: 1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',



    },
    iconLeft:{

        width:20,
        height:20
    },
    wrapperName:{
        flex:1,
        justifyContent:'flex-start',
        marginLeft:15

    },
    name:{

    },
    iconRight:{
        
    }

    
})
export default Device;