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
      speciality_id: this.props.selected_specialty._id,
      name: this.props.doctor_name,
    };

    // --- haciendo la busqueda
    const sortBy = 'rank';
    const json_doctors = await API.getDoctorsByName (
      data_search.speciality_id,
      data_search.name,
      sortBy
    );

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
  console.log("ennamedocres",state);
  return {
    navigation: state.navigation,
    doctor_name: state.homeSearch.doctor_name,
    selected_specialty: state.homeSearch.selected_specialty,
  };
}

export default connect(mapStateToProps)(ResultDoctors);
