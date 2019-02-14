import React, { PureComponent } from 'react';
import { 
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
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
        
        <Image
          style={styles.placeIcon}
          source={require ('../../../assets/home/place.png')}  
        />
        <Text numberOfLines={1} style={styles.txtDesc} >{this.props.description}</Text>
      </TouchableOpacity>
    );
  }
}

const montserrat_m = 'Montserrat-Medium';
const styles = StyleSheet.create({
  root: {
    height: 48,
    maxWidth:'100%',
    flexDirection:'row',
    alignItems:"center",
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingTop:10,
    paddingBottom:10,
    //paddingHorizontal:20,
  },
  txtDesc:{
    fontSize:13,
    color:"#3D3F42",
    fontFamily:montserrat_m,
    maxWidth:"85%",
  },
  placeIcon:{
    height:24,
    width:24,
    marginRight:25,
  },
})

export default connect (null) (LocationItem);
