import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class ScreenD extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Screen D</Text>
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