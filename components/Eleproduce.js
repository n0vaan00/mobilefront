import React from 'react'
import { View, Text, ScrollView } from 'react-native';
import styles from '../style/style';

export default function Eleproduce() {

    return (
      <View>
        <View style={styles.square}>
        <ScrollView>
        <Text style={styles.title}>Kulutus ja Tuotanto</Text>
        <Text style={styles.flex}>
          <Text style={styles.text}>Kulutus Suomessa: </Text>
            <Text style={styles.notimportant}>Tänne tulostus!!!!!!</Text>
          </Text>
        <Text style={styles.flex}>
          <Text style={styles.text}>Tuotanto Suomessa </Text>
          <Text style={styles.notimportant}>Tänne tulostus!!!!!! </Text>
        </Text>
        <Text style={styles.flex}>
          <Text style={styles.text}>Kulutus ennuste seuraava vuorokausi: </Text>
          <Text style={styles.notimportant}>Tänne tulostus!!!!!!</Text>
        </Text>
        </ScrollView>
        </View>
    </View>
    );
  
}
