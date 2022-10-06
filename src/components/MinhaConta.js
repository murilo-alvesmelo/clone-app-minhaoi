import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import  Icon  from "react-native-vector-icons/FontAwesome5";
import CommonStyle from "../CommonStyle";

export default class MinhaConta extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>MAIS SOBRE MINHAS CONTAS</Text>
                <TouchableOpacity style={styles.box}>
                    <View style={styles.icon}>
                        <Icon name="money-check-alt" color={ CommonStyle.colors.green} size={20}/>
                    </View>
                    <Text>Colocar em debito automatico</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box}>
                    <View style={styles.icon}>
                        <Icon name="file-invoice-dollar" color={ CommonStyle.colors.green} size={25}/>
                    </View>
                    <Text>Conta digital: Ativado</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box}>
                    <View style={styles.icon}>
                        <Icon name="undo-alt" color={ CommonStyle.colors.green} size={20}/>
                    </View>
                    <Text>Histórico de contas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box}>
                    <View style={styles.icon}>
                        <Icon name="unlock" color={ CommonStyle.colors.green} size={20}/>
                    </View>
                    <Text>Desbloqueio de serviço</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box}>
                    <View style={styles.icon}>
                        <Icon name="comment-dollar" color={ CommonStyle.colors.green} size={20}/>
                    </View>
                    <Text>Discordo do valor da minha conta</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box}>
                    <View style={styles.icon}>
                        <Icon name="check" color={ CommonStyle.colors.green} size={20}/>
                    </View>
                    <Text>Negociar dívidas</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        margin: 5
    },
    box: {
        margin: 10,
        flexDirection: "row",
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 0.5
    },
    icon: {
        margin: 5,
        width: 25,
        height: 25,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    }
})