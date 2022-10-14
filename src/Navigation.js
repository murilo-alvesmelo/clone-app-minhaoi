import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'
import Inicio from './screens/screensTab/Inicio';
import Produtos from './screens/screensTab/Produtos';
import Contas from './screens/screensTab/Contas';
import Reparo from './screens/screensTab/Reparo';
import Mais from './screens/screensTab/Mais';
import DebitoAuto from './screens/DebitoAutomatico';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default class Navigator extends Component {
    render(){
        return (
            <NavigationContainer>
                <Tab.Navigator
                    initialRouteName='Mais'
                    screenOptions={({ route })=>({
                        headerStyle:{
                            backgroundColor: '#282828',
                        },
                        headerTitleStyle:{
                            color: '#fff',
                        },
                        tabBarStyle:{
                            backgroundColor: '#282828',
                        },
                        tabBarIcon:({focused, color, size})=>{
                            let iconName;

                            if(route.name === 'Início'){
                                iconName = 'home'
                            }else if(route.name === 'Produtos'){
                                iconName = 'grid'
                            }else if(route.name === 'Contas'){
                                iconName = 'file'
                            }else if(route.name === 'Reparo'){
                                iconName = 'tool'
                            }else if(route.name === 'Mais'){
                                iconName = 'more-horizontal'
                            }

                            return <Icon name={iconName} size={size} color={color}/>;
                        },
                        tabBarActiveTintColor: 'green',
                        tabBarInactiveTintColor: 'gray',
                    })}
                >
                    <Tab.Screen name='Início' component={Inicio}/>
                    <Tab.Screen name='Produtos' component={Produtos}/>
                    <Tab.Screen name='Contas' component={Contas}/>
                    <Tab.Screen name='Reparo' component={Reparo}/>
                    <Tab.Screen name='Mais' component={Mais}/>
                </Tab.Navigator>
            </NavigationContainer>
          );
    }  
}