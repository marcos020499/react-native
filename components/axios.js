import React from 'react';
import { Text, StyleSheet, Image, View } from 'react-native';
import { Card, Button } from 'react-native-elements';
import axios from 'axios';
import {connect} from 'react-redux';
import { withNavigation } from '@react-navigation/compat';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from '../views/Home';
import { AddCart } from '../redux/actions'


class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          data: []
        }
      }
      
      componentDidMount(){
        this.fetchData();
      }
      fetchData() {
          axios.get('http://localhost:8080/api/productos/listar') 
          .then(response => {
            this.setState({
              data: response.data.products
            })
          })
          .catch(err => console.log(err))
      }
    render() {
        const { data } = this.state;
      return (
        <View style={{marginTop: -70}}>
            {data.map((item, index) =>( 
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
        fontSize: 30
    },
    price: {
        fontWeight: 'bold',
        marginBottom: 10
    },
    description: {
        fontSize: 10,
        color: '#c1c4cd'
    },
    shoopingCart: {
      right: -300,
      top: -35,
      margin: -15,
    }
});
function mapDispatchToProps(dispatch){
  return{
      AddCart:item=>dispatch(AddCart(item))
   
  }
}
export default (connect(null, mapDispatchToProps)(withNavigation(Product)));
