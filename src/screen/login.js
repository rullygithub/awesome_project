import { StyleSheet, Text, View, Image } from 'react-native'
import React, {useState} from 'react'
import { useAuth } from '../component/authContext'

const Login = () => {
    const {login} = useAuth();
    const [email, setEmail] = useState('')
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('../assets/icon/sign.png')}/>
      <View>
        <Text>Hello There</Text>
      </View>

    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems:'center',


    },
    img: {
        width: 400,
        height: 400,
    }
})