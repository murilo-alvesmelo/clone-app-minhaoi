import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class ScreenB extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Screen B</Text>
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