import React from 'react';
import { Text, StyleSheet, Image } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';


class Product extends React.Component {
    render() {
        const { imagen, price, title, description } = this.props;
      return (
        <Card>
            <Image source={imagen} style={{width: 170, height:170}}/>
            <Text style={{marginBottom: 10, marginTop: 20 }} h2>
                {title}
            </Text>
            <Text style={styles.price} h4>
                {price}
            </Text>
            <Text h6 style={styles.description}>
                {description}
            </Text>
            <Button
            type="clear"
            title='Buy now'
            onPress={() => this.props.navigation.navigate(`Details`, {data: data._id})} 
            />
            <Icon name="shopping-cart" size={30} color="#900" />
        </Card>
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
    }
});

export default withNavigation(Product);