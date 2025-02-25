import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'
import Colors from '../../common/Colors'
import { useRouter } from 'expo-router'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from '../../config/FireBaseConfig'
import { useState } from 'react'

export default function signin() {

    const router=useRouter();
        const [email,setEmail]=useState();
        const [password,setPassword]=useState();
    const OnsignInClick=()=>{

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    router.replace(('tabs'))
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
    }
  return (
    <View>
      <Text>signin</Text>
        <View style={{ marginTop:30}}>
        <Text>Email</Text>
            <TextInput placeholder='Email' style={styles.email}
            onChangeText={(value)=>setEmail(value)}/>
            <Text>Password</Text>
            <TextInput placeholder='Password' secureTextEntry={true} style={styles.email}
            onChangeText={(value)=>setPassword(value)}/>
        </View>
      <TouchableOpacity style={styles.botton} onPress={OnsignInClick}>
        <Text style={styles.bottoncolor1}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.bottoncreate}
      onPress={()=>router.push('login/signup')}>
        <Text style={styles.bottoncolor2}>Create Account</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    email:{
        padding:10,
        borderWidth:1,
        backgroundColor:'white'
    },
    botton:{
        padding:15,
        backgroundColor:Colors.PRIMARY,
        marginTop:12
    },
    
    bottoncolor1:{
       color:'white',
       alignItems:'center',
       textAlign:'center',
    },
    bottoncreate:{
        padding:15,
        backgroundColor:'white',
        marginTop:14, 
        borderWidth:0.25,
    },
    bottoncolor2:{
        color:Colors.PRIMARY,
        alignItems:'center',
        textAlign:'center',
       
     },

})