import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, TextInput } from 'react-native';
import Header from "./components/Header"
import ListElement from './components/ListElement';
import {useState, useEffect} from "react"
import Icon from 'react-native-vector-icons/FontAwesome';
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid'
import ilustrationAdd from './assets/ilustrationAdd.png'

export default function App() {
  const [data, setData] = useState([])
  const [inputData, setInputData] = useState('')

  const handleAdd = () =>{
    const newElement = {
      id:uuid(),
      texto:inputData
    }
    setData([newElement,...data])
    setInputData('')
  }

  const handleRemove = (item) =>{
    const newList = data.filter((el)=>{
      return el.id !== item
    })
    setData(newList)
  }

  const handleEdit = (id, texto) =>{
    handleRemove(id)
    setInputData(texto)
  }

  const handleText = (textValue) =>{
    setInputData(textValue)
  }
  
  return (
    <View style={styles.container}>
      <Header headerText={'Mis tareas de hoy :'}/>
      <View style={styles.mainContainer}>
      <TextInput style={styles.textInput} placeholder="Escribe una tarea" onChangeText={handleText} value={inputData}/>
      <TouchableOpacity style={styles.button} onPress={()=>{inputData.length > 0 ? handleAdd() : undefined}}>
        <Icon name="plus" size={15} color="#fff"/>
        <Text style={styles.buttonText}>Añadir tarea</Text>
      </TouchableOpacity>
      <FlatList 
        data={data}
        renderItem={({item})=><ListElement item={item} handleRemove={handleRemove} handleEdit={handleEdit}/>} 
        contentContainerStyle={styles.listContainer}
      />
      </View>
      {data.length === 0 ? 
        <View style={styles.defaultMessage}>
            <Image style={styles.defaultImage} source={ilustrationAdd}/>
            <Text style={styles.defaultText}>¿Aún no tienes tareas ?</Text>
            <Text style={styles.defaultText}>¡Comienza añadiendo una!</Text>
        </View>
        : null
      }
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer:{
    padding:16,
    marginTop:6,
    marginBottom:6
  },
  textInput:{
    borderWidth:1,
    borderColor:'#dcdcdc',
    padding:6,
    paddingLeft:10,
    borderRadius:4,
    marginBottom:16,
    marginTop:16,
    color:'#606060'
  },
  container: {
    backgroundColor: '#fff',
  },
  listContainer:{
    alignSelf:"stretch"
  },
  button:{
    alignSelf:'stretch',
    backgroundColor:'#0074cc',
    padding:8,
    borderRadius:8,
    marginTop:6,
    marginBottom:6,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  buttonText:{
    color:"#fff",
    textAlign:'center',
    fontSize:17,
    marginLeft:5
  },
  defaultMessage:{
    color:'#606060',
    textAlign:'center',
    justifyContent:'center',
    alignItems:'center',
    marginTop:40
  },
  defaultText:{
    color:'#606060',
    textAlign:'center',
  },
  defaultImage:{
    width:200,
    height:150,
    justifyContent:'center', 
    marginBottom:10
  }
});
