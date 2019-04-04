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
  componentDidMount () {
    if (this.props.homeSearchStore.type_search === 1) {
      const sortBy = 'near';
      this.processByLocation (sortBy);
      
      const filter_options = ['Precio', 'Ranking', 'Cercania'];
      this.setFilterOptions( filter_options );
    } else {
      const sortBy = 'rank';
      this.processByName (sortBy);

      const filter_options = ['Precio', 'Ranking'];
      this.setFilterOptions( filter_options );
    }
  }

  processByLocation = async (sortBy) => {
    // --- haciendo la busqueda
    const json_doctors = await API.getDoctorsByLocation (
      this.props.homeSearchStore.selected_address.location.lng,
      this.props.homeSearchStore.selected_address.location.lat,
      this.props.homeSearchStore.selected_specialty._id,
      sortBy
    );
    
    this.setValuesToSearch (filter_options, json_doctors.data);
  };

  processByName = async (sortBy) => {
    const json_doctors = await API.getDoctorsByName (
      this.props.homeSearchStore.selected_specialty._id,
      this.props.homeSearchStore.doctor_name,
      sortBy
    );

    this.setValuesToSearch (filter_options, json_doctors.data);
  };

  setValuesToSearch = (json_doctors) => {
    // --- guardando para su uso en otro componente
    this.props.dispatch ({
      type: 'SET_DOCTOR_LIST',
      payload: {
        doctors_list: json_doctors,
      },
    });
  };

  setFilterOptions = ( filter_options ) => {
    // --- show a filter by type of search
    this.props.dispatch ({
      type: 'SET_FILTER_OPTIONS',
      payload: {
        filter_options: filter_options,
        filter_function: this.filter_function,
      },
    });
  }


  
  filter_function = async (key) => {
    const type_search = this.props.homeSearchStore.type_search;
    switch (key) {
      // --- order by cost
      case '0': 
        const sortBy = 'price';
        if( type_search === 1 ){
          this.processByLocation(sortBy);
        }else{
          this.processByName(sortBy);
        }
        break;

      // --- order by rank
      case '1':
        const sortByRank = 'rank';
        if( type_search === 1 ){
          this.processByLocation(sortByRank);
        }else{
          this.processByName(sortByRank);
        }
        break;

      // --- order by near  (only location)
      case '2':
        const sortByNear = 'near';
        if( type_search === 1 ){
          this.processByLocation(sortBy);
        }
        break;

      default:
        console.log ('error de seleccion');
    }
  };

  

  static navigationOptions = ({navigation}) => {
    return {
      header: (
        <Header>
          <Close
            onPress={() => {
              navigation.goBack ();
            }}
            icon="<"
          />
        </Header>
      ),
    };
  };

  render () {
    return (
      <View style={styles.container}>
        <Dropdown />
        <DoctorsList />
      </View>
    );
  }
}

const styles = StyleSheet.create ({
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

function mapStateToProps (state) {
  return {
    navigation: state.navigation,
    homeSearchStore: state.homeSearch,
  };
}

export default connect (mapStateToProps) (ResultDoctors);
