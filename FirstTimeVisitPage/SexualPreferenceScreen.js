import { StyleSheet, Text, View, Button, TextInput  } from 'react-native'
import React from 'react'

const Gender = () => {
  return (
    <View style={styles.container}>
       <View style={styles.info}>
         <Text style={{fontSize:25}}>What is your gender </Text>
        
       </View>
       <View style={styles.NextButton}>
          <Button title='Next' color={"red"} />
       </View>
    </View>
  )
}

export default Gender



const styles = StyleSheet.create({
   container:{
    top:80,
    display:'flex',
    flexDirection:'column',
    height:"85%",
    justifyContent:'space-between',
    marginHorizontal:30
   
   },
   info:{
    
   },
   NextButton:{
    alignItems:'flex-end',
   
    
   },
   Input:{
     borderColor:'gray',
     borderWidth:2,
     marginTop:20,
     borderRadius:7,
     padding:10
   }
});