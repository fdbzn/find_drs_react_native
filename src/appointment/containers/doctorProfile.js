import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';

import Close from '../../sections/components/close';
import Header from '../../sections/components/header';
import API from '../../../utils/api';
import DoctorCard from '../components/doctorCard';
import AppointmentIntervals from '../components/appointmentIntervals';
import AboutDoctor from '../components/aboutDoctor';
import DoctorComments from '../components/doctorComments';

class DoctorProfile extends Component {
  state = {
    enableScrollViewScroll: true,
  };

  onEnableScroll = () => {
    //console.log("SIN SCROLL")
    this.setState({
      enableScrollViewScroll: false,
    });
  };

  async componentDidMount() {
    //const curdate = new Date().toJSON().slice(0,10).replace(/-/g,'-');
    const curdate = '2019-03-04'
    const workplace_id = this.props.doctor.workplace._id;
    const intervals = await API.getIntervalsByDate(workplace_id, curdate);
    // --- get interval object and concat schedules in one
    const appointments = intervals.data.map( interval=>{
      return interval.appointments
    }).reduce((pre, cur)=>{
      return pre.concat(cur);
    });

    this.props.dispatch({ 
      type: 'SET_INTERVALS',
      payload: {
        appointments: appointments,
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

  

  render() {
    return (
      <View style={styles.container} onStartShouldSetResponderCapture={() => {
        this.setState({ enableScrollViewScroll: true });
      }}>
        <ScrollView scrollEnabled={this.state.enableScrollViewScroll} style={styles.scrollContainer} >
          <View style={styles.withPadding}>
            <DoctorCard />
          </View>

          <AppointmentIntervals onEnableScroll = {this.onEnableScroll}/>

          <View style={styles.withPadding}>
            <AboutDoctor />
          </View>

          <DoctorComments />
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
  },

  withPadding: {
    paddingLeft: 20,
    paddingRight: 20,
  },
});

function mapStateToProps(state) {
  return {
    doctor : state.homeSearch.selected_dr
  };
}

export default connect(mapStateToProps)(DoctorProfile);
