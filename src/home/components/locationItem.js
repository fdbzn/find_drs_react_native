import React, { PureComponent } from 'react';
import { View, Alert, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';
import { NavigationActions } from 'react-navigation';

class LocationItem extends PureComponent {
  _handlePress = async () => {
    const res = await this.props.fetchDetails(this.props.place_id)
    //console.log('result', res)
    // -- regresa a la pantalla anterior
    this.props.dispatch(
      NavigationActions.back()
    )
    // --- guarda el valor de direccion
    this.props.dispatch({
      type: 'SET_SELECTED_ADDRESS',
      payload: {
        selected_address:{
          location:{
            lat: res.geometry.location.lat,
            lng: res.geometry.location.lng,
          },
          formatted_address: res.formatted_address,
        }
      }
    })
    //this.props.clearSearchs()
   
  }

  render() {
    return (
      <TouchableOpacity style={styles.root} onPress={this._handlePress}>
        <Text numberOfLines={1} style={styles.txtDesc} >{this.props.description}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    height: 65,
    width:'100%',
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: 'center',
    paddingTop:10,
    paddingBottom:10,
    paddingHorizontal:20,
  },
  txtDesc:{
    fontSize:16,
    color:"#777",
    fontWeight:'bold',
  },
})

export default connect (null) (LocationItem);
