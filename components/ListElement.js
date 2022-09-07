import React from 'react'
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const ListElement = ({item, handleRemove, handleEdit}) =>{
    return(
        <TouchableOpacity style={style.container}>
            <Text style={style.text}>{item.texto}</Text>
            <View style={style.iconContainer}>
                <Icon
                    name="edit"
                    size={15}
                    color="#000"
                    style={style.icon}
                    onPress={()=>handleEdit(item.id, item.texto)} 
                />
            </View>
            <View style={style.iconContainer}>
                <Icon 
                    name="remove" 
                    size={15} 
                    color="#000" 
                    style={style.icon} 
                    onPress={()=>handleRemove(item.id)}
                />
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    image:{
        width:100,
        height:100,
        borderRadius:8
    },
    container:{
        backgroundColor:'#f5f5f5',
        paddingTop:6,
        paddingBottom:6,
        borderRadius:8,
        marginBottom:8,
        height:'auto',
        borderWidth:1,
        borderColor:'#ededed',
        margin:5,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        display:'flex'
    },
    text:{
        color:'#606060',
        width:'85%',
        padding:10
    },
    icon:{
        color:"#054f87"
    },
    iconContainer:{
        width:'7.5%',
        justifyContent:'center',
        alignItems:'center',
        paddingTop: 10,
        paddingBottom: 10
    }
})

export default ListElement