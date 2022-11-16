///npm i react-native-vector-icons    npm i react-xml-parser
<<<<<<< HEAD
/// npm i @react-navigation/native    npx expo install react-native-screens react-native-safe-area-context
////npx expo install expo-font  
=======
/// npm install @react-navigation/material-top-tabs react-native-tab-view     npx expo install react-native-pager-view    
>>>>>>> 4138824aa5b581bab43ae4b5cd6744228d1f7b3b
import { View } from 'react-native';
import Header from "./components/Header";
import Elepricenow from "./components/Elepricenow";
import Elediagrams from "./components/Elediagrams";
import Eleproduce from "./components/Eleproduce";
import Footer from "./components/Footer"; 
import styles from './style/style'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

export default function App() {

  return (
    <View style={styles.container}>
      <Header></Header>
      <NavigationContainer>
      <Tab.Navigator>
          <Tab.Screen name="Hinta tänään" component={Elepricenow} />
          <Tab.Screen name="Hintakehitys" component={Elediagrams} />
          <Tab.Screen name="Kulutus ja tuotanto" component={Eleproduce} />
        </Tab.Navigator>
      </NavigationContainer>
      <Footer></Footer>
    </View>
  );
}