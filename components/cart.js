import React, { Component } from 'react'
import { connect } from "react-redux";
import { View, Text, Button, StyleSheet, Modal, Pressable, TextInput, Image } from 'react-native';
import {IncreaseQuantity,DecreaseQuantity,DeleteCart} from '../redux/actions';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { DataTable } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
function Cart({items,IncreaseQuantity,DecreaseQuantity,DeleteCart}){
  //  console.log(items)
    let ListCart = [];
    let TotalCart=0;
    Object.keys(items.Carts).forEach(function(item){
        TotalCart+=items.Carts[item].quantity * items.Carts[item].price;
        ListCart.push(items.Carts[item]);
    });
    function TotalPrice(price,tonggia){
        return Number(price * tonggia).toLocaleString('en-US');
    }
    
    
    return(
        <View>
            <DataTable>
                <DataTable.Header style={styles.title}>
                        <DataTable.Title></DataTable.Title>
                        <DataTable.Title style={styles.name}>Name</DataTable.Title>
                        <DataTable.Title style={styles.image}>Image</DataTable.Title>
                        <DataTable.Title>Price</DataTable.Title>
                        <DataTable.Title>Quantity</DataTable.Title>
                        <DataTable.Title>Total Price</DataTable.Title>
                </DataTable.Header>
                {
                    ListCart.map((item,key)=>{
                        return(
                            <DataTable.Row style={styles.row} key={key}>    
                            <DataTable.Cell style={styles.delete}><Icon name="times-circle" size={30} color="#900" onPress={()=>DeleteCart(key)}/></DataTable.Cell>
                            <DataTable.Cell style={styles.name}>{item.name}</DataTable.Cell>
                            <DataTable.Cell style={styles.image}><Image source={{uri: `http://localhost:8080/${item.images}`}} style={{width: 60, height:45}}/></DataTable.Cell>
                            <DataTable.Cell>{item.price} $</DataTable.Cell>
                            <DataTable.Cell>
                                    <Text className="btn btn-primary"  onPress={()=>DecreaseQuantity(key)}>-</Text>
                                    <Text className="btn btn-info">{item.quantity}</Text>
                                    <Text className="btn btn-primary" onPress={()=>IncreaseQuantity(key)}>+</Text>
                            </DataTable.Cell>
                            <DataTable.Cell>{ TotalPrice(item.price,item.quantity)} $</DataTable.Cell>
                        </DataTable.Row>
                        )
                    })
                        
                }
                <DataTable.Row>
                    <DataTable.Cell colSpan="5">Total Carts</DataTable.Cell>
                    <DataTable.Cell>{Number(TotalCart).toLocaleString('en-US')} $</DataTable.Cell>
                </DataTable.Row>
              
            </DataTable>
        </View>
    )
}
const mapStateToProps = state =>{
    return{
        items:state._todoProduct
    }
}
const styles = StyleSheet.create({
    title:{
        fontWeight: 'bold',
        fontSize: 12
    },
    delete: {
        flex: 1,
        justifyContent: 'flex-start',
        right: 20,
    },
    name: {
        flex: 1,
        right: 30,
        justifyContent: 'flex-start',
    },
    image: {
        flex: 1,
        right: 20,
        justifyContent: 'flex-start',
    },
    row: {
        padding:5,
        margin: 20
    }
  });

export default connect(mapStateToProps,{IncreaseQuantity,DecreaseQuantity,DeleteCart})(Cart)
