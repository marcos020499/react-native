import React, { Component } from 'react'
import { TextInput, Button, StyleSheet, Image, View, Text } from 'react-native';
import { withNavigation } from '@react-navigation/compat';
import {connect} from 'react-redux';
class index extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      name: ''
    }
  }
  handleName = (text) => {
    this.setState({ name: text })
  }
  render() {
    const { name} = this.state;
    return (
      <>   
      <View>
        <TextInput style={styles.input} value={name} name='name' autoCapitalize='none' placeholder='ingresa el nombre del producto'  onChangeText={this.handleName}/>
        <Button
                type="clear"
                title='Search' 
                onPress={() => this.props.navigation.navigate(`SearchFilter`, {name: this.state.name})} 
              />
        <Text style={styles.description}>Categories</Text>
        <Button
                style={styles.button}
                type="clear"
                title='computer' 
                onPress={() => this.props.navigation.navigate(`CategoriesFilter`, {categories: 'computer'})} 
              />
        <Button 
                style={styles.button}
                type="clear"
                title='tv' 
                onPress={() => this.props.navigation.navigate(`CategoriesFilter`, {categories: 'tv'})} 
              />
        <Button
                style={styles.button}
                type="clear"
                title='phone' 
                onPress={() => this.props.navigation.navigate(`CategoriesFilter`, {categories: 'phone'})} 
              />
        <Text style={styles.description}>Price</Text>
        <Button
                style={styles.button}
                type="clear"
                title='less than 2000' 
                onPress={() => this.props.navigation.navigate(`PriceFilter`, {price: 'price0'})} 
              />
        <Button
                style={styles.button}
                type="clear"
                title='more than 2000' 
                onPress={() => this.props.navigation.navigate(`PriceFilter`, {price: 'price2000'})} 
              />
        </View>
      </>
    )
  
  }
}
const styles = StyleSheet.create({
  input: {
      color: '#5a647d',
      fontWeight: 'bold',
      fontSize: 18,
      padding: 15,
      textAlign: 'justify',
  },
  button: {
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: 'center',
      fontSize: 20
  },
  description: {
      padding: 8,
      fontSize: 20,
      color: 'black', 
      textAlign: 'justify'
  }
});
export default withNavigation(index);
