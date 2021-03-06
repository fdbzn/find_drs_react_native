import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import {connect} from 'react-redux';
import { NavigationActions } from 'react-navigation';

class Conditions extends Component {
  componentDidMount(){
    StatusBar.setBarStyle('light-content');
    StatusBar.setBackgroundColor('#a88f07');
  }


  handleCancel = () => {
    this.props.dispatch (NavigationActions.back ());
  };

  handleAccept = () => {
    const originScreen = this.props.navigation.getParam('originScreen', 'Conditions')
    if( originScreen  == "welcome" ){
        this.props.dispatch ({
          type: 'SET_USER',
          payload: {
            conditions: true,
            is_trial: true,
            username: 'trial user',
          },
        });
        this.props.navigation.navigate ('Loading');
    }
    
  };

  render () {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.headerCond}>
          <Text style={styles.mainTitle}>Terminos y Condiciones</Text>
        </View>
        <ScrollView style={styles.content}>
          <Text>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
          </Text>
          <Text>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
          </Text>
          <Text>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
          </Text>
          <Text>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
          </Text>

        </ScrollView>
        <View style={styles.footerCond}>
          <TouchableOpacity onPress={this.handleCancel} style={styles.button}>
            <Text style={styles.buttonLabel}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handleAccept} style={[styles.buttonYellow,styles.button]}>
            <Text style={styles.buttonLabel}>Acepto Condiciones</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const montserrat_m = 'Montserrat-Medium';
const styles = StyleSheet.create ({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  headerCond: {
    height:64,
    backgroundColor: '#FFE082',
    //paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent:"center",
    alignItems: 'center',

     // ios
     shadowOffset: {width: 0, height: 3},
     shadowOpacity: 0.3,
     shadowRadius: 2,
     // android (Android +5.0)
     elevation: 3,
  },
  mainTitle: {
    color: 'black',
    fontSize: 23,
  },
  content: {
    paddingTop: 0,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flex: 1,
  },

  footerCond: {
    height: 70,
    flexDirection: 'row',
  },

  button: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    
    height: 48,
    marginBottom: 20,
    borderRadius: 3,

    // ios
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    // android (Android +5.0)
    elevation: 3,
  },


  buttonYellow: {
    backgroundColor: '#fee082',
  },
  buttonLabel: {
    flex: 0.5,
    color: 'black',
    padding: 10,
    fontSize: 14,
    textAlign: 'center',
    fontFamily: montserrat_m,
  },
});

export default connect (null) (Conditions);
