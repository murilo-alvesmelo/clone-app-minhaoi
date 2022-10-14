import { Link } from "@react-navigation/native";
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import CommonStyle from "../CommonStyle";

export default class Contas extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>CONTAS E PAGAMENTOS</Text>
                <View style={styles.item}>
                    <View style={[styles.icon, this.props[0].status == true ? {backgroundColor: CommonStyle.colors.green} : {backgroundColor: CommonStyle.colors.orange}]}>
                        {this.props[0].status === true 
                            ? <Icon name="check" color='#fff' size={20}/>
                            : <Icon name="zap-off" color='#fff' size={20}/>
                        }
                    </View>
                    <Text>{this.props[0].status == true ? 'Todas as contas em dia' : 'Contas pendentes'}</Text>
                </View>
                <View style={{borderBottomWidth: 0.5}}>
                    <Link
                        style={styles.link}
                        to={{screen: 'Produtos'}}>
                        Mais detalhes
                    </Link>
                </View>

                <Text style={styles.title}>MEUS PRODUTOS</Text>

                <View style={styles.containerProdutos}>
                    <View style={styles.descricao}>
                        <Icon name="maximize" color='#000' size={30}/>
                        <View style={{marginLeft: 10}}>
                            <Text style={styles.titleProduto}>{this.props[0].title}</Text>
                            <Text>{this.props[0].subtitle}</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={{justifyContent: 'center'}} onPress={() => this.props.navigation.navigate('Produtos')}>
                        <Icon name="chevron-right" color={CommonStyle.colors.green} size={25}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    title:{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1a1a1a',
        margin: 10,
        marginTop: 20,
    },
    item: {
        borderWidth: 0.5,
        flexDirection: "row",
        alignItems:'center',
    },
    icon:{
        width: 25,
        height: 25,
        borderRadius: 12,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    link:{
        borderTopWidth: 0.5,
        color: CommonStyle.colors.green,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 20,
    },
    containerProdutos:{
        borderWidth: 0.5,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    descricao:{
        margin: 10,
        flexDirection: "row",
        alignItems: 'center',
    },
    titleProduto:{
        color: CommonStyle.colors.green,
        fontWeight: "bold"
    }
})