import React from 'react';
import { View, Text, Button, StyleSheet, Modal, Pressable, TextInput } from 'react-native';
import { withNavigation } from '@react-navigation/compat';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios'
import  {connect} from  'react-native-redux'

class NavBar extends React.Component {
  state = {
    modalVisible: false,
    modalVisible1: false,
    modalVisible2: false,
    user: '',
    password: '',
    name: '',
    secondName: '',
    city: '',
  };
  handleUser = (text) => {
    this.setState({ user: text })
  }
  handlePassword = (text) => {
    this.setState({ password: text })
  }
  handleName = (text) => {
    this.setState({ name: text })
  }
  handleSeconName = (text) => {
    this.setState({ secondName: text })
  }
  handleCity = (text) => {
    this.setState({ city: text })
  }
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }
  setModalVisible1 = (visible) => {
    this.setState({ modalVisible1: visible });
  }
  setModalVisible2 = (visible) => {
    this.setState({ modalVisible2: visible });
  }
  closeModal=() => this.setModalVisible(false)
  closeModal1=() => this.setModalVisible1(false)
  closeModal2=() => this.setModalVisible2(false)
  onSubmit = (e) => {
    const _this = this;
    const { user, password } = this.state;
    axios.post('http://localhost:8080/api/usuarios/login', { user, password })
       .then(() => {
        _this.props.navigation.navigate('Login', {name: user})

       })
       .catch(err => {
          if (err.response && err.response.status === 404) {
             return alert("Credenciales inválidas")
          }
      });
  }
  onSubmitAdmin = (e) => {
    const _this = this;
    const { user, password } = this.state;
    axios.post('http://localhost:8080/api/usuarios/login', { user, password })
       .then(() => {
        _this.props.navigation.navigate('LoginAdmin', {name: user})

       })
       .catch(err => {
          if (err.response && err.response.status === 404) {
             return alert("Credenciales inválidas")
          }
      });
  }
  register = event => {
    const _this = this;
    const {user, password, name, secondName, city} = this.state
    axios.post(`http://localhost:8080/api/usuarios/crear`, {user, password, name, secondName, city})
      .then(() => {
        _this.props.navigation.navigate('Login', {name: user})
      })
    .catch(err => alert(`No se pudo crear el usuario`))
  }
  Combinate =()=>{
    this.closeModal(),
    this.onSubmit()
  }
  CombinateRegisterLogin =()=>{
    this.closeModal1(),
    this.register()
  }
  CombinateRegister=()=>{
    this.closeModal()
    this.setModalVisible1(true)
  }
  CombinateAdmin =()=>{
    this.closeModal(),
    this.setModalVisible2(true)
  }
  CombinateAdminLogin =()=>{
    this.closeModal2(),
    this.onSubmitAdmin()
  }
  
    render() {
      const { modalVisible, modalVisible1, modalVisible2, user, password, name, secondName, city, input }= this.state;
      return (

        <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            this.setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <Icon name="times-circle" size={30} color="#900" onPress={() => this.setModalVisible(false)} style={{position: 'relative', right: '-20%', paddingBottom: 25}}/>
              <TextInput style={{textTransform: 'lowercase', fontSize: 15, paddingBottom: 10}} autoCapitalize='none' placeholder='ingresa tu usuario' value={user} name='user' onChangeText={this.handleUser}/>
              <TextInput style={{textTransform: 'lowercase', fontSize: 15, paddingBottom: 10}} autoCapitalize='none' placeholder='ingresa tu contrase;a' value={password} name='password' onChangeText={this.handlePassword}/>
              <Text style={{color: 'blue'}} onPress={() => this.props.navigation.navigate(`Phone`)}>Olvidaste tu contraseña?</Text>
              <Text style={{fontSize: 15, color: 'blue'}} onPress={() => this.CombinateRegister()}>Registrate</Text>
              <Button
                type="clear"
                title='Submit'
                onPress={() => this.Combinate()} 
                
              />
              <Text style={{fontSize: 15, color: 'blue', right: -30, top: 35}} onPress={() => this.CombinateAdmin()}>Eres administrador?</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible2}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            this.setModalVisible2(!modalVisible2);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <Icon name="times-circle" size={30} color="#900" onPress={() => this.setModalVisible2(false)} style={{position: 'relative', right: '-20%', paddingBottom: 25}}/>
              <TextInput style={{textTransform: 'lowercase', fontSize: 15, paddingBottom: 10}} autoCapitalize='none' placeholder='ingresa tu usuario' value={user} name='user' onChangeText={this.handleUser}/>
              <TextInput style={{textTransform: 'lowercase', fontSize: 15, paddingBottom: 10}} autoCapitalize='none' placeholder='ingresa tu contrase;a' value={password} name='password' onChangeText={this.handlePassword}/>
              <Button
                type="clear"
                title='Submit'
                onPress={() => this.CombinateAdminLogin()} 

              />
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setModalVisible2(!modalVisible2)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible1}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            this.setModalVisible(!modalVisible1);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <Icon name="times-circle" size={30} color="#900" onPress={() => this.setModalVisible(false)} style={{position: 'relative', right: '-20%', paddingBottom: 25}}/>
              <TextInput style={{textTransform: 'lowercase', fontSize: 15, paddingBottom: 10}} autoCapitalize='none' placeholder='ingresa tu usuario' value={user} name='user' onChangeText={this.handleUser}/>
              <TextInput style={{textTransform: 'lowercase', fontSize: 15, paddingBottom: 10}} autoCapitalize='none' placeholder='ingresa tu contrase;a' value={password} name='password' onChangeText={this.handlePassword}/>
              <TextInput style={{textTransform: 'lowercase', fontSize: 15, paddingBottom: 10}} autoCapitalize='none' placeholder='ingresa tu nombre' value={name} name='name' onChangeText={this.handleName}/>
              <TextInput style={{textTransform: 'lowercase', fontSize: 15, paddingBottom: 10}} autoCapitalize='none' placeholder='ingresa tu apellido' value={secondName} name='secondName' onChangeText={this.handleSeconName}/>
              <TextInput style={{textTransform: 'lowercase', fontSize: 15, paddingBottom: 10}} autoCapitalize='none' placeholder='ingresa tu ciudad' value={city} name='city' onChangeText={this.handleCity}/>
              <Button
                type="clear"
                title='Submit'
                onPress={() => this.CombinateRegisterLogin()} 
                
              />
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setModalVisible1(!modalVisible1)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable>
          <Icon name="user" size={30} color="#900" style={styles.user} onPress={() => this.setModalVisible(true)}/>
          <Icon name="search" size={30} color="#900" style={styles.search} onPress={() => this.props.navigation.navigate(`Search`)}/>
          <Icon name="car" size={28} color="#900" style={styles.cart} onPress={() => this.props.navigation.navigate(`Cart`)}/>
          <Text>{this.props.numberCart}</Text> 
        </Pressable>
      </View>
        
      );
    }
}
const styles = StyleSheet.create({
  row: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
  },
  col: {
      flex: 1,
  },
    centeredView: {
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },
    user:{
      zIndex: 2,
      right: -170
    },
    cart: {
      right: 170,
      top: -58
    },
    search: {
      right: -110,
      top: -28
    }
});


export default withNavigation(NavBar)