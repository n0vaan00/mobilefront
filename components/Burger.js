import React  from 'react'
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import ModalDropdown from 'react-native-modal-dropdown';
import styles from '../style/style';

    export default function Burger() {
      return (
        <View style={styles.burger}>
          <ModalDropdown options={['Hinta tänään', 'Hintakehitys', 'Kulutus ja tuotanto']}>
          <MaterialCommunityIcons name="hamburger" size={40} color="black" />
          </ModalDropdown>  
        </View>
      )
    }
    



