import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { withNavigation } from '@react-navigation/compat';
import axios from 'axios'
import Icon from 'react-native-vector-icons/FontAwesome';

class productDetails extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      data: [],
      _id: '',
      name: '',
      image: '',
      available_quantity: '',
      price: '',
      description: '',
    }

  }
  componentDidMount(){
    const id = this.props.navigation.state.params.id;
    axios.get(`http://localhost:8080/api/productos/filtrar/${id}`)
      .then(res => {
        const {_id, name, images, available_quantity, price, description } = res.data
        this.setState({
          _id,
          name,
          images, 
          available_quantity,
          price,
          description,
        });

      })
      .catch(err => {
        toast.warn("No se puede mostrar la información - " + err)
      })
  }
    render() {
      const { name, images, available_quantity, price, description} = this.state;
      return (
            <View style={styles.container}>
            <Image source={{uri: `http://localhost:8080/${images}`}} style={{width: 275, height:275, marginLeft:50}}/>
            <Text style={styles.name} h2>
                {name}
            </Text>
            <Text style={styles.price} h4>
                ${price}
            </Text>
            <Text h6 style={styles.description}>
                {description}
            </Text>
            <Icon style={styles.shoopingCart} name="shopping-cart" size={30} color="#900" />
        </View>
        
      );
    }
}
const styles = StyleSheet.create({
  container:{
      marginTop: 30
  },
  name: {
      color: '#5a647d',
      fontWeight: 'bold',
      fontSize: 30,
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
  },
  shoopingCart: {
      top: -70,
      right: -330
  }
});
export default withNavigation(productDetails);