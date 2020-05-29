import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {Rating} from 'react-native-elements';
import SeparatorGreen from '../../sections/components/HorizontalSeparatorGreen'

function doctorsItem(props) {
  return (
    <View style={styles.containerDoctorItem}>
      <View style={styles.container_date}>
        <Text style={styles.numDay}>24</Text>
        <Text style={styles.nameMonth}>May</Text>
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

            <Text style={styles.docSpecialty}>
              {props.workplace.speciality.name}
            </Text>

            <Text style={styles.docName}>{props.name}</Text>
            
            <Text style={styles.appointmentDate}>Fri, May 12 2018  16:00hrs.</Text>
            
            <Text style={styles.docAddress}>
              {props.workplace.healthCenter.address}
            </Text>

            <View style={styles.starsPriceBlock}>
              <Text style={styles.docPrice}>${props.workplace.price}</Text>
              <Rating
                type="custom"
                imageSize={15}
                readonly
                startingValue={props.rank}
                ratingColor="#EFB04B"
                style={styles.rating}
              />
            </View>

            <TouchableOpacity
              onPress={props.goToCancelAppointment}
              style={styles.button}
            >
              <Text style={styles.buttonLabel}>CANCELAR CITA</Text>
            </TouchableOpacity>

          </View>

        </View>
      </TouchableOpacity>
    </View>
  );
}

const montserrat_b = 'Montserrat-Bold';
const montserrat_m = 'Montserrat-Medium';
const montserrat_r = 'Montserrat-Regular';
const montserrat_sm = 'Montserrat-SemiBold';
const styles = StyleSheet.create({
  
  containerDoctorItem:{
    width:"100%",
    flexDirection: 'row',
    alignItems:"flex-start"
  },
  container_date:{
    width:40,
    flexDirection:'column',
    alignItems:'flex-start',
  },
  numDay : {
    fontFamily: montserrat_r,
    fontSize: 26,
    color: '#00BFA5',
    marginTop:-7,
  },
  nameMonth : {
    fontFamily: montserrat_r,
    fontSize: 14,
    color: '#00BFA5',
  },
  cardItem:{
    flex:1
  },
  doctorItem: {
    flex:1,
    flexDirection: 'row',
    paddingTop: 20,
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
    width: 35,
    //backgroundColor: 'red',
    flexDirection: 'row',
    //justifyContent: 'center',
  },
  imgDoc: {
    width: 26,
    height: 26,
    borderRadius: 23,
  },
  doctorDetail: {
    flex: 1,
  },

  docName: {
    fontFamily: montserrat_m,
    fontSize: 15,
    marginBottom: 5,
  },
  
  docPrice: {
    fontFamily: montserrat_b,
    fontSize: 16,
    marginBottom: 8,
    marginTop: 8,
    marginRight:5,
  },

  docSpecialty: {
    fontFamily: montserrat_b,
    fontSize: 18,
    marginBottom: 8
  },

  starsPriceBlock: {
    flexDirection: 'row',
    marginBottom: 3,
  },
  rating: {
    alignSelf: 'center',
  },

  appointmentDate: {
    fontFamily: montserrat_sm,
    fontSize: 15,
    color: '#00BFA5',
    marginBottom:5,
    
  },

  docAddress: {
    fontFamily: montserrat_m,
    fontSize: 12,
    color: '#B9BABB',
    marginBottom: 0,
  },

  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 36,
    marginTop: 15,
    marginBottom: 15,
    borderRadius: 5,
    // ios
    shadowOffset: {width: 0, height: 13},
    shadowOpacity: 0.3,
    shadowRadius: 8,
    // android (Android +5.0)
    elevation: 3,
    backgroundColor: '#fee082',
  },
  buttonLabel: {
    flex: 1,
    color: 'black',
    padding: 10,
    fontSize: 13,
    textAlign: 'center',
  },
});

export default doctorsItem;
