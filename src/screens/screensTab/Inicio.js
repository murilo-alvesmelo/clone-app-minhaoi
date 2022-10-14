import React, { Component } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import Contas from "../../components/ContasPagamentos";

export default class Inicio extends Component{
    render(){
        const DATA = [
            {
                id: '1',
                title: 'Oi Total',
                subtitle: '[63] 6363-6363',
                status: true
            }
        ]
        return(
            <View style={styles.container}>
                <FlatList
                    data={DATA}
                    renderItem={({item}) => <Contas {...DATA} {...this.props}/>}
                    keyExtractor={item => item.id}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})