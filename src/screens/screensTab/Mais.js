import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import MaisInfo from "../../components/MaisInfo";

export default class Mais extends Component{
    render(){
        const DATA = [{
            id: 1
        }]
        return(
            <FlatList
                data={DATA}
                keyExtractor={item => item.id}
                renderItem={({item}) => <MaisInfo/>}
            />
        )
    }
}