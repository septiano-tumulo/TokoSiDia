import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { Gap, Header } from '../../components';
import { IP, Sduadua, ROG } from '../../assests';

const Service = ({navigation}) => {
  return (
    <View style={{flex:1,backgroundColor:'white'}}>              
    <Header title="Profile" onPress={()=>navigation.navigate('Menu')} />
    <Gap height={40}/>
    
    <ScrollView showsVerticalScrollIndicator={false}>
    
      <Text style={styles.title}>List Service Smartphone</Text>

      <View>                         
      {/* PRODUCTS */}        
          <View style={{flexDirection:'row', marginBottom:20}}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View>
                <IP />
                <Text style={{textAlign:'center'}}>Samsung A51</Text>
              </View>
              
              <View>
                <Sduadua />
                <Text style={{textAlign:'center'}}>Samsung A51</Text>
              </View>

              <View>
                <ROG />
                <Text style={{textAlign:'center'}}>Samsung A51</Text>
              </View>
            </ScrollView>
          </View>                  
          
      </View>
      <View style={{flexDirection:'row', marginBottom:20}}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View>
                <IP />
                <Text style={{textAlign:'center'}}>Samsung A51</Text>
              </View>
              
              <View>
                <Sduadua />
                <Text style={{textAlign:'center'}}>Samsung A51</Text>
              </View>

              <View>
                <ROG />
                <Text style={{textAlign:'center'}}>Samsung A51</Text>
              </View>
            </ScrollView>
          </View>                  
          <View style={{flexDirection:'row', marginBottom:20}}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View>
                <IP />
                <Text style={{textAlign:'center'}}>Samsung A51</Text>
              </View>
              
              <View>
                <Sduadua />
                <Text style={{textAlign:'center'}}>Samsung A51</Text>
              </View>

              <View>
                <ROG />
                <Text style={{textAlign:'center'}}>Samsung A51</Text>
              </View>
            </ScrollView>
          </View>                  
          <View style={{flexDirection:'row', marginBottom:20}}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View>
                <IP />
                <Text style={{textAlign:'center'}}>Samsung A51</Text>
              </View>
              
              <View>
                <Sduadua />
                <Text style={{textAlign:'center'}}>Samsung A51</Text>
              </View>

              <View>
                <ROG />
                <Text style={{textAlign:'center'}}>Samsung A51</Text>
              </View>
            </ScrollView>
          </View>                  
          <View style={{flexDirection:'row', marginBottom:20}}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View>
                <IP />
                <Text style={{textAlign:'center'}}>Samsung A51</Text>
              </View>
              
              <View>
                <Sduadua />
                <Text style={{textAlign:'center'}}>Samsung A51</Text>
              </View>

              <View>
                <ROG />
                <Text style={{textAlign:'center'}}>Samsung A51</Text>
              </View>
            </ScrollView>
          </View>                  

    </ScrollView>


    </View>
  )
}

export default Service

const styles = StyleSheet.create({
  title:{
    fontSize:20,
    color: 'black',
    fontWeight:'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  // Image:{
  //   width: 10,
  //   height: 10,
  // },
  welcome:{
    color: '#272735',
    fontSize: 30,
    fontWeight:'bold',
    textAlign: 'center',

  },
  profile:{
    backgroundColor:'#06659A',
    marginHorizontal:28,
    height:135,
    borderRadius:20,
    flexDirection:'row',
    
  },
  tNama: {
    color:'white',
    paddingLeft:14,
    fontSize:16,

  },
  tWelcome: {
    color:'white',
    paddingLeft:14,
    paddingTop:21,
    fontSize:16,

  },
  tNik:{
    color:'black',
    paddingLeft:14,
    paddingTop:35,
  },
  foto:{
    alignItems:'flex-end',
    flex:1,
    justifyContent:'center',
    paddingRight:16,
    
  },
  // fChat:{
  //   backgroundColor:'#2AB1E0',
  //   height:70,
  //   width:70,
  //   borderRadius:70,
  //   alignItems:'center',
  //   justifyContent:'center',
  //   marginLeft:28,
  //   marginTop:44,
  //   shadowColor: "#000",
  //   shadowOffset: {
	//     width: 0,
	//     height: 5,
  //   },
  //   shadowOpacity: 0.20,
  //   shadowRadius: 5.00,
  //   elevation: 5,

  // },
  // pHukum:{
  //   backgroundColor:'#5DDDD3',
  //   height:70,
  //   width:70,
  //   borderRadius:70,
  //   alignItems:'center',
  //   justifyContent:'center',
  //   marginLeft:20,
  //   marginTop:44,
  //   shadowColor: "#000",
  //   shadowOffset: {
	//     width: 0,
	//     height: 5,
  //   },
  //   shadowOpacity: 0.20,
  //   shadowRadius: 5.00,
  //   elevation: 5,
  // },
  // tKami:{
  //   backgroundColor:'#DB6D07',
  //   height:70,
  //   width:70,
  //   borderRadius:70,
  //   alignItems:'center',
  //   justifyContent:'center',
  //   marginLeft:20,
  //   marginRight:36,
  //   marginTop:44,
  //   shadowColor: "#000",
  //   shadowOffset: {
	//     width: 0,
	//     height: 5,
  //   },
  //   shadowOpacity: 0.20,
  //   shadowRadius: 5.00,
  //   elevation: 5,
  // },
  menu:{
    backgroundColor:'white',
    height:70,
    width:70,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    marginLeft:10,
    marginRight:10,
    marginTop:15,
    marginBottom:15,
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 5,
    },
    shadowOpacity: 0.20,
    shadowRadius: 5.00,
    elevation: 5,
  }
  
})