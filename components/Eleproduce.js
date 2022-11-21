import React from 'react'
import { View, Text, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import styles from '../style/style';

export default function Eleproduce() {

  const [loaded] = useFonts({
    RubikGlitch: require('../assets/fonts/RubikGlitch-Regular.ttf'),
    Roboto: require('../assets/fonts/Roboto-Regular.ttf'),
    Orbitronregular: require('../assets/fonts/Orbitron-Regular.ttf'),
    Orbitronbold: require('../assets/fonts/Orbitron-Bold.ttf')
  });
  if(!loaded) {
    return null;
  }

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
