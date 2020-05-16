import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View} from 'react-native';

import Header from '../../sections/components/header';
import Close from '../../sections/components/close';
//import Openpay, {createDeviceSessionId} from '../components/openpay';
import FormPayMethod from '../components/formPayMethod';

class newPayMethod extends Component {
  state = {
    loading: false,
  };

  successToken = (response) => {
    const deviceSessionId = createDeviceSessionId();
    const token = response.id;
    this.setState(() => ({loading: false}));

    // Make the call to your server with your charge request
  };

  failToken = (response) => {
    console.log('failToken', response);
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

  render() {
    const address = {
      city: 'Querétaro',
      country_code: 'MX',
      postal_code: '76900',
      line1: 'Av 5 de Febrero',
      line2: 'Roble 207',
      line3: 'Col Carrillo',
      state: 'Queretaro',
    };
    return (
      <View style={styles.mainContainer}>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',

    //minHeight: 700, // --- evita error de minimizar demasiado la pantalla con keyboard
    backgroundColor: 'white',
    paddingTop: 20,
  },
});

function mapStateToProps(state) {
  return {
    token: state.user.token,
  };
}
export default connect(mapStateToProps)(newPayMethod);
