import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
  Image,
} from 'react-native';
import {connect} from 'react-redux';
import FormLogin from '../components/formLogin';

class Login extends Component {
  state = {
    email: '',
    password: '',
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
          <View style={styles.brand_impact}>
            <Image
              source={require ('../../../assets/welcome/brand_impact.png')}  
            />
          </View>
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
  },
  brand_impact: {
    flex: 0.26,
    marginBottom: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fee082',

    // ios
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    // android (Android +5.0)
    elevation: 8,
  }
});

export default connect (null) (Login);
