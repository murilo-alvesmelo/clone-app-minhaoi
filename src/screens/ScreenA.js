import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default class ScreenA extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Screen A</Text>
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