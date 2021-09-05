import React from 'react'
import { Text, SafeAreaView, View, StyleSheet, Image, TouchableOpacity, Linking, Button } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import foto from '../../assets/foto.jpg'
import LinkIcon from '../../common/LinkIcon';
import Card from '../../common/Card';
export default function Curriculo(props) {

  return (
    <SafeAreaView style={style.page}>
      <View style={style.header}>
        <Image source={foto} style={style.foto} />
        <Text style={style.nome}>Diego Lopes</Text>
        <Text style={style.funcao}>Dev</Text>
        <View style={style.redes}>
          <LinkIcon url='https://github.com/deigo-lps'>
            <Icon name="github" size={40} color={"black"} />
          </LinkIcon>
          <LinkIcon url='https://www.facebook.com/profile.php?id=100038728843122'>
            <Icon name="facebook" size={40} color={"black"} />
          </LinkIcon>
          <LinkIcon url='https://www.linkedin.com/in/diego-lopes-8644a5208/'>
            <Icon name="linkedin" size={40} color={"black"} />
          </LinkIcon>
          <TouchableOpacity>
            <Icon name="calculator" size={40} color={"black"} onPress={() =>props.navigation.navigate('Gerador', { name: 'Jane' })}/>
          </TouchableOpacity>
        </View>
      </View>
      <Card title="Experiência Profissional">
        <Text style={style.card_content_text}>ECCJR</Text>
        <Text style={style.card_content_text}>ECCJR</Text>
        <Text style={style.card_content_text}>ECCJR</Text>
      </Card>
      <Card title="Formação Acadêmica">
        <Text style={style.card_content_text}>UNESP/IBILCE</Text>
        <Text style={style.card_content_text}>UNESP/IBILCE</Text>
        <Text style={style.card_content_text}>UNESP/IBILCE</Text>
      </Card>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({

  page: {
    flex:1,
    paddingHorizontal: 15,
    justifyContent:'center',
    backgroundColor: '#E7E7E7'
  },
  header: {
    alignItems: "center",
  },
  foto: {
    width: 200,
    height: 200,
    borderRadius: 500,
  },
  nome: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  funcao: {
    fontSize: 17,
    color: '#8f8f8f',
    marginBottom: 20,
  },
  redes: {
    width: "70%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  card_content_text: {
    color: "#8f8f8f",
    fontSize: 15,
    marginBottom: 8,
  }
})