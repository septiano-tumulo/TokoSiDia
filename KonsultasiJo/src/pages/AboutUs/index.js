import {StyleSheet, Text, View, ScrollView, TouchableOpacity, Linking} from 'react-native';
import React from 'react';
import {Header, Gap} from '../../components';


const AboutUs = ({navigation}) => {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <Header title="AboutUs" onPress={()=>navigation.navigate('Menu')}/>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.textWrapper}>
          <Gap height={19} />          
          <Gap height={35} />
          <Text style={styles.text}>
          Startup ini bergerak dalam bidang E-Commerce, dimana startup ini untuk menjual jasa dan juga menjual hasil karya dari berbagai orang seperti membuat gambar dengan berbagai kategori antara lain karya abstrak, vector, tekonologi, interior dan masih banyak lagi. Selain menjual jasa seperti gambar di Onderhoud juga menyediakan pendaftaran akun dimana Ketika orang yang ini menjual jasa akan mendaftar dibagian seller, kemudian untuk orang yang ingin membuat kontrak atau ingin menyewa jasa akan mendaftar di buyer.
          </Text>          
        </View>
      </ScrollView>
    </View>
  );
};

export default AboutUs;

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    textAlign: 'center',    
    color: 'black',
    fontFamily: 'Poppins-Medium',
    lineHeight:23,
  },
  textWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 50,
    
  },
  buttonWeb: {
    backgroundColor: '#CF3D3D',
    alignItems: 'center',
    borderRadius: 5,
  },
});
