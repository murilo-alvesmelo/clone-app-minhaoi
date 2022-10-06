import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import MinhaConta from "../components/MinhaConta";

export default class Contas extends Component{
    render(){
        const DATA = [
            {
                id: 1,
            }
        ]
        return(
            <FlatList
                data={DATA}
                keyExtractor={item => item.id}
                renderItem={({item}) => <MinhaConta {...DATA}/>}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})