import AppNavigator from './AppNavigator';
import store from './redux/stores'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux'
import Home from './views/Home'
import Details from './views/Details'
import Login from './views/Login'
import LoginAdmin from './views/LoginAdmin'
import Cart from './components/cart'
import PhoneVerification from './components/firebase'
import Search from './components/search'
import SearchFilter from './views/Search'
import CategoriesFilter from './views/Categories'
import Categories from './components/categories';
import PriceFilter from './views/Price'
import EditCreate from './views/EditCreate'
const Appstack = createStackNavigator();

export default class App extends React.Component {
 render() {
   return (
     <Provider store={store}>  
      <NavigationContainer>
        <Appstack.Navigator initialRouteName="Home">
          <Appstack.Screen name='Home' component={Home}/>
          <Appstack.Screen name='Details' component={Details}/>
          <Appstack.Screen name='Login' component={Login}/>
          <Appstack.Screen name='LoginAdmin' component={LoginAdmin}/>
          <Appstack.Screen name='Cart' component={Cart}/>
          <Appstack.Screen name='Search' component={Search}/>
          <Appstack.Screen name='EditCreate' component={EditCreate}/>
          <Appstack.Screen name='SearchFilter' component={SearchFilter}/>
          <Appstack.Screen name='Phone' component={PhoneVerification}/>
          <Appstack.Screen name='Categories' component={Categories}/>
          <Appstack.Screen name='CategoriesFilter' component={CategoriesFilter}/>
          <Appstack.Screen name='PriceFilter' component={PriceFilter}/>
        </Appstack.Navigator>
      </NavigationContainer>     
     </Provider>    
   )
 }
}