import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import styles from "../style/style"

export default function ElediagramsMonth() {
  return (
    <View style={styles.square}>
      <ScrollView>
        <Text style={styles.title}>Sähkön hintakehitys </Text>
        <Text style={styles.text}>viimeisen vuorokauden aikana</Text>
        {/* tähä välii diagrammin tulostus */}
      </ScrollView>
    </View>
  )
}