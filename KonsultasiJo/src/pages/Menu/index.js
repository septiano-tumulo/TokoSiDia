import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { Gap } from '../../components';
import { Products, Services, IP, Sduadua, ROG } from '../../assests';

const Menu = ({navigation}) => {
  return (
    <View style={{flex:1,backgroundColor:'white'}}>          

    <View style={{flexDirection:'row', backgroundColor:'#272735', justifyContent:'center'}}>
      <TouchableOpacity activeOpacity={0.7} onPress={()=>navigation.navigate('Product')}>
        <View style={styles.menu}>
          <Icon name="cart" size={45} color="#272735" />
          <Text>Products</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.7} onPress={()=>navigation.navigate('Service')}>
        <View style={styles.menu}>
        <Icon name="hammer" size={45} color="#272735" />
        <Text>Services</Text>
        </View>
      </TouchableOpacity>            
      
      <TouchableOpacity activeOpacity={0.7} onPress={()=>navigation.navigate('AboutUs')}>
        <View style={styles.menu}>
        <Icon name="people" size={45} color="#272735" />
        <Text>AboutUs</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.7} onPress={()=>navigation.navigate('SignIn')}>
        <View style={styles.menu}>
          <Icon name="log-out" size={45} color="red" />
          <Text>Log Out</Text>
        </View>
      </TouchableOpacity>
    </View>

    <Gap height={40}/>
    
    <ScrollView showsVerticalScrollIndicator={false}>
    
      <Text style={styles.welcome}>Selamat Datang{"\n"}di TokoSiDia</Text>

      <View>                        
        <View style={{flexDirection:'row', marginTop:20}}>
          <TouchableOpacity activeOpacity={0.7} onPress={()=>navigation.navigate('Product')}>
            <Products style={styles.Image} /> 
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.7} onPress={()=>navigation.navigate('Service')}>
          <Services style={styles.Image} />    
          </TouchableOpacity>  
        </View>        

      {/* PRODUCTS */}
        <Text style={styles.title}>Products</Text>
          <View style={{flexDirection:'row'}}>
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

      {/* SERVICES */}
        <Text style={styles.title}>Services</Text>
          <View style={{flexDirection:'row'}}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View>
                <ROG />
                <Text style={{textAlign:'center'}}>Samsung A51</Text>
              </View>
              
              <View>
                <IP />     
                <Text style={{textAlign:'center'}}>Samsung A51</Text>
              </View>

              <View>                           
                <Sduadua />
                <Text style={{textAlign:'center'}}>Samsung A51</Text>
              </View>
            </ScrollView>
          </View>
          
      </View>

    </ScrollView>


    </View>
  )
}

export default Menu

const styles = StyleSheet.create({
  title:{
    marginLeft: 10,
    fontSize:20,
    color: 'black',
    marginBottom: 3,
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