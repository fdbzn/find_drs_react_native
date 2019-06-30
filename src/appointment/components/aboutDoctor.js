import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, Text} from 'react-native';

class aboutDoctor extends Component {
  render() {
    return (
      <View>
        <Text style={[styles.subtitle, styles.subAbout]}>
          Acerca del doctor
        </Text>
        <View style={styles.sectionAbout}>
          <Text style={styles.AboutDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          </Text>
        </View>
      </View>
    );
  }
}

const montserrat_b = 'Montserrat-Bold';
const montserrat_li = 'Montserrat-Light';
const styles = StyleSheet.create({
  subtitle: {
    fontSize: 21,
    fontFamily: montserrat_b,
    color: 'black',
  },

  subAbout: {
    marginBottom: 15,
  },
  sectionAbout: {
    flexDirection: 'column',
    paddingTop: 15,
    paddingBottom: 10,
    paddingHorizontal: 10,
    width: '100%',
    minHeight: 100,
    borderWidth: 1,
    borderColor: '#e9e9e9',
    marginBottom: 10,
    borderRadius: 4,
    backgroundColor: 'white',
    fontFamily: montserrat_li,
    fontSize: 16,

    // ios
    shadowRadius: 4,
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.3,

    // android (Android +5.0)
    elevation: 3,
  },
});

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(aboutDoctor);
