import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../common/Colors'
import { StyleSheet } from 'react-native'
import { useRouter } from 'expo-router'


export default function LoginScreen() {

  const router=useRouter();

  return (
    <View style ={{
        backgroundColor: Colors.PRIMARY,
        height:'100%',
    }}>
       <Text style={{
        fontSize:50,
        fontWeight:'bold',
        color:'white',
        textAlign:'center',
        fontStyle: 'italic'
       }}>
        Medi Track
       </Text>
       <TouchableOpacity style={styles?.button} onPress={()=>router.push('login/signin')}>
        <Text>
          Continue
        </Text>
       </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button:{
    padding:15,
    backgroundColor:'white',
    borderRadius:229,
    alignItems:'center'

  }
})