import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavigationActions} from 'react-navigation';
import {StyleSheet, View} from 'react-native';

import Dropdown from '../components/dropdown';
import DoctorsList from '../components/doctorList';
import Header from '../../sections/components/header';
import Close from '../../sections/components/close';
import API from '../../../utils/api';

class ResultDoctors extends Component {
  async componentDidMount() {
    // --- config busqueda con parametros
    const data_search = {
      lng: this.props.selected_address.location.lng,
      lat: this.props.selected_address.location.lat,
      speciality_id: this.props.selected_specialty._id,
    };

    // --- haciendo la busqueda
    /*
    const sortBy = 'near';
    const json_doctors = await API.getDoctorsByLocation (
      data_search.speciality_id,
      data_search.lat,
      data_search.lng,
      sortBy
    );
    */
    const json_doctors = {
      data: [
        {
          _id: '5bff8c716669127b3424fa80',
          name: 'Jessica Marlen Hernandez Hernandez',
        },
        {
          _id: '5bff8c716669127b3424fa81',
          name: 'David Juarez Lopez',
        },
      ],
    };

    // --- guardando para su uso en otro componente
    this.props.dispatch({
      type: 'SET_DOCTOR_LIST',
      payload: {
        doctors_list: json_doctors.data,
      },
    });
  }

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
      <View style={styles.container}>
        <Dropdown />
        <DoctorsList />
      </View>
    );
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    //paddingHorizontal:20,
    paddingTop: '5%',
  },
});

function mapStateToProps(state) {
  console.log(state);
  return {
    navigation: state.navigation,
    selected_address: state.homeSearch.selected_address,
    selected_specialty: state.homeSearch.selected_specialty,
  };
}

export default connect(mapStateToProps)(ResultDoctors);
