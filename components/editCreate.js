import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { withNavigation } from '@react-navigation/compat';
import axios from 'axios'
import FileUpload from './utils'
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInput } from 'react-native-paper';

class editCreate extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      data: [],
      name: '',
      images: [],
      available_quantity: '',
      price: 0,
      description: '',
    }

  }
  handleName = (text) => {
    this.setState({ name: text })
  }
  handleDescription = (text) => {
    this.setState({ description: text })
  }
  handleImage = (text) => {
    this.setState({ images: text })
  }
  handlePrice = (text) => {
    this.setState({ price: Number })
  }
  handleAvailable = (text) => {
    this.setState({ available_quantity: text })
  }
  componentDidMount(){
    const id = this.props.navigation.state.params.id;
    
    axios.get('http://localhost:8080/api/productos/filtrar/'+id)
      .then(res => {
        const {name, description, price, available_quantity } = res.data
        this.setState({
          name,
          description,
          available_quantity,
          price,
          data: res.data 
        });

      })
      .catch(err => {
        alert("No se puede mostrar la información - " + err)
      })
  }
  fetchData=event =>{
    const id = this.props.navigation.state.params.id;
    const variables = {
      name: this.state.name,
      description: this.state.description,
      images: this.state.images,
      categories: this.state.categories,
      available_quantity: this.state.available_quantity,
      price: this.state.price
  }
      axios.post(`http://localhost:8080/api/productos/editar/${id}`, variables) 
      .then(() => {
            alert('editado exitosamente')
      })
      .catch(err => toast.warn(`No se pudo editar el producto`))
  }
  updateFiles = (newImages) => {
    this.setState({ images: newImages })
  }
    render() {
      const { name, description, price, available_quantity } = this.state;
      return (
        <View>
          <Text>Editar producto</Text>
          <TextInput placeholder='ingresa el nombre' value={name} name='name' onChangeText={this.handleName}/>
          <TextInput placeholder='ingresa la description' value={description} name='description' onChangeText={this.handleDescription}/>
          <TextInput placeholder='ingresa la cantidad' value={available_quantity} name='available_quantity' onChangeText={this.handleAvailable}/>
          <TextInput placeholder='ingresa el precio' value={price} name='price' onChangeText={this.handlePrice}/>
          <Button
                type="clear"
                title='Submit'
                onPress={() => this.fetchData()} 
                
              />
        </View>
        );
    }
}
const styles = StyleSheet.create({
  name: {
      color: '#5a647d',
      fontWeight: 'bold',
      fontSize: 32,
      textAlign: 'center',
      marginBottom: 10,
      marginTop: 20
  },
  price: {
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: 'center',
      fontSize: 20
  },
  description: {
      fontSize: 20,
      color: '#c1c4cd', 
      textAlign: 'center'
  }
});
export default withNavigation(editCreate);