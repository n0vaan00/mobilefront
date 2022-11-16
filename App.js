///npm i react-native-vector-icons        npm i react-xml-parser
/// npm install @react-navigation/material-top-tabs react-native-tab-view         npx expo install react-native-pager-view    
import { View, ScrollView } from 'react-native';
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
      <Tab.Navigator screenOptions= {{tabBarLabelStyle: { fontSize: 14 , fontWeight:'bold', color: 'white' },
        tabBarStyle: { backgroundColor: '#5F5F5F'},
        tabBarActiveTintColor: '#e91e63'
        }}>
          <Tab.Screen  name="Hinta tänään" component={Elepricenow} />
          <Tab.Screen name="Hintakehitys" component={Elediagrams} />
          <Tab.Screen name="Kulutus ja tuotanto" component={Eleproduce} />
        </Tab.Navigator>
      </NavigationContainer>
      <Footer></Footer>
    </View>
  );
}