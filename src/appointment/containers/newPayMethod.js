import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View} from 'react-native';

import Header from '../../sections/components/header';
import Close from '../../sections/components/close';
import FormPayMethod from '../components/formPayMethod';

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
      <View style={styles.mainContainer}>
        <FormPayMethod/>
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
