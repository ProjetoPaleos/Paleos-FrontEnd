import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import api from '../../service/api';

export default function EditScreenTerrestres() {
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params;

  const [nome, setNome] = useState('');
  const [periodo, setPeriodo] = useState('');
  const [idade, setIdade] = useState('');
  const [descricao, setDescricao] = useState('');
  const [estado, setEstado] = useState('');
  const [tamanho, setTamanho] = useState('');
  const [imagemUri, setImagemUri] = useState(null);
  const [imagemBase64, setImagemBase64] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    carregarDados();
  }, []);

  const carregarDados = async () => {
    try {
      setLoading(true);
      const response = await api.get(`/terrestre/${id}`);
      const fossil = response.data;
      setNome(fossil.nome);
      setPeriodo(fossil.periodoGeologico);
      setIdade(fossil.idadeEstimada);
      setDescricao(fossil.descricao);
      setEstado(fossil.estadoConservacao);
      setTamanho(fossil.tamanho);
      setImagemBase64(fossil.imagemBase64);
    } catch (error) {
      console.error('Erro ao carregar fóssil:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      base64: true,
      quality: 0.7,
    });

    if (!result.canceled) {
      setImagemUri(result.assets[0].uri);
      setImagemBase64(result.assets[0].base64);
    }
  };

  const handleUpdate = async () => {
    setLoading(true);
    const data = {
      nome,
      periodoGeologico: periodo,
      idadeEstimada: idade,
      descricao,
      estadoConservacao: estado,
      tamanho,
      imagemBase64,
    };

    try {
      await api.put(`/terrestre/${id}`, data);
      alert('Fóssil atualizado com sucesso!');
      navigation.goBack();
    } catch (error) {
      console.error('Erro ao atualizar fóssil:', error);
      alert('Erro ao atualizar fóssil.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Editar fóssil</Text>

      <TouchableOpacity onPress={handlePickImage} disabled={loading}>
        <View style={styles.imagePlaceholder}>
          {imagemUri || imagemBase64 ? (
            <Image 
              source={{ uri: imagemUri || `data:image/png;base64,${imagemBase64}` }} 
              style={styles.image} 
            />
          ) : (
            <Text style={styles.plus}>+</Text>
          )}
        </View>
      </TouchableOpacity>

      {loading && <ActivityIndicator size="large" color="#fff" />}

      <View style={styles.form}>
        <TextInput style={styles.input} value={nome} onChangeText={setNome} placeholder="Nome científico" placeholderTextColor="#aaa" />
        <TextInput style={styles.input} value={periodo} onChangeText={setPeriodo} placeholder="Período geológico" placeholderTextColor="#aaa" />
        <TextInput style={styles.input} value={idade} onChangeText={setIdade} placeholder="Idade estimada" placeholderTextColor="#aaa" />
        <TextInput style={styles.input} value={descricao} onChangeText={setDescricao} placeholder="Descrição detalhada" placeholderTextColor="#aaa" />
        <TextInput style={styles.input} value={estado} onChangeText={setEstado} placeholder="Estado de conservação" placeholderTextColor="#aaa" />
        <TextInput style={styles.input} value={tamanho} onChangeText={setTamanho} placeholder="Tamanho" placeholderTextColor="#aaa" />

        <TouchableOpacity style={styles.button} onPress={handleUpdate} disabled={loading}>
          <Text style={styles.buttonText}>Atualizar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1610',
    alignItems: 'center',
    paddingTop: 60,
  },
  backButton: {
    position: 'absolute',
    left: 20,
    top: 60,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 6,
    zIndex: 10,
  },
  backText: {
    fontSize: 18,
    color: '#333',
  },
  title: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 16,
  },
  imagePlaceholder: {
    width: 130,
    height: 130,
    borderRadius: 12,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
  plus: {
    fontSize: 30,
    color: '#555',
  },
  form: {
    backgroundColor: '#fff',
    width: '100%',
    flex: 1,
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  input: {
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 20,
    marginBottom: 12,
    color: '#000',
  },
  button: {
    backgroundColor: '#2d3d2d',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 12,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
