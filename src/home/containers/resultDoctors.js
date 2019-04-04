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

  processByLocation = async ( sortBy ) => {
    // --- haciendo la busqueda
    const json_doctors = await API.getDoctorsByLocation (
      this.props.homeSearchStore.selected_specialty._id,
      this.props.homeSearchStore.selected_address.location.lat,
      this.props.homeSearchStore.selected_address.location.lng,
      sortBy
    );
    
    this.setValuesToSearch (json_doctors.data);
  };

  processByName = async (sortBy) => {
    const json_doctors = await API.getDoctorsByName (
      this.props.homeSearchStore.selected_specialty._id,
      this.props.homeSearchStore.doctor_name,
      sortBy
    );

    this.setValuesToSearch (json_doctors.data);
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
          //this.processByLocation(sortBy);

          const hola = {
            data: [
              {
                _id: '2bff8c716669127b3424fa10',
                name: 'Antonio Aguirre',
                lastName: 'Ruiz',
                rank: 4.5,
                picture: 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png',
                __v: 0,
                workplace: {
                  _id: '1bff8c711669127b3424fa10',
                  healthCenter: {
                    _id: '6bff8c716669127b3424fa40',
                    name: 'Edificio Quiminet',
                    address: 'Insurgentes Sur 553, Escandón I Secc, 11800 Ciudad de México, CDMX',
                    __v: 0
                  },
                  speciality: {
                    _id: '5bff8c716669127b3424fa80',
                    name: 'General',
                    __v: 0
                  },
                  price: 250,
                  __v: 0
                }
              },
              {
                _id: '2bff8c716669127b3424fa10',
                name: 'Antonio Aguirre',
                lastName: 'Ruiz',
                rank: 4.5,
                picture: 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png',
                __v: 0,
                workplace: {
                  _id: '1bff8c711669127b3424fa11',
                  healthCenter: {
                    _id: '6bff8c716669127b3424fa41',
                    name: 'Hospital Star Médica Hip',
                    address: 'Calle Nueva York 15, Nápoles, 03810 Ciudad de México, CDMX',
                    __v: 0
                  },
                  speciality: {
                    _id: '5bff8c716669127b3424fa81',
                    name: 'Psicología',
                    __v: 0
                  },
                  price: 300,
                  __v: 0
                }
              },
              {
                _id: '2bff8c716669127b3424fa11',
                name: 'Daniela',
                lastName: 'Muñoz',
                rank: 5,
                picture: 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png',
                __v: 0,
                workplace: {
                  _id: '1bff8c711669127b3424fa12',
                  healthCenter: {
                    _id: '6bff8c716669127b3424fa42',
                    name: 'Hospital Ángeles Metropolitano',
                    address: 'Tlacotalpan 59, Roma Sur, 06760 Ciudad de México, CDMX',
                    __v: 0
                  },
                  speciality: {
                    _id: '5bff8c716669127b3424fa81',
                    name: 'Psicología',
                    __v: 0
                  },
                  price: 200,
                  __v: 0
                }
              },
              {
                _id: '2bff8c716669127b3424fa11',
                name: 'Daniela',
                lastName: 'Muñoz',
                rank: 5,
                picture: 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png',
                __v: 0,
                workplace: {
                  _id: '1bff8c711669127b3424fa13',
                  healthCenter: {
                    _id: '6bff8c716669127b3424fa43',
                    name: 'Torre Churubusco',
                    address: '03330, Cto Interior Avenida Río Churubusco 13, Xoco, 03330 Ciudad de México, CDMX',
                    __v: 0
                  },
                  speciality: {
                    _id: '5bff8c716669127b3424fa81',
                    name: 'Psicología',
                    __v: 0
                  },
                  price: 200,
                  __v: 0
                }
              },
              {
                _id: '2bff8c716669127b3424fa12',
                name: 'Dr. Simi',
                lastName: 'Samuel',
                rank: 3,
                picture: 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png',
                __v: 0,
                workplace: {
                  _id: '1bff8c711669127b3424fa14',
                  healthCenter: {
                    _id: '6bff8c716669127b3424fa43',
                    name: 'Torre Churubusco',
                    address: '03330, Cto Interior Avenida Río Churubusco 13, Xoco, 03330 Ciudad de México, CDMX',
                    __v: 0
                  },
                  speciality: {
                    _id: '5bff8c716669127b3424fa80',
                    name: 'General',
                    __v: 0
                  },
                  price: 250,
                  __v: 0
                }
              },
              {
                _id: '2bff8c716669127b3424fa12',
                name: 'Dr. Simi',
                lastName: 'Samuel',
                rank: 3,
                picture: 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png',
                __v: 0,
                workplace: {
                  _id: '1bff8c711669127b3424fa15',
                  healthCenter: {
                    _id: '6bff8c716669127b3424fa44',
                    name: 'Torre Médica Ermita',
                    address: 'Ermita Iztapalapa & Av. Río Churubusco, Sinatel, 09470 Ciudad de México, CDMX',
                    __v: 0
                  },
                  speciality: {
                    _id: '5bff8c716669127b3424fa80',
                    name: 'General',
                    __v: 0
                  },
                  price: 350,
                  __v: 0
                }
              },
              {
                _id: '2bff8c716669127b3424fa12',
                name: 'Dr. Simi',
                lastName: 'Samuel',
                rank: 3,
                picture: 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png',
                __v: 0,
                workplace: {
                  _id: '1bff8c711669127b3424fa16',
                  healthCenter: {
                    _id: '6bff8c716669127b3424fa45',
                    name: 'Condominio Rena',
                    address: 'Av de los Insurgentes Sur 605, Nápoles, 03810 Ciudad de México, CDMX',
                    __v: 0
                  },
                  speciality: {
                    _id: '5bff8c716669127b3424fa80',
                    name: 'General',
                    __v: 0
                  },
                  price: 450,
                  __v: 0
                }
              }
            ]
          };
          this.props.dispatch ({
            type: 'SET_DOCTOR_LIST',
            payload: {
              doctors_list: hola.data,
            },
          });
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
