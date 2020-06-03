import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {NavigationActions} from 'react-navigation';

import Header from '../../sections/components/header';
import CardItemProfile from '../components/cardProfile';
import ProfileMenu from '../components/profileMenu';
import API from '../../../utils/api';

class Profile extends Component {
  state = {
    my_profile: {},
  };

  static navigationOptions = ({navigation}) => {
    return {
      header: <Header></Header>,
    };
  };

  componentDidMount() {
    this.getMyProfile();
  }
  onPressEdit = () => {
    this.props.dispatch(
      NavigationActions.navigate({
        routeName: 'EditProfile',
      })
    );
  };
  getMyProfile = async () => {
    try {
      const my_profile = await API.getMyProfile(this.props.token);
      if (my_profile.success == true) {
        this.setState({my_profile: my_profile.data});
      } else {
        alert(my_profile.description);
      }
    } catch (e) {
      alert('Error de conexión');
    }
  };

  onPressAppointments = () => {
    this.props.dispatch(
      NavigationActions.navigate({
        routeName: 'Doctors',
      })
    );
  };

  onPressSelectPayMethod = () => {
    alert();
    this.props.dispatch(
      NavigationActions.navigate({
        routeName: 'SelectPayMethod',
      })
    );
  };

  handleLogout = () => {
    this.props.dispatch({
      type: 'REMOVE_USER',
    });
    this.props.navigation.navigate('Loading');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txtTitle}>Mi perfil</Text>
        <CardItemProfile
          {...this.state.my_profile}
          onPressEdit={() => {
            this.onPressEdit();
          }}
        />
        <ProfileMenu
          onPressLogout={() => {
            this.handleLogout();
          }}
          onPressAppointments={() => {
            this.onPressAppointments();
          }}
          onPressSelectPayMethod={() => {
            this.onPressSelectPayMethod();
          }}
        />
      </View>
    );
  }
}

const montserrat_b = 'Montserrat-Bold';
const montserrat_m = 'Montserrat-Medium';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  txtTitle: {
    fontSize: 18,
    color: 'black',
    marginTop: 22,
    marginBottom: 15,
    paddingLeft: 20,
    fontFamily: montserrat_b,
  },

  withPadding: {
    paddingHorizontal: 20,
  },
});

function mapStateToProps(state) {
  return {
    user: state.user,
    token: state.user.token,
  };
}

export default connect(mapStateToProps)(Profile);
