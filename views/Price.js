import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import PriceFilter from '../components/priceFilter'

class Details extends React.Component {
    render() {
      return (
        <View>
          <PriceFilter/>
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
export default Details;