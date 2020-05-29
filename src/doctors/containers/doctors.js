import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {NavigationActions} from 'react-navigation';

import Header from '../../sections/components/header';
import HistoryList from '../components/historyList';
import {fake_data} from '../../../utils/fake_data';

class Doctors extends Component {
  async componentDidMount() {
    const history_doctors = fake_data;

    this.props.dispatch({
      type: 'SET_HISTORY_DOCTORS',
      payload: {
        history_doctors: history_doctors.data,
      },
    });
  }

  static navigationOptions = ({navigation}) => {
    return {
      header: <Header></Header>,
    };
  };


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txtTitle}>Historial</Text>
        <HistoryList/>
      </View>
    );
  }
}

const montserrat_b = 'Montserrat-Bold';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#fff',
    //paddingHorizontal: 20,
  },
  txtTitle: {
    fontSize: 18,
    color: 'black',
    marginTop: 22,
    paddingLeft: 20,
    fontFamily: montserrat_b,
  },
  
});

function mapStateToProps(state) {
  return {
    token: state.user.token,
  };
}

export default connect(mapStateToProps)(Doctors);
