import React, { Component } from 'react'
import { connect } from "react-redux";
import { View, Text, Button, StyleSheet, Modal, Pressable, TextInput, Image } from 'react-native';
import {AddCart} from '../redux/actions';

class Cart extends React.Component{
 render(){
    return(
        <View>
           <Text style={styles.numberCart}>{this.props.numberCart}</Text> 
        </View>
    )
    }
}
const mapStateToProps = state =>{
    return{
      numberCart: state._todoProduct.numberCart
    }
}
const styles = StyleSheet.create({
    numberCart: {
        paddingRight: 0,
        marginRight: 0,
        color: '#900',
        position: 'relative',
        fontSize: 20,
        top: -65,
        right: -60,
        justifyContent: 'center',
        margin: -10,
        padding: 0
    },})

export default connect(mapStateToProps)(Cart)
