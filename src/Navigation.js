import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'
import ScreenA from './screens/ScreenA';
import ScreenB from './screens/ScreenB';
import ScreenC from './screens/ScreenC';
import ScreenD from './screens/ScreenD';
import ScreenE from './screens/ScreenE';
const Tab = createBottomTabNavigator();

export default class Navigator extends Component {
    render(){
        return (
            <NavigationContainer>
                <Tab.Navigator
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
                    <Tab.Screen name='Início' component={ScreenA}/>
                    <Tab.Screen name='Produtos' component={ScreenB}/>
                    <Tab.Screen name='Contas' component={ScreenC}/>
                    <Tab.Screen name='Reparo' component={ScreenD}/>
                    <Tab.Screen name='Mais' component={ScreenE}/>
                </Tab.Navigator>
            </NavigationContainer>
          );
    }  
}