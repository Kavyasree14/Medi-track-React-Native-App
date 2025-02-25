import { View, Text, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'
import Colors from '../../common/Colors'
import { useRouter } from 'expo-router'
import { auth } from '../../config/FireBaseConfig'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { useState } from 'react'
import { Alert } from 'react-native'


export default function signup() {

    const router=useRouter();

    const [email,setEmail]=useState();
    const [password,setPassword]=useState();

    const OnCreateAccount =()=>{
        if(!email || !password){
            // ToastAndroid.show('Please fill all details',ToastAndroid.BOTTOM);
            Alert.alert('Please fill all details')
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log(user);
            router.push('(tabs)')
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            if(errorCode =='auth/email-already-in-use')
            {
                ToastAndroid.show('Email already exist',ToastAndroid.BOTTOM);
                Alert.alert('Email already exist')
            }
            // ..
        });
    }

  return (
     <View>
          <Text>CREATE NEW ACCOUNT </Text>

          <View style={{ marginTop:30}}>
            <Text>Full Name</Text>
                <TextInput placeholder='Full Name' style={styles.email}/>
            </View>
            <View >
            <Text style={{ marginTop:30}}>Email</Text>
                <TextInput placeholder='Email' style={styles.email}
                onChangeText={(value)=>setEmail(value)}
                />
                <Text style={{ marginTop:30}}>Password</Text>
                <TextInput placeholder='Password' secureTextEntry={true} style={styles.email} 
                    onChangeText={(value)=>setPassword(value)}
                />
            </View>
          <TouchableOpacity style={styles.botton} onPress={OnCreateAccount}>
            <Text style={styles.bottoncolor1}>Create Account</Text>
          </TouchableOpacity>
    
          <TouchableOpacity style={styles.bottoncreate}
          onPress={()=>router.push('login/signin')}>
            <Text style={styles.bottoncolor2}>Already Have a Account? Sign In</Text>
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