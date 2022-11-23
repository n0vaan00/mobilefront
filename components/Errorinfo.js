import React from 'react'
import { View, Text, Image } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import styles from '../style/style';


export default function Errorinfo() {
  return (
    <View>
      <View style={styles.square}>
        <View style={styles.flex2}>
      <Text style={styles.errortext}>Hupsista jokin meni pieleen.</Text>
      <Image source = {require('../assets/sp3.png')}
       />
      </View>
      </View>
    </View>
  )
}
