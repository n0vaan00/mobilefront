import React from 'react'
import { View, Text } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import styles from '../style/style';

export default function Errorinfo() {
  return (
    <View>
      <View style={styles.square}>
      <Text style={styles.errortext}>Hupsista jokin meni pieleen.</Text>
      <Text><MaterialCommunityIcons
                name={'alert-circle'}
                size={200}
                color={'#ffffff'}
                style={styles.error}
              ></MaterialCommunityIcons>
      </Text>
      </View>
    </View>
  )
}
