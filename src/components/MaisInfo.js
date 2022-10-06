import React, { Component }from 'react'
import {View, 
    Text, 
    StyleSheet, 
    ImageBackground, 
    Platform,
    TouchableOpacity} from 'react-native'
import  Icon from 'react-native-vector-icons/FontAwesome5'
import OiImagem from '../assets/oi.png'
import CommonStyle from '../CommonStyle'
export default class MaisInfo extends Component{
    state={
        userName: 'MURILO',
        cpf: '000.000.000-00'
    }

    render(){
       return(
            <View>
                <View style={styles.perfil}>
                    <View style={styles.cpf}>
                        <ImageBackground source={OiImagem} style={styles.imagem}/>
                        <Text style={styles.title}>{this.state.cpf}</Text>
                    </View>
                    <View style={styles.userIcon}>
                        <Icon name='user' color={CommonStyle.colors.green} size={25}/>
                        <Text style={styles.userName}>{this.state.userName}</Text>
                    </View>
                </View>
                <View style={styles.menu}>
                    <TouchableOpacity style={styles.box}>
                        <View style={styles.icon}>
                            <Icon name="dollar-sign" color={ CommonStyle.colors.green} size={20}/>
                        </View>
                        <Text style={styles.descricao}>Fazer recarga</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.box}>
                        <View style={styles.icon}>
                            <Icon name="wallet" color={ CommonStyle.colors.green} size={20}/>
                        </View>
                        <Text style={styles.descricao}>Envio de documentos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.box}>
                        <View style={styles.icon}>
                            <Icon name="question-circle" color={ CommonStyle.colors.green} size={20}/>
                        </View>
                        <Text style={styles.descricao}>Central de ajuda</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.box}>
                        <View style={styles.icon}>
                            <Icon name="check" color={ CommonStyle.colors.green} size={20}/>
                        </View>
                        <Text style={styles.descricao}>Negociar dívidas</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.box}>
                        <View style={styles.icon}>
                            <Icon name="star" color={ CommonStyle.colors.green} size={20}/>
                        </View>
                        <Text style={styles.descricao}>Benefícios e vantagens</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.box}>
                        <View style={styles.icon}>
                            <Icon name="user-shield" color={ CommonStyle.colors.green} size={20}/>
                        </View>
                        <Text style={styles.descricao}>Dados de acesso</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.box}>
                        <View style={styles.icon}>
                            <Icon name="cog" color={ CommonStyle.colors.green} size={20}/>
                        </View>
                        <Text style={styles.descricao}>Configurações</Text>
                    </TouchableOpacity>
                </View>
            </View>
       )
    }
}

const styles = StyleSheet.create({
    perfil:{
        height: '25%',
        backgroundColor: '#fff',
        marginBottom: 10,
    },
    cpf:{
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderColor: 'gray'
    },
    userIcon:{
        flexDirection: 'row',
        margin: 10,
        alignItems: 'center',

    },
    userName:{
        marginLeft: 20,
        fontSize: 14,
        color: 'gray'
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
    },
    menu:{
        backgroundColor: '#fff',
    },
    imagem:{
        margin: 10,
        width: 70,
        height: 60
    },
    box: {
        flexDirection: "row",
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 0.5,
        borderColor: 'gray'
    },
    icon: {
        margin: 5,
        width: 25,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    descricao:{
        marginLeft: 20,
        fontSize: 16
    }
})