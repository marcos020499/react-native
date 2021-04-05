import React, { Component } from 'react'
import { TextInput, Button, StyleSheet, Image, View } from 'react-native';
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
        <Button
                type="clear"
                title='computer' 
                onPress={() => this.props.navigation.navigate(`CategoriesFilter`, {categories: 'computer'})} 
              />
        <Button
                type="clear"
                title='tv' 
                onPress={() => this.props.navigation.navigate(`CategoriesFilter`, {categories: 'tv'})} 
              />
        <Button
                type="clear"
                title='phone' 
                onPress={() => this.props.navigation.navigate(`CategoriesFilter`, {categories: 'phone'})} 
              />
        </View>
      </>
    )
  
  }
}

export default withNavigation(index);
