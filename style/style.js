import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#FFC300'
      },

      header: {
        margin: 10,
        paddingTop: 20,
        flexDirection: 'row'
      },

      logo: {
        height: 90,
        width: 90
      },

      name: {
        marginTop: 30,
        fontSize: 30,
        fontFamily: 'RubikGlitch'
      },

      burger: {
        alignItems: 'flex-end'
      },

      footer: {
        alignItems: 'center',
        padding: 15,
      },

      team: {
        fontSize:15,
        fontWeight: 'bold'
      },

      title: {
        paddingLeft: 20,
        paddingBottom: 30,
        fontSize: 20,
        backgroundColor: '#5F5F5F',
        paddingTop: 20,
        color: 'white',
      },

      info: {
        paddingLeft: 20,
        fontSize: 15,
        backgroundColor: '#FFC300',
      },

      square: {
        backgroundColor: '#5F5F5F',
        paddingTop: 10,
        paddingBottom: 20,
        height: '100%',
        width: '100%'
      },

      important: {
        paddingBottom: 40,
        paddingLeft: 40,
        fontSize: 40,
        color: 'white',
        fontWeight: 'bold',
      },

      notimportant: {
        color: 'white',
        fontWeight: 'bold',
      },

      text:{
        color: 'white',
        padding: 20,
      },

      View:{
        backgroundColor: '#FFC300',
        color: '#FFC300',
      },

      flex:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingBottom: 40,
      },
});



