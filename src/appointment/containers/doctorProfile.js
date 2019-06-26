import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavigationActions} from 'react-navigation';
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

  handleLocation = ()=>{
    this.props.dispatch (
      NavigationActions.navigate ({
        routeName: 'DrHealthCenterMap',
      })
    );
  }

  handleInitAppointment = () => {
    // --- guarda la hora de cita
    this.props.dispatch({
      type: 'SET_DR_PROFILE',
      payload: {
        schedule:'31 de sep 13:30',
        address:'insurgentes 553',
        geo_address:'',
        dr_name:'Juan Pablo Rodriguez',
        cost:'850',
      }
    });
    this.props.dispatch (
      NavigationActions.navigate ({
        routeName: 'WhoAppointment',
      })
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.withPadding}>
          
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
                <Text style={styles.subtitle}>Dr. David Perez</Text>
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

                  <Text style={styles.docPrice}>$800</Text>
                </View>
                <Text style={styles.docAddress}>
                  Torres Bordet 234,Cuahutémoc, Sta María la Ribera
                </Text>
              </View>

              <View style={styles.boxFavLocation}>
                <TouchableOpacity
                  onPress={this.handleFav}
                  style={styles.drProfileBtn}
                >
                  <Image
                    source={require('../../../assets/appointment/love.png')}
                  />
                </TouchableOpacity>
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

          <View style={styles.sectionAppointment}>
            <Text style={styles.subtitle}>Agendar cita</Text>
            <View style={styles.boxDate}>
              <Text style={styles.txtDate}>Fecha:</Text>
              <Text style={styles.selected_day}>Hoy</Text>
              <Icon style={styles.iconDefault} name="calendar" />
            </View>
            <View style={styles.boxAppointments}>
              <TouchableOpacity onPress={this.handleInitAppointment}>
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

          <Text style={[styles.subtitle, styles.subAbout]}>Acerca del doctor</Text>
          <View style={styles.withPadding}>
            <View style={styles.sectionAbout}>
              <Text style={styles.AboutDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                
              </Text>
            </View>
          </View>

          <View style={styles.sectionComments}>
            <Text style={styles.subtitle}>Comentarios</Text>
            <View style={styles.itemCommentUsr}>
              <View style={styles.usrInfo}>
                <Image
                  style={styles.imgUsr}
                  source={{
                    uri:
                      'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png',
                  }}
                />
                <View style={styles.detailComment}>
                  <Text style={styles.nameUsr}>Natalia Nava</Text>
                  <Text style={styles.dateComment}>14/09/08</Text>
                </View>
              </View>
              <Text style={styles.commentUsr}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const montserrat_b = 'Montserrat-Bold';
const montserrat_m = 'Montserrat-Medium';
const montserrat_li = 'Montserrat-Light';
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
    
  },
  
  withPadding:{
    paddingLeft: 20,
    paddingRight: 20,
  },
  gralInfo: {
    flexDirection: 'column',
    paddingTop: 35,
    paddingBottom: 10,
    paddingHorizontal: 10,
    //alignSelf: 'center',
    width: '100%',
    minHeight : 100,
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
  imgDocBox:{
    width: 103,
    height: 103,
    alignSelf:'center',
    borderRadius:51,
    marginBottom:15,
  },
  imgDoc: {
    width: 102,
    height: 102,
    borderRadius:51,
  },

  subtitle:{
    fontSize:21,
    fontFamily: montserrat_b,
    color:'black',
  },

  docSpecialty:{
    fontSize:16,
    fontFamily:montserrat_m,
    color:'black',
    marginTop:2,
    marginBottom:2,
  },

  starsPriceBlock:{
    flexDirection:'row',
    marginBottom:2,
  },

  rating:{
    alignSelf:'center',
  },

  docPrice:{
    fontFamily: montserrat_m,
    fontSize:16,
    color:'#00BFA5',
    marginLeft:20
  },

  docAddress:{
    fontFamily:montserrat_m,
    fontSize: 13,
    marginBottom:5,
  },

  boxFavLocation:{
    flexDirection : 'row',
    //backgroundColor:'blue',
    justifyContent:'flex-end'
  },
  drProfileBtn:{
    width:47,
    height:47,
    marginLeft:10,
  },

  sectionAppointment : {
    flexDirection: 'column',
    paddingTop: 15,
    paddingBottom: 15,
    paddingHorizontal: 30,
    width: '100%',
    minHeight : 100,
    borderBottomWidth: 2,
    borderColor: '#e9e9e9',
    marginBottom: 25,
    borderRadius: 4,
    backgroundColor: 'white',
  },

  boxDate:{
    flexDirection:'row',
    marginTop:15,

  },

  txtDate : {
    fontFamily:montserrat_m,
    fontSize:16,
    color:'black',
  },
  selected_day : {
    fontFamily:montserrat_li,
    fontSize:16,
    color:'black',
    marginLeft : 5,
    marginRight : 15,
  },
  iconDefault : {
    color : '#4DB6AC',
    fontSize:16,
    alignSelf:'center',
  },
  boxAppointments:{
    flexDirection:'row',
    marginTop : 30,
    justifyContent:'space-between',
  },
  appointmentBtn:{
    backgroundColor: '#FFE082',
    width:90,
    textAlign:'center',
    fontFamily:montserrat_m,
    fontSize:16,
    //paddingHorizontal:10,
    paddingVertical:10,
    borderRadius:40,
    marginBottom:15,
    marginRight:15,

    shadowRadius: 4,
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.3,
    elevation: 3,
  },
  subAbout:{
    
    marginBottom:15,
    marginLeft:30,
  },
  sectionAbout: {
    flexDirection: 'column',
    paddingTop: 15,
    paddingBottom: 10,
    paddingHorizontal: 10,
    width: '100%',
    minHeight : 100,
    borderWidth: 1,
    borderColor: '#e9e9e9',
    marginBottom: 10,
    borderRadius: 4,
    backgroundColor: 'white',
    fontFamily:montserrat_li,
    fontSize:16,

    // ios
    shadowRadius: 4,
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.3,

    // android (Android +5.0)
    elevation: 3,
  },
  sectionComments:{
    flexDirection: 'column',
    paddingTop: 15,
    paddingBottom: 15,
    paddingHorizontal: 30,
    width: '100%',
    minHeight : 100,
    marginBottom: 25,
    borderRadius: 4,
    backgroundColor: 'white',
  },

  itemCommentUsr:{
    flexDirection:'column',
    paddingTop:15,
    paddingBottom:15,
  },

  usrInfo:{
    flexDirection:'row',
    marginBottom:10,
  },
  imgUsr:{
    width:44,
    height:44,
    borderRadius:23,
  },

  detailComment:{
    flexDirection:'column',
    marginLeft:15,
  },
  nameUsr:{
    fontFamily:montserrat_b,
    fontSize:16,
    color:'black',
  },
  
  dateComment:{
    fontFamily:montserrat_li,
    fontSize:16,
    color:'black',
  },

  commentUsr:{
    fontFamily:montserrat_li,
    fontSize:14,
  },

});

function mapStateToProps(state) {
  console.log(state);
  return {};
}

export default connect(mapStateToProps)(DoctorProfile);
