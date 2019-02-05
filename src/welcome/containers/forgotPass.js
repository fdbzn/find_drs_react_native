import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {connect} from 'react-redux';

import Header from '../../sections/components/header';
import Close from '../../sections/components/close';

class ForgotPass extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      header: (
        <Header>
          <Close
            onPress={() => {
              navigation.goBack ();
            }}
          />
        </Header>
      ),
    };
  };

  render () {
    return (
      <KeyboardAvoidingView style={styles.keyboardContainer} behavior="padding" enabled>
        <View style={styles.container}>
            <Text style={styles.maiTitle}>Recuperar contraseña</Text>
            <Text style={styles.label}>Ingresa tu correo electronico</Text>
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              onChangeText={(password) => this.setState({password})}
            />
            <TouchableOpacity
              onPress={this.handleLogin}
              style={[styles.button]}
            >
              <Text style={styles.buttonLabel}>RECUPERAR</Text>
            </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create ({
  keyboardContainer: {
    flex: 1,
    minHeight: 700, // --- evita error de minimizar demasiado la pantalla con keyboard
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  container:{
    //backgroundColor: "red",
    width:"100%",
    paddingHorizontal:16,
    
  },
  maiTitle:{
    fontSize:21,
    fontWeight:"bold",
    color:"black",
    paddingHorizontal:15,
    marginTop:25,
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

export default connect (null) (ForgotPass);
