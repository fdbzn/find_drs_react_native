import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {connect} from 'react-redux';
import {Rating} from 'react-native-elements';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

class doctorCard extends Component {
  handleLocation = () => {
    this.props.dispatch(
      NavigationActions.navigate({
        routeName: 'DrHealthCenterMap',
      })
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.gralInfo}>
          <View style={styles.imgDocBox}>
            <Image
              style={styles.imgDoc}
              source={{
                uri: this.props.doctor.picture,
              }}
            />
          </View>

          <View style={styles.doctorDetail}>
            <Text style={styles.subtitle}>{this.props.doctor.name}</Text>
            <Text style={styles.docSpecialty}>{this.props.specialty}</Text>
            <View style={styles.starsPriceBlock}>
              <Rating
                type="custom"
                imageSize={15}
                readonly
                startingValue={this.props.doctor.rank}
                ratingColor="#EFB04B"
                style={styles.rating}
              />

              <Text style={styles.docPrice}>
                ${this.props.doctor.workplace.price}
              </Text>
            </View>
            <Text style={styles.docAddress}>
              {this.props.doctor.workplace.healthCenter.address}
            </Text>
          </View>

          <View style={styles.boxFavLocation}>
            {/*
            <TouchableOpacity
              onPress={this.handleFav}
              style={styles.drProfileBtn}
            >
              <Image source={require('../../../assets/appointment/love.png')} />
            </TouchableOpacity>
            */}
            <TouchableOpacity
              onPress={this.handleLocation}
              style={styles.drProfileBtn}
            >
              <Image
                source={require('../../../assets/appointment/place.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const montserrat_b = 'Montserrat-Bold';
const montserrat_m = 'Montserrat-Medium';
const styles = StyleSheet.create({
  gralInfo: {
    flexDirection: 'column',
    paddingTop: 35,
    paddingBottom: 10,
    paddingHorizontal: 10,
    //alignSelf: 'center',
    width: '100%',
    minHeight: 100,
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
    width: 103,
    height: 103,
    alignSelf: 'center',
    borderRadius: 51,
    marginBottom: 15,
  },
  imgDoc: {
    width: 102,
    height: 102,
    borderRadius: 51,
  },

  subtitle: {
    fontSize: 21,
    fontFamily: montserrat_b,
    color: 'black',
  },

  docSpecialty: {
    fontSize: 16,
    fontFamily: montserrat_m,
    color: 'black',
    marginTop: 2,
    marginBottom: 2,
  },

  starsPriceBlock: {
    flexDirection: 'row',
    marginBottom: 2,
  },

  rating: {
    alignSelf: 'center',
  },

  docPrice: {
    fontFamily: montserrat_m,
    fontSize: 16,
    color: '#00BFA5',
    marginLeft: 20,
  },

  docAddress: {
    fontFamily: montserrat_m,
    fontSize: 13,
    marginBottom: 5,
  },

  boxFavLocation: {
    flexDirection: 'row',
    //backgroundColor:'blue',
    justifyContent: 'flex-end',
  },
  drProfileBtn: {
    width: 47,
    height: 47,
    marginLeft: 10,
  },
});

function mapStateToProps(state) {
  return {
    doctor: state.homeSearch.selected_dr,
  };
}

export default connect(mapStateToProps)(doctorCard);
