import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import OiProduto from "../components/OiProduto";

export default class Produtos extends Component{

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
                    renderItem={({item}) => <OiProduto {...DATA}/>}
                    keyExtractor={item => item.id}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})