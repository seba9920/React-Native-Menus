import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet} from 'react-native';
import Tab2 from './components/Tab2';
import Home from './components/Home';
import Personajes from './components/Personajes';
import { Icon } from 'react-native-elements';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


class stackN extends React.Component{
  render(){
    return (
      <Stack.Navigator screenOptions={ {headerStyle:{backgroundColor: '#f3627f'}} }>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Personajes" component={Personajes} options={ {title: 'Personajes',
              headerStyle:{backgroundColor: '#f3627f'}} }/>
        </Stack.Navigator>
    );
  }
}

export default class navegation extends React.Component{
  render(){
    return(
      <NavigationContainer>
        <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'stackN') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Tab2') {
            iconName = focused ? 'email' : 'email';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown:false,
      })} >
        <Tab.Screen name="stackN" component={stackN}/>
        <Tab.Screen name="Tab2" component={Tab2}/>
      </Tab.Navigator>

      </NavigationContainer>
    );
  }
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
