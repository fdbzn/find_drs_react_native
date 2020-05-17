import React, {Component} from 'react';
import {
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
} from 'react-native';
import {connect} from 'react-redux';

import FormLogin from '../../welcome/components/formLogin';
import Header from '../../sections/components/header';
import Close from '../../sections/components/close';

class LoginAppointment extends Component {
  state = {
    email: '',
    password: '',
  }; 

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

  componentDidMount () {
    this.focus = this.props.navigation.addListener ('didFocus', () => {
      StatusBar.setBarStyle ('light-content');
      StatusBar.setBackgroundColor ('#a88f07');
    });
  }

  render () {
    return (
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
          enabled
        >
          <FormLogin/>
        </KeyboardAvoidingView>
      
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    minHeight:700, // --- evita error de minimizar demasiado la pantalla con keyboard
    flexDirection: 'column',
    backgroundColor: 'white',
  }
});

export default connect (null) (LoginAppointment);
