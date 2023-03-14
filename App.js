import React from 'react';
import Home from './Screens/Home';
import Ecg from './Screens/Ecg';
import Spo2 from './Screens/Spo2';
import Nibp from './Screens/Nibp';
import Temp from './Screens/Temp';
import Bluetooth from './DrawerScreens/Bluetooth';
import Wifi from './DrawerScreens/Wifi';
import Battery from './DrawerScreens/Battery';
import PicContainer from './DrawerScreens/PicContainer';
import Settings from './DrawerScreens/Settings'
import Bell from './DrawerScreens/Bell';
import Queries from './DrawerScreens/Queries';
import {DrawerContent} from './Screens/DrawerContent';
import LI from './Screens/ECG/LI';
import LII from './Screens/ECG/LII';
import V1 from './Screens/ECG/V1';
import V2 from './Screens/ECG/V2';
import V3 from './Screens/ECG/V3';
import V4 from './Screens/ECG/V4';
import V5 from './Screens/ECG/V5';
import V6 from './Screens/ECG/V6';



import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


const App = () =>{
 return(
    <NavigationContainer>
        <DrawerNavigator/>
    </NavigationContainer>
 );
}
export default App;
const StackNavigation= () => {
    return(
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
            <Stack.Screen name='Main' component={Home}/>
            <Stack.Screen name='Ecg' component={Ecg}/>
            <Stack.Screen name='Spo2' component={Spo2}/>
            <Stack.Screen name='Nibp' component={Nibp}/>
            <Stack.Screen name='Temp' component={Temp}/>
            <Stack.Screen name='Bluetooth' component={Bluetooth}/>
            <Stack.Screen name='Wifi' component={Wifi}/>
            <Stack.Screen name='Battery' component={Battery}/>
            <Stack.Screen name='PicContainer' component={PicContainer}/>
            <Stack.Screen name='Settings' component={Settings}/>
            <Stack.Screen name='Bell' component={Bell}/>
            <Stack.Screen name='Queries' component={Queries}/>
            <Stack.Screen name='Set' component={Set}/>
            <Stack.Screen name='LI' component={LI}/>
            <Stack.Screen name='LII' component={LII}/>
            <Stack.Screen name='V1' component={V1}/>
            <Stack.Screen name='V2' component={V2}/>
            <Stack.Screen name='V3' component={V3}/>
            <Stack.Screen name='V4' component={V4}/>
            <Stack.Screen name='V5' component={V5}/>
            <Stack.Screen name='V6' component={V6}/>

        </Stack.Navigator>
    )
}

const DrawerNavigator= () =>{
    return (
        <Drawer.Navigator
        screenOptions={{
            drawerStyle: {
                width: '35%',
            },
            drawerActiveTintColor: "#000000",
            drawerActiveBackgroundColor:"Red",
        }}
        drawerContent={props => <DrawerContent {...props}/>}>
            <Drawer.Screen name=' ' component={StackNavigation} />
        </Drawer.Navigator>
    )
}


