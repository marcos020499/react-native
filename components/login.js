import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { withNavigation } from '@react-navigation/compat';
import axios from 'axios'
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

class login extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      data: [],
      dataProduct: [],
      _id: '',
      name: '',
      password: '',
      city: ''
    }

  }
  componentDidMount(){
    const name = this.props.navigation.state.params.name;
    axios.get(`http://localhost:8080/api/usuarios/filtrarUser/${name}`)
      .then(res => {
        this.setState({
          data: res.data
        });
      })
      .catch(err => {
        toast.warn("No se puede mostrar la información - " + err)
      })
  }
  componentWillMount(){
    this.fetchData();
  }
  fetchData() {
      axios.get('http://localhost:8080/api/productos/listar') 
      .then(response => {
        this.setState({
          dataProduct: response.data.products
        })
      })
      .catch(err => console.log(err))
  }
    render() {
      const { data, dataProduct } = this.state;
      return (
        <View style={{marginTop: -60}}>
        {data.map((data, index) =>( 
        <Card>
        <Text style={{marginBottom: 10, marginTop: 20 }} h2>
            Bienvenido {data.name}
        </Text>
        <Text style={styles.price} h4>
            {data.user}
        </Text>
        <Text h6 style={styles.description}>
            {data.city}
        </Text>
        </Card>
        ))}
        {dataProduct.map((item, index) =>( 
            <Card>
            <Image source={{uri: `http://localhost:8080/${item.images}`}} style={{width: 170, height:170}}/>
            <Text style={{marginBottom: 10, marginTop: 20 }} h2>
                {item.name}
            </Text>
            <Text style={styles.price} h4>
                {item.price}
            </Text>
            <Text h6 style={styles.description}>
                {item.description}
            </Text>
            <Button
            type="clear"
            title='Buy now'
            onPress={() => this.props.navigation.navigate(`Details`,{id:item._id})} 
            />
            <Icon name="shopping-cart" size={30} color="#900" style={styles.shoopingCart} onPress={()=>this.props.AddCart(item)}/>
        </Card>
          ))}
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
function mapDispatchToProps(dispatch){
  return{
      AddCart:item=>dispatch(AddCart(item))
  }
}
export default (connect(null, mapDispatchToProps)(withNavigation(login)));
