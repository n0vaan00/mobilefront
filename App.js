import { StyleSheet,  View } from 'react-native';
import Header from "./components/Header";
import Elepricenow from "./components/Elepricenow";
import Footer from "./components/Footer"; 

export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <Elepricenow></Elepricenow>
      <Footer></Footer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});