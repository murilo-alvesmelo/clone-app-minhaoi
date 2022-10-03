import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Contas extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Screen C</Text>
            </View>
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