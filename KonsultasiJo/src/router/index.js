import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Product, Service, SignIn,SignUp, AboutUs} from '../pages';
import Menu from '../pages/Menu';


const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignIn}options={{headerShown: false}}/>
        <Stack.Screen name="SignUp" component={SignUp}options={{headerShown: false}}/>
        <Stack.Screen name="Menu" component={Menu}options={{headerShown: false}}/>        
        <Stack.Screen name="Product" component={Product}options={{headerShown: false}}/>        
        <Stack.Screen name="Service" component={Service}options={{headerShown: false}}/>              
        <Stack.Screen name="AboutUs" component={AboutUs}options={{headerShown: false}}/>              
    </Stack.Navigator>
  )
}

export default Router

const styles = StyleSheet.create({})