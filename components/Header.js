import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = ({headerText}) =>{
    return(
        <View style={styles.header}>
            <Icon name="edit" size={30} color="#fff" />
            <Text style={styles.headerText}>{headerText}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:"#0074cc",
        top:15,
        padding:16,
        alignSelf: 'stretch',
        flexDirection:'row',
    },
    headerText:{
        color:'#fff',
        fontSize:20,
        marginLeft:8
    }
})


export default Header