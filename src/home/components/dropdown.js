import React, {Component} from 'react';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import ModalDropdown from 'react-native-modal-dropdown';
import {StyleSheet, Text, View} from 'react-native';

class Dropdown extends Component {
  state = {
    txt_selected_dropdown: 'Selecciona',
  };

  handlerSortby = (key, val) => {
    // --- actualiza el valor por default
    this.setState ({
      txt_selected_dropdown: val,
    });
    
  };

  render () {
    return (
      <View style={styles.container}>
        
        <ModalDropdown
          options={['Cercania', 'Precio', 'Ranking']}
          onSelect={this.handlerSortby}
          style={styles.dropdownBtn}
          dropdownStyle={styles.dropdown}
          dropdownTextStyle={styles.item}
        >
          <View style={styles.boxdeDefault}>
            <Text style={styles.defaultText}>
              {this.state.txt_selected_dropdown}
            </Text>
            <Icon style={styles.iconDefault} name="caret-down" />
          </View>
        </ModalDropdown>
      </View>
    );
  }
}

const montserrat_r = 'Montserrat-Regular';
const montserrat_m = 'Montserrat-Medium';
const styles = StyleSheet.create ({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  dropdownBtn: {
    width: '100%',
    height: 35,
    paddingTop: 7,
    paddingLeft: 15,
    alignSelf: 'flex-end',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#777',
  },
  boxdeDefault: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  defaultText: {
    color: '#b1b1b1',
    fontSize:12,
    fontFamily:montserrat_r,
  },
  iconDefault: {
    fontSize: 18,
  },
  dropdown: {
    width: '85%',
    flexDirection: 'column',
    //flex: 1,
  },
  item:{
    color:'#b1b1b1',
    fontFamily:montserrat_m,
    fontSize:15,

  },
});

function mapStateToProps (state) {
  return {
    filter_options: state.filter_options,
  };
}

export default connect (null) (Dropdown);
