import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

export default function App() {
const[identificacion, setIdentificacion] = useState('')
const[nombres, setNombres] = useState('')
const[asignatura, setAsigmatura] = useState('')
const[nota1, setNota1] = useState('');
const[nota2, setNota2] = useState('');
const[nota3, setNota3] = useState('');
const[resultado, setResultado] = useState('');
const[esValido, setEsValido] = useState('');
const[mensaje, setMensaje] = useState('');

let notas = []
let calcular = () =>{
  if(nota1 != "" && nota2 != "" && nota3 != "" && identificacion != "" && nombres != "" && asignatura != ""){
    if(parseFloat(nota1) < 0 || parseFloat(nota1) > 5 && parseFloat(nota2) < 0 || parseFloat(nota2) > 5 && parseFloat(nota3) < 0 || parseFloat(nota3) > 5){
      setEsValido(false);
      setMensaje('Se deben ingresar valores entre 0 y 5')
    }
    setEsValido(true);
    setMensaje('')
    let resultado = 0; 

    resultado = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) /3
    
    if(resultado < 2){
      setResultado(resultado);
      setMensaje('Reprueba');
      setEsValido(false)
    }else if(resultado >= 2 && resultado < 3){
      setResultado(resultado);
      setMensaje('Habilita');
      setEsValido(false)
    }else if(resultado >= 3 && resultado <= 5){
      setResultado(resultado);
      setMensaje('Aprueba');
      notas.push(identificacion, nombres , asignatura, nota1, nota2, nota3, resultado)
    }else{
      setEsValido(false)
      setResultado(0);
      setMensaje('Las notas ingresadas no son válidas. Debe ingresar notas entre 0 y 5')
    }
  }else{
    setEsValido(false)
    setMensaje('Se deben ingresar todos los campos')
  }
}
let limpiar = () =>{
  setIdentificacion('')
  setNombres('')
  setAsigmatura('')
  setNota1('')
  setNota2('')
  setNota3('')
  setResultado(0)
  setMensaje('')
}

let buscar = () =>{
  let ident = identificacion
}

  return (
    <View style={styles.container}>
      <View style={[styles.container, styles.view,{flex:1, backgroundColor:'yellowgreen'}]}>

      </View>
      <View>

      </View>
      <View style={[styles.container, styles.view,{flex:5, backgroundColor:'white'}]}>
        <TextInput
          placeholder='Identificación'
          style={styles.textInput}
          onChangeText={(identificacion) => setIdentificacion(identificacion)}
          value={identificacion}
        ></TextInput>
        <TextInput
          placeholder='Nombres'
          style={styles.textInput}
          onChangeText={(nombres) => setNombres(nombres)}
          value={nombres}
        ></TextInput>
        <TextInput
          placeholder='Asignatura'
          style={styles.textInput}
          onChangeText={(asignatura) => setAsigmatura(asignatura)}
          value={asignatura}
        ></TextInput>
        <TextInput
          placeholder='Nota Momento 1 (30%)'
          style={styles.textInput}
          onChangeText={(nota1) => setNota1(nota1)}
          value={nota1}
        ></TextInput>
        <TextInput
          placeholder='Nota Momento 2 (35%)'
          style={styles.textInput}
          onChangeText={(nota2) => setNota2(nota2)}
          value={nota2}
        ></TextInput>
        <TextInput
          placeholder='Nota Momento 3 (35%)'
          style={styles.textInput}
          onChangeText={(nota3) => setNota3(nota3)}
          value={nota3}
        ></TextInput>
        <Text>Definitiva</Text>
        <Text style={{color:'blue', fontWeight:'bold', fontSize:32}}>{resultado}</Text>
        <Text>Observaciones</Text>
        <Text style={{fontWeight:'bold', fontSize:32, color: esValido ? "green" : "red"}}>{mensaje}</Text>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity
            style={[styles.buttons, {backgroundColor:'yellowgreen'}]}
            onPress= {() => calcular()}
          >
            <Text>Calcular</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttons, {backgroundColor:'yellowgreen'}]}
          >
            <Text>Buscar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttons, {backgroundColor:'yellowgreen'}]}
            onPress={() => limpiar()}
          >
            <Text>Limpiar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view:{
    width:'100%', 
    height:'100%',
  },
  form:{
    flexDirection:'row'
  },
  textInput:{
    borderBottom:2, 
    padding:10, 
    width:180, 
    borderWidth: 2, 
    borderColor:'black', 
    textAlign:'center', 
    margin:10
  },
  buttons:{
    borderRadius:10, 
    padding:10, 
    width:70,
    marginLeft:10, 
    textAlign:'center'
  }
});
