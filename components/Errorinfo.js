import React from 'react'
import { View, Text } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import styles from '../style/style';

export default function Errorinfo() {
  return (
    <View>
      <View style={styles.square}>
      <Text style={styles.title}>Hupsista jokin meni pieleen</Text>
      <Text><MaterialCommunityIcons
                name={'alert-circle'}
                size={40}
                style={styles.error}
              ></MaterialCommunityIcons>
      </Text>
      </View>
    </View>
  )
}
