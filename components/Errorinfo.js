import React from 'react'
import { View, Text, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../style/style';


export default function Errorinfo() {
  return (
    <View style={styles.errorflex}>
    <Text style={styles.errortext}>Hupsista jokin meni pieleen.</Text>
        <Text><MaterialCommunityIcons
          name={'alert-circle'}
          color={'#ffffff'}
          size= {200}
          style={styles.error}
        ></MaterialCommunityIcons>
    </Text>
  </View>
  )
}