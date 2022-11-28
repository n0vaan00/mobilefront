import React from 'react'
import { View, Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../style/style';


export default function Errorinfo() {
  return (
    <View style={styles.square}>
    <Text style={styles.errortext}>Hupsista jokin meni pieleen.</Text>
        <Text style={styles.errorflex}><MaterialCommunityIcons
          name={'alert-circle'}
          color={'white'}
          size= {200}
          style={styles.error}
        ></MaterialCommunityIcons>
    </Text>
  </View>
  )
}