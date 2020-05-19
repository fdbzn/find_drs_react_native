import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {Rating} from 'react-native-elements';
import SeparatorGreen from '../../sections/components/HorizontalSeparatorGreen'

function doctorsItem(props) {
  return (
    <View style={styles.containerDoctorItem}>
      <View style={styles.container_date}>
        <Text>12</Text>
        <Text>May</Text>
      </View>
      <TouchableOpacity style={styles.cardItem} onPress={props.onPress}>
        <SeparatorGreen/>
        <View style={styles.doctorItem}>
          <View style={styles.imgDocBox}>
            <Image
              style={styles.imgDoc}
              source={{
                uri: props.picture,
              }}
            />
          </View>

          <View style={styles.doctorDetail}>
            <Text style={styles.docName}>{props.name}</Text>
            <Text style={styles.docSpecialty}>
              {props.workplace.speciality.name}
            </Text>
            <View style={styles.starsPriceBlock}>
              <Rating
                type="custom"
                imageSize={15}
                readonly
                startingValue={props.rank}
                ratingColor="#EFB04B"
                style={styles.rating}
              />

              <Text style={styles.docPrice}>${props.workplace.price}</Text>
            </View>
            <Text style={styles.docAddress}>
              {props.workplace.healthCenter.address}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const montserrat_b = 'Montserrat-Bold';
const montserrat_m = 'Montserrat-Medium';
const montserrat_sm = 'Montserrat-SemiBold';
const styles = StyleSheet.create({
  containerDoctorItem:{
    width:"100%",
    flexDirection: 'row',
    alignItems:"flex-start"
  },
  container_date:{
    width:40,
  },
  cardItem:{
    flex:1
  },
  doctorItem: {
    flex:1,
    flexDirection: 'row',
    paddingTop: 35,
    paddingBottom: 10,
    paddingHorizontal: 20,
    alignSelf: 'center',
    minHeight: 150,
    borderWidth: 1,
    borderColor: '#e9e9e9',
    marginBottom: 10,
    borderRadius: 4,
    backgroundColor: 'white',

    // ios
    shadowRadius: 4,
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.3,

    // android (Android +5.0)
    elevation: 3,
  },
  imgDocBox: {
    width: 65,
    //backgroundColor: 'red',
    flexDirection: 'row',
    //justifyContent: 'center',
  },
  imgDoc: {
    width: 46,
    height: 46,
    borderRadius: 23,
  },
  doctorDetail: {
    flex: 1,
  },

  docName: {
    fontFamily: montserrat_b,
    fontSize: 18,
    marginBottom: 8,
  },

  docSpecialty: {
    fontFamily: montserrat_m,
    fontSize: 15,
    marginBottom: 5,
  },

  starsPriceBlock: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  rating: {
    alignSelf: 'center',
  },

  docPrice: {
    fontFamily: montserrat_sm,
    fontSize: 15,
    color: '#00BFA5',
    marginLeft: 20,
  },

  docAddress: {
    fontFamily: montserrat_m,
    fontSize: 12,
    color: '#707070',
    marginBottom: 5,
  },

  docSchedule: {
    fontFamily: montserrat_m,
    fontSize: 15,
    marginBottom: 5,
  },
  docHours: {
    fontFamily: montserrat_sm,
    fontSize: 15,
    color: '#00BFA5',
  },
});

export default doctorsItem;
