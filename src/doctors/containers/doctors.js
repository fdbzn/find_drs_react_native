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
    console.log(history_doctors)

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

  buttonAddNewFamily = () => {
    this.props.dispatch(
      NavigationActions.navigate({
        routeName: 'AddFamily',
      })
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.mainTitle}>Historial</Text>
        <HistoryList/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#fff',
    //paddingHorizontal: 20,
  },
  mainTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    color: 'black',
    paddingHorizontal: 15,
    //marginTop: 15,
  },
});

function mapStateToProps(state) {
  return {
    token: state.user.token,
  };
}

export default connect(mapStateToProps)(Doctors);
