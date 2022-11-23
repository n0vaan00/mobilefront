import React from 'react'
import { View, Text} from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import styles from '../style/style';

export default function Errorinfo() {
  return (
    <View>
      <View style={styles.square}>
        <View style={styles.flex2}>
      <Text style={styles.errortext}>Hupsista jokin meni pieleen.</Text>
      <Text><MaterialCommunityIcons
                name={'alert-circle'}
                color={'#ffffff'}
                size={'200'}
                style={styles.error}
              ></MaterialCommunityIcons>
      </Text>
      </View>
      </View>
    </View>
  )
}
