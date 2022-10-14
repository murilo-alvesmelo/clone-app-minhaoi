import React, { Component }from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import Icon from "react-native-vector-icons/Feather";
import CommonStyle from '../CommonStyle'

export default class DebitoAuto extends Component{
    render(){
       return(
           <View>
                <Text style={styles.titleContainer}>Qual produto deseja colocar em débito automático?</Text>
                <View style={styles.containerProdutos}>
                    <View style={styles.descricao}>
                        <Icon name="maximize" color='#000' size={30}/>
                        <View style={{marginLeft: 10}}>
                            <Text style={styles.titleProduto}>Oi total</Text>
                            <Text>[63] 6363-6363</Text>
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
    titleContainer:{
        fontSize: 14,
        fontWeight: 'normal',
        padding: 15
    },
    containerProdutos:{
        backgroundColor: '#fff',
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