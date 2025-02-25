import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome';


export default function Tablayout() {
  return (
    <Tabs  screenOptions={{
        headerShown: false, // ✅ This removes the "index" title
      }}>
        <Tabs.Screen name='index'
        options={{
            tabBarLabel: 'Home',
            tabBarIcon:({color,size})=>(
                <FontAwesome name="home" size={size} color={color} />
            )
        }}/>
        <Tabs.Screen name='AddNew'
        options={{
            tabBarLabel: 'AddNew',
            tabBarIcon:({color,size})=>(
                <FontAwesome name="plus-square" size={size} color={color} />
            )
        }}/>
        <Tabs.Screen name='Profile'
        options={{
            tabBarLabel: 'Profile',
            tabBarIcon:({color,size})=>(
                <FontAwesome name="user" size={size} color={color} />
            )
        }}/>
    </Tabs>
  )
}