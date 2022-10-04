import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import CommonStyle from "../CommonStyle";

export default class OiProduto extends Component{
    render(){
        return(
            <View>
                <View style={styles.item}>
                    <Text style={styles.title}>{this.props[0].title}</Text>
                    <Text style={styles.subtitle}>{this.props[0].subtitle}</Text>
                    <Text style={styles.status}>{this.props[0].status == true ? 'Todas as contas em dia' : 'A contas atrasadas'}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        borderTopWidth: 1,
        borderColor: 'gray',
        margin: 10,
        borderBottomWidth: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        color: CommonStyle.colors.green,
    },
    subtitle:{
        borderColor: 'gray',
        marginBottom: 10,
        borderBottomWidth: 1,
    },
    status:{
        color: 'gray',
        marginTop: 20,
        marginBottom: 20 
    }
})