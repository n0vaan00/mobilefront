///npm i react-native-vector-icons        npm i react-xml-parser
/// npm install @react-navigation/material-top-tabs react-native-tab-view         npx expo install react-native-pager-view    
////// npm install @react-navigation/material-bottom-tabs react-native-paper 
//npx expo install react-native-svg@13.4.0    npm install react-native-chart-kit
/// npx expo install react-native-web@~0.18.7 react-dom@18.0.0 @expo/webpack-config@^0.17.0
/// npm i react-native-dropdown-select-list
import { View, ScrollView } from 'react-native';
import Header from "./components/Header";
import Elepricenow from "./components/Elepricenow";
import ElediagramsDay from "./components/ElediagramsDay";
import Eleproduce from "./components/Eleproduce";
import Footer from "./components/Footer"; 
import styles from './style/style'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import ElediagramsWeek from './components/ElediagramsWeek';
 import ElediagramsMonth from './components/ElediagramsMonth'; 
import ElediagramsYear from './components/ElediagramsYear';
import Loading from './components/Loading';
import Errorinfo from './components/Errorinfo';

const Tab = createMaterialTopTabNavigator();

function Development() {
  return (
    <Tab.Navigator screenOptions= {{tabBarLabelStyle: { fontSize: 13 , fontFamily: 'Robotobold', color: 'white' },
    tabBarStyle: { backgroundColor: '#808080', borderWidth: 2, borderColor: '#5F5F5F'},
    tabBarIndicatorStyle: {backgroundColor: '#FFC300', height: 2}
    
    }}>
      <Tab.Screen lazy={true} name="Päivä" component={ElediagramsDay} />
      <Tab.Screen lazy={true} name="Viikko" component={ElediagramsWeek} />
      { <Tab.Screen lazy={true} name="Kuukausi" component={ElediagramsMonth} />}
       <Tab.Screen lazy={true} name="Vuosi" component={ElediagramsYear} />
      {/* <Tab.Screen lazy={true} name="Kuukausi" component={ElediagramsMonth} /> */}
      {/* <Tab.Screen lazy={true} name="Vuosi" component={ElediagramsYear} /> */}
    </Tab.Navigator>
  )
  
}


export default function App() { 

  const [loaded] = useFonts({
    Roboto: require('./assets/fonts/Roboto-Regular.ttf'),
    Orbitronregular: require('./assets/fonts/Orbitron-Regular.ttf'),
    Orbitronbold: require('./assets/fonts/Orbitron-Bold.ttf'),
    Robotobold: require('./assets/fonts/Roboto-Bold.ttf')
    });
    if(!loaded) {
    return null;
    }

  return (
    <View style={styles.container}>
      <Header />
      <NavigationContainer>
      <Tab.Navigator screenOptions= {{tabBarLabelStyle: { fontSize: 14 , fontFamily: 'Robotobold', color: 'white' },
        tabBarStyle: { backgroundColor: '#5F5F5F'},
        tabBarIndicatorStyle: {backgroundColor: '#FFC300', height: 2 }
        }}>
          <Tab.Screen lazy={true}  name="Hinta tänään" component={Elepricenow} />
          <Tab.Screen lazy={true} name="Hintakehitys" component={Development} />
          <Tab.Screen lazy={true} name="Kulutus ja tuotanto" component={Eleproduce} />
      </Tab.Navigator>
      </NavigationContainer>
      <Footer></Footer>
    </View>
  );
}