import React, { Component } from 'react'
import { Text, StyleSheet, Image, View } from 'react-native';
import axios from 'axios';
import { Card, Button } from 'react-native-elements';
import {AddCart} from '../redux/actions'
import {connect} from 'react-redux';
import { withNavigation } from '@react-navigation/compat';
import Icon from 'react-native-vector-icons/FontAwesome';
class index extends Component {
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
      categories: '',
    }

  }
  componentDidMount(){
    const categories = this.props.navigation.state.params.categories;
    axios.get(`http://localhost:8080/api/productos/categories/${categories}`)
      .then(res => {
        this.setState({
          data: res.data
        });
      })
      .catch(err => {
        toast.warn("No se puede mostrar la información - " + err)
      })
  }
  render() {
    const { data} = this.state;
    return (

      <>   
        <View style={{marginTop: -40}}>
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
      </>
    )
  
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
export default (connect(null, mapDispatchToProps)(withNavigation(index)));
