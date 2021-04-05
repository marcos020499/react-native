import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import SearchFilter from '../components/searchFilter'

class Search extends React.Component {
    render() {
      return (
        <View>
          <SearchFilter/>
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
export default Search;