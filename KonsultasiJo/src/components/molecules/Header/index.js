import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { IconBack } from '../../../assests';

const Header = ({title, onPress}) => {
  return (

    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.back}>
          <IconBack/>
        </View>
      </TouchableOpacity>
      <View style={{alignItems:'center', marginRight:35}} >
        <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({

  container: {
    backgroundColor:'white',
    paddingVertical: 16,
    // marginBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',

  },
  back: {
    paddingVertical: 10,
    //paddingHorizontal: 10,
  },
  text: {
    marginLeft: 25,
    fontSize: 30,
    color: '#000',
  },
});
