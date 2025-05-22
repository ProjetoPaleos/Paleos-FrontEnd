import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ActivityIndicator } from 'react-native'; 
// Importa ActivityIndicator

export default function AddScreen() {
  const navigation = useNavigation();

  // ... seus outros estados
  const [loading, setLoading] = useState(false); // Estado para carregamento

  // ... seu handlePickImage

  const handleSubmit = async () => {
    setLoading(true); // Começa o loading
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
      await axios.post('https://paleos.azurewebsites.net/aquatico', data);
      alert('Fóssil adicionado com sucesso!');
      navigation.goBack();
    } catch (error) {
      console.error(error);
      alert('Erro ao adicionar fóssil.');
    } finally {
      setLoading(false); // Para o loading em qualquer caso
    }
  };

  return (
    <View style={styles.container}>
      {/* Botão voltar */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      {/* Tela de carregamento */}
      {loading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color="#fff" />
          <Text style={{color: '#fff', marginTop: 10}}>Enviando fóssil...</Text>
        </View>
      )}

      {/* Conteúdo principal fica "embaixo" do loading */}
      <TouchableOpacity onPress={handlePickImage} disabled={loading}>
        <View style={styles.imagePlaceholder}>
          {imagemUri ? (
            <Image source={{ uri: imagemUri }} style={styles.image} />
          ) : (
            <Text style={styles.plus}>+</Text>
          )}
        </View>
      </TouchableOpacity>

      <View style={styles.form}>
        {/* Inputs desabilitados quando loading */}
        <TextInput
          placeholder="Nome científico"
          style={styles.input}
          value={nome}
          onChangeText={setNome}
          editable={!loading}
        />
        <TextInput
          placeholder="Período geológico"
          style={styles.input}
          value={periodo}
          onChangeText={setPeriodo}
          editable={!loading}
        />
        <TextInput
          placeholder="Idade estimada"
          style={styles.input}
          value={idade}
          onChangeText={setIdade}
          editable={!loading}
        />
        <TextInput
          placeholder="Descrição detalhada"
          style={styles.input}
          value={descricao}
          onChangeText={setDescricao}
          editable={!loading}
        />
        <TextInput
          placeholder="Estado de conservação"
          style={styles.input}
          value={estado}
          onChangeText={setEstado}
          editable={!loading}
        />
        <TextInput
          placeholder="Tamanho"
          style={styles.input}
          value={tamanho}
          onChangeText={setTamanho}
          editable={!loading}
        />

        <TouchableOpacity
          style={[styles.button, loading && { backgroundColor: '#555' }]}
          onPress={handleSubmit}
          disabled={loading} // desabilita botão enquanto carrega
        >
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
   loadingOverlay: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
  },
});
