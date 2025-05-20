import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import { useNavigation } from '@react-navigation/native';

export default function AddScreen() {
  const navigation = useNavigation();

  const [nome, setNome] = useState('');
  const [periodo, setPeriodo] = useState('');
  const [idade, setIdade] = useState('');
  const [descricao, setDescricao] = useState('');
  const [estado, setEstado] = useState('');
  const [imagemUri, setImagemUri] = useState(null);
  const [imagemBase64, setImagemBase64] = useState(null);

  const handlePickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
      base64: false,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      setImagemUri(uri);

      // Ler a imagem como base64
      const base64 = await FileSystem.readAsStringAsync(uri, { encoding: 'base64' });
      setImagemBase64(base64);
    }
  };

  const handleSubmit = async () => {
    const data = {
      nome: nome,
      periodoGeologico: periodo,
      idadeEstimada: idade,
      descricao: descricao,
      estadoConservacao: estado,
      imagemBase64: imagemBase64,  // envia base64 aqui
    };

    try {
      await axios.post('https://paleos.azurewebsites.net/aquatico', data);
      alert('Fóssil adicionado com sucesso!');
      navigation.goBack();
    } catch (error) {
      console.error(error);
      alert('Erro ao adicionar fóssil.');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handlePickImage}>
        <View style={styles.imagePlaceholder}>
          {imagemUri ? (
            <Image source={{ uri: imagemUri }} style={styles.image} />
          ) : (
            <Text style={styles.plus}>+</Text>
          )}
        </View>
      </TouchableOpacity>

      <View style={styles.form}>
        <TextInput
          placeholder="Nome científico"
          style={styles.input}
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          placeholder="Período geológico"
          style={styles.input}
          value={periodo}
          onChangeText={setPeriodo}
        />
        <TextInput
          placeholder="Idade estimada"
          style={styles.input}
          value={idade}
          onChangeText={setIdade}
        />
        <TextInput
          placeholder="Descrição detalhada"
          style={styles.input}
          value={descricao}
          onChangeText={setDescricao}
        />
        <TextInput
          placeholder="Estado de conservação"
          style={styles.input}
          value={estado}
          onChangeText={setEstado}
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    alignItems: 'center',
    paddingTop: 50,
  },
  backButton: {
    position: 'absolute',
    left: 20,
    top: 50,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 5,
    zIndex: 10,
  },
  backText: {
    fontSize: 18,
  },
  imagePlaceholder: {
    width: 100,
    height: 100,
    backgroundColor: '#ccc',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  plus: {
    fontSize: 30,
    color: '#333',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
  form: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 30,
    width: '90%',
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#2d3d2d',
    borderRadius: 10,
    padding: 12,
    marginTop: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
