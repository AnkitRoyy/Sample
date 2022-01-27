import React from 'react';
import {Image, View,LogBox } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import CustomDrawer from './components/CustomDrawer';

import Fblogin from './screen/Fblogin';
import Messages from './screen/Messages';
import Profile from './screen/Profile';
import TabNavigator from './screen/TabNavigator';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        drawerContent={props => <CustomDrawer {...props} />}
        screenOptions={{
          drawerActiveBackgroundColor : '#1B58D8',
          drawerActiveTintColor : '#FFFFFF',
          drawerInactiveBackgroundColor : '#fff',
          drawerInactiveTintColor : '#0741bb',
          drawerLabelStyle:{
            marginLeft : -20,
            fontWeight : '700',
          },
          // headerShown : false,
        }}
      >
        <Drawer.Screen name="FbLogin" component={TabNavigator} options={{
          drawerIcon : ({color}) => (
            <Image
            source={color === '#0741bb' ? require('./images/home.png') : require('./images/homeWhite.png')}
              style={{width : 20, height : 20}}
            />
          )
        }}/>
        <Drawer.Screen name="Messages" component={Messages} options={{
          drawerIcon : ({color}) => (
            <Image
              source={color === '#0741bb' ? require('./images/avatar.png') : require('./images/avatarWhite.png')}
              style={{width : 20, height : 20}}
            />
          )
        }}/>
        <Drawer.Screen name="Profile" component={Profile} options={{
          drawerIcon : ({color}) => (
            <Image
            source={color === '#0741bb' ? require('./images/saved.png') : require('./images/savedWhite.png')}
              style={{width : 20, height : 20}}
            />
          )
        }}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  "If you want to use Reanimated 2 then go through our installation steps https://docs.swmansion.com/react-native-reanimated/docs/installation",
])