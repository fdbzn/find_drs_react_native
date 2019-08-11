import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {NavigationActions} from 'react-navigation';
import DatePicker from 'react-native-datepicker';

import Header from '../../sections/components/header';
import GenreDropDown from '../../welcome/components/genreDropDown';
import Close from '../../sections/components/close';
import API from '../../../utils/api';

class newPayMethod extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      header: (
        <Header>
          <Close
            onPress={() => {
              navigation.goBack();
            }}
            icon="<"
          />
        </Header>
      ),
    };
  };

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.keyboardContainer}
        behavior="padding"
        enabled
      >
        <ScrollView style={styles.container}>
          <Text style={styles.mainTitle}>Nuevo Metodo de Pago</Text>
          <Text style={styles.label}>Nombre del nuevo metodo de pago </Text>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            returnKeyType={'next'}
            onSubmitEditing={() => {
              this.lastName.focus();
            }}
            blurOnSubmit={false}
            onChangeText={name => this.setState({name})}
          />
          <Text style={styles.label}>Número de la tarjeta</Text>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            returnKeyType={'next'}
            onSubmitEditing={() => {
              this.lastName.focus();
            }}
            blurOnSubmit={false}
            onChangeText={name => this.setState({name})}
          />
          <View style={styles.rowForm}>
            <View style={styles.columnLeft} >
            </View>
            <View style={styles.columnRight} >
            </View>
          </View>

          <TouchableOpacity
            onPress={this.handleRegisterFamily}
            style={[styles.button]}
          >
            <Text style={styles.buttonLabel}>REGISTRAR</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  keyboardContainer: {
    flex: 1,
    flexDirection: 'column',
    minHeight: 100, // --- evita error de minimizar demasiado la pantalla con keyboard
    backgroundColor: 'white',
    paddingTop: 20,
    paddingBottom: 100,
  },
  container: {
    flexDirection: 'column',
    paddingHorizontal: 10,
    width: '100%',
    //backgroundColor: "blue",
  },
  mainTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    color: 'black',
    paddingHorizontal: 15,
    //marginTop: 15,
  },
  rowForm: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  columnLeft: {
    width: '35%',
    //backgroundColor:"blue",
  },
  columnRight: {
    width: '60%',
    //backgroundColor:"red",
  },
  label: {
    marginTop: 20,
    paddingHorizontal: 15,
    color: '#b1b1b1',
  },
  input: {
    paddingTop: 0,
    width: '100%',
    height: 35,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderBottomWidth: 2,
    borderBottomColor: '#666',
    color: 'black',
    fontSize: 17,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 40,
    marginTop: 35,
    marginBottom: 30,
    borderRadius: 5,
    // ios
    shadowOffset: {width: 0, height: 13},
    shadowOpacity: 0.3,
    shadowRadius: 8,
    // android (Android +5.0)
    elevation: 3,
    backgroundColor: '#fee082',
  },

  buttonLabel: {
    flex: 0.5,
    color: 'black',
    padding: 10,
    fontSize: 13,
    textAlign: 'center',
  },
});

export default connect(null)(newPayMethod);
