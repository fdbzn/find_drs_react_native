import React, {Component} from 'react';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import ModalDropdown from 'react-native-modal-dropdown';
import {StyleSheet, Text, View} from 'react-native';

class genreDropdown extends Component {
  state = {
    txt_selected_dropdown: 'Selecciona',
  };

  handlerSortby = (key, val) => {
    // --- actualiza el valor por default
    this.setState ({
      txt_selected_dropdown: val,
    });

    // --- set value un parent component
    this.props.setValueInForm(val);
  };

  render () {
    return (
      <View style={styles.container}>
        <ModalDropdown
          options={['F', 'M',]}
          onSelect={this.handlerSortby}
          style={styles.dropdownBtn}
          dropdownStyle={styles.dropdown}
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

const styles = StyleSheet.create ({
  container: {
    flexDirection: 'row',
  },
  dropdownBtn: {
    width: '100%',
    height: 35,
    paddingTop: 7,
    paddingLeft: 15,
    alignSelf: 'flex-end',
    backgroundColor: 'white',
    borderBottomWidth: 2,
    borderBottomColor: '#777',
  },
  boxdeDefault: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  defaultText: {
    fontSize: 15,
    color: '#777',
  },
  iconDefault: {
    fontSize: 18,
  },
  dropdown: {
    width: '100%',
    flexDirection: 'column',
    flex: 1,
  },
});


export default connect (null) (genreDropdown);
