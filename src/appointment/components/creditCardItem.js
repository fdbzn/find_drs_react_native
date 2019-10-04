import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';

function creditCardItem (props) {
    let item_selected = {};
    if(props.id_selected === props.id ){
        item_selected = {
            backgroundColor:'#91ecde',
            borderTopWidth:1,
            borderColor:'#17bfa5',
        }
    }

    var icon_type_card = props.brand == 'VISA'
      ? require('../../../assets/appointment/visa_debit.png')
      : require('../../../assets/appointment/master_card.png');
 
    return (
      <TouchableOpacity
        onPress={props.onPress}
      >
        <View style={[styles.cardItem, item_selected ]}>
          <TouchableOpacity onPress={this.handleEdit} style={styles.btnEdit}>
            <Image source={require('../../../assets/appointment/edit.png')} />
          </TouchableOpacity>
          <View style={styles.imgBox}>
            <Image
              style={styles.imgCard}
              source={require('../../../assets/appointment/credit_card_icon.png')}
            />
          </View>

          <View style={styles.cardDetail}>
            <Text style={styles.name}>Tarjeta de pago</Text>
            <Text style={styles.secondaryLabel}>{props.name}</Text>
            <View style={styles.oneDetailBox}>
              <Text style={styles.labelBlack}>Tarjeta: </Text>
              <Text style={styles.labelGreen}>************{props.last4}</Text>
            </View>
            
            <Image
              style={styles.imgTypeCard} 
              source={icon_type_card} 
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  
}

const montserrat_b = 'Montserrat-Bold';
const montserrat_m = 'Montserrat-Medium';
const montserrat_li = 'Montserrat-Light';
const montserrat_sb = 'Montserrat-SemiBold';
const styles = StyleSheet.create({
  
  cardItem: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 30,
    paddingHorizontal: 10,
    alignSelf: 'center',
    width: '100%',
    minHeight: 150,
    borderBottomWidth: 2,
    borderColor: '#e9e9e9',
    marginBottom: 10,
    backgroundColor: 'white',
  },
  btnEdit: {
    zIndex: 1,
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 46,
    height: 46,
  },
  imgBox: {
    width: 65,
    //backgroundColor: 'red',
    flexDirection: 'row',
    //justifyContent: 'center',
  },
  imgCard: {
    width: 46,
    height: 46,
    borderRadius: 23,
  },
  cardDetail: {
    flex: 1,
  },

  name: {
    fontFamily: montserrat_b,
    fontSize: 18,
    marginBottom: 8,
    color: 'black',
  },

  secondaryLabel: {
    fontFamily: montserrat_m,
    fontSize: 15,
    marginBottom: 5,
    color: '#B4B5B6',
  },

  oneDetailBox: {
    flexDirection: 'row',
  },

  labelBlack: {
    fontSize: 16,
    fontFamily: montserrat_sb,
    color: 'black',
  },
  labelGreen: {
    flex: 1,
    fontSize: 16,
    fontFamily: montserrat_li,
    color: 'black',
  },

  imgTypeCard: {
    marginTop: 10,
  },
});

export default creditCardItem;
