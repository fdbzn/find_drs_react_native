import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {NavigationActions} from 'react-navigation';

import Header from '../../sections/components/header';
import Close from '../../sections/components/close';
import API from '../../../utils/api';
import RelativeList from '../components/relativeList';


class selectFamily extends Component {
  async componentDidMount () {
    const my_relatives = await API.getMyRelatives( this.props.token )
    
    this.props.dispatch ({
      type: 'SET_RELATIVES',
      payload: {
        my_relatives: my_relatives.data,
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


  
  buttonAddNewFamily = ()=>{
    this.props.dispatch(
      NavigationActions.navigate({
        routeName: 'AddFamily',
      })
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.boxTitleAdd}>
          <Text style={styles.txtTitle}>Familiares</Text>
          <TouchableOpacity
            onPress={this.buttonAddNewFamily}
            style={[styles.buttonYellow, styles.buttonAddNewFamily]}
          >
            <Text style={styles.buttonLabel}>AGREGAR NUEVO</Text>
          </TouchableOpacity>

          
        </View>
        <RelativeList/>

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
    //paddingHorizontal: 20,
    
  },
  boxTitleAdd:{
    flexDirection:'row',
    marginTop:20,
    marginBottom:20,
    paddingHorizontal: 20,
  },

  txtTitle: {
    fontSize: 18,
    color: 'black',
    marginBottom: 15,
    fontFamily: montserrat_b,
  },
  buttonYellow: {
    backgroundColor: '#fee082',
  },
  buttonAddNewFamily:{
    width:'60%',
    marginLeft:'auto',
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 36, 
    borderRadius: 3,

    // ios
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    // android (Android +5.0)
    elevation: 3,
  },
  buttonLabel: {
    color: 'black',
    fontSize: 13,
    textAlign: 'center',
    fontFamily: montserrat_m,
  },


});

function mapStateToProps(state) {
  return {
    token: state.user.token,
  };
}

export default connect(mapStateToProps)(selectFamily);
