import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { withNavigation } from '@react-navigation/compat';
import Axios1 from '../components/axios'
import NavBar1 from '../components/navbar copy'
import NavBar from '../components/navbar'
class Home extends React.Component {
    render() {
      return (
        <View>
          <NavBar/>
          <NavBar1/>
          <Axios1/>
        </View>
        
      );
    }
}

export default withNavigation(Home);