import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {NavigationActions} from 'react-navigation';

import Header from '../../sections/components/header';
import NotificationList from '../components/notificationList';
import {fake_data} from '../../../utils/fake_data';

class notifications extends Component {
  async componentDidMount() {
    const notification_list = fake_data;

    this.props.dispatch({
      type: 'SET_NOTIFICATIONS',
      payload: {
        notification_list: notification_list.data,
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
        <Text style={styles.txtTitle}>Notificaciones</Text>
        <NotificationList />
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

export default connect(mapStateToProps)(notifications);
