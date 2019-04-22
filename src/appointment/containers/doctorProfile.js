import React, {Component} from 'react';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Header from '../../sections/components/header';
import Close from '../../sections/components/close';
import {Rating} from 'react-native-elements';

class DoctorProfile extends Component {
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
        <ScrollView style={styles.scrollContainer}>
        
          <View style={styles.gralInfo}>
            <View style={styles.imgDocBox}>
              <Image
                style={styles.imgDoc}
                source={{
                  uri:
                    'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png',
                }}
              />
            </View>

            <View style={styles.doctorDetail}>
              <Text style={styles.docName}>Dr. David Perez</Text>
              <Text style={styles.docSpecialty}>Médico General</Text>
              <View style={styles.starsPriceBlock}>
                <Rating
                  type="custom"
                  imageSize={15}
                  readonly
                  startingValue={3}
                  ratingColor="#EFB04B"
                  style={styles.rating}
                />

                <Text style={styles.docPrice}>$700</Text>
              </View>
              <Text style={styles.docAddress}>
                Torres Bordet 234,Cuahutémoc, Sta María la Ribera
              </Text>
            </View>

            <View style={styles.boxFavLocation}>
              <TouchableOpacity
                onPress={this.handleFav}
                style={styles.buttonFav}
              >
                <Image
                  source={require('../../../assets/welcome/fb_login.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={this.handleFav}
                style={styles.buttonFav}
              >
                <Image
                  source={require('../../../assets/welcome/fb_login.png')}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.sectionAppointment}>
            <Text style={styles.subtitle}>Agender cita</Text>
            <View>
              <Text style={styles.txtDate}>Fecha:</Text>
              <Text style={styles.selected_day}>Hoy</Text>
              <Icon style={styles.iconDefault} name="calendar" />
            </View>
            <View style={styles.boxAppointments}>
              <TouchableOpacity>
                <Text style={styles.appointmentBtn}>12:00</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.appointmentBtn}>13:00</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.appointmentBtn}>16:00</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.sectionAbout}>
            <Text style={styles.subtitle}>Acerca del doctor</Text>
            <Text style={styles.AboutDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </View>

          <View style={styles.sectionComments}>
            <View style={styles.itemCommentUsr}>
              <View style={styles.usrInfo}>
                <Image
                  style={styles.imgUsr}
                  source={{
                    uri:
                      'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png',
                  }}
                />
                <Text style={styles.nameUsr}>Natalia Nava</Text>
                <Text style={styles.dateComment}>14/09/08</Text>
              </View>
              <Text style={styles.commentUsr}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flexDirection: 'column',
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    //paddingHorizontal:20,
    paddingTop: '5%',
  },
  scrollContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    paddingLeft: 20,
    paddingRight: 20,
  },

  gralInfo: {
    flexDirection: 'column',
    flex: 1,
    paddingTop: 35,
    paddingBottom: 10,
    paddingHorizontal: 20,
    //alignSelf: 'center',
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

  imgDoc: {
    width: 65,
    height: 65,
    flexDirection: 'row',

    backgroundColor: 'red',
  },
});

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(DoctorProfile);
