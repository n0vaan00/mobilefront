///npm i react-native-vector-icons    npm i react-xml-parser
/// npm i @react-navigation/native    npx expo install react-native-screens react-native-safe-area-context
////npx expo install expo-font  
import { View } from 'react-native';
import Header from "./components/Header";
import Elepricenow from "./components/Elepricenow";
import Footer from "./components/Footer"; 
import styles from './style/style'


export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <Elepricenow></Elepricenow>
      <Footer></Footer>
    </View>
  );
}