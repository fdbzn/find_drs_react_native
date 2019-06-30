import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, Text, Image} from 'react-native';

class doctorComments extends Component {
  render() {
    return (
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

  
  sectionComments: {
    flexDirection: 'column',
    paddingTop: 15,
    paddingBottom: 15,
    paddingHorizontal: 30,
    width: '100%',
    minHeight: 100,
    marginBottom: 25,
    borderRadius: 4,
    backgroundColor: 'white',
  },

  itemCommentUsr: {
    flexDirection: 'column',
    paddingTop: 15,
    paddingBottom: 15,
  },

  usrInfo: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  imgUsr: {
    width: 44,
    height: 44,
    borderRadius: 23,
  },

  detailComment: {
    flexDirection: 'column',
    marginLeft: 15,
  },
  nameUsr: {
    fontFamily: montserrat_b,
    fontSize: 16,
    color: 'black',
  },

  dateComment: {
    fontFamily: montserrat_li,
    fontSize: 16,
    color: 'black',
  },

  commentUsr: {
    fontFamily: montserrat_li,
    fontSize: 14,
  },
});

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(doctorComments);
