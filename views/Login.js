import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import Login1 from '../components/login'
import axios from 'axios'
import Nav from '../components/navbar'
import Icon from 'react-native-vector-icons/FontAwesome';
import NavBar1 from '../components/navbar copy'
import NavBar from '../components/navbar'

class Login extends React.Component {
    render() {
      return (
        <View>
          <NavBar/>
          <NavBar1/>
          <Login1/>
      </View>
        
      );
    }
}
export default withNavigation(Login);