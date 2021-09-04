import React, { useState } from "react";
import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity, TextInput } from 'react-native';

export default function HomePage() {

  const [numero, setNumero] = useState(0)

  const [valorMaximo,setValorMaximo] = useState('10')

  function handleNumero() {
    const novo_numero = Math.floor(Math.random() * valorMaximo)+1;
    setNumero(novo_numero);
  }

  return (

    <SafeAreaView style={styles.container}>

      <Text style={styles.number}>{numero}</Text>

      <View style={styles.options}>

        <View style={{alignSelf:"stretch"}}>
          <Text style={{ fontSize: 20 }}>Valor Máximo</Text>
          <TextInput defaultValue={'10'} style={styles.input} keyboardType="decimal-pad" onChangeText={(val) => setValorMaximo(val)}></TextInput>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleNumero}>
          <Text style={{ color: "white", fontSize: 20, }}>Gerar Número</Text>
        </TouchableOpacity>

      </View>

    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal:40,
    alignItems: "center",
  },
  number: {
    fontSize: 50,
    marginBottom:50
  },
  options:{
    flexWrap:"wrap",
    alignSelf:"stretch",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
  },
  button: {
    padding:10,
    marginTop:50,
    justifyContent: "center",
    backgroundColor: "purple",
    borderRadius: 40,
    color: "#fff",
  },
  input: {
    backgroundColor: "#ddd",
    borderWidth: 2,
    borderColor: "#ccc",
    paddingVertical:5,
    paddingHorizontal:10,
    fontSize: 20,
    borderRadius: 10,
  }
});

