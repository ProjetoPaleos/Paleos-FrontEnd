import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import api from '../../service/api';
import CardFossilMarinho from '../../components/CardFossilMarinho';
import { useFocusEffect } from '@react-navigation/native';

export default function AereosScreen({ navigation }) {
  const [fosseis, setFosseis] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  const fetchFosseis = async () => {
    setLoading(true);
    try {
      const response = await api.get('/aereo');
      setFosseis(response.data);
    } catch (error) {
      console.error('Erro ao buscar fósseis aereos:', error);
    }
    setLoading(false);
  };

  useFocusEffect(
    useCallback(() => {
      fetchFosseis();
    }, [])
  );

  const filteredFosseis = fosseis.filter((fossil) =>
    fossil.nome.toLowerCase().includes(search.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <CardFossilMarinho
      nome={item.nome}
      imagemBase64={item.imagemBase64}
      onPress={() => navigation.navigate('ViewDetailsAereo', { id: item.id })}
    />
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#344E41" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.titulo}>Fósseis aereos</Text>
        <TouchableOpacity onPress={() => navigation.navigate('AddScreenAereo')}>
          <Ionicons name="add-circle" size={28} color="#62442B" />
        </TouchableOpacity>
      </View>

      {/* Barra de busca */}
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={20} color="#999" style={{ marginLeft: 10 }} />
        <TextInput
          placeholder="Procure os fósseis..."
          placeholderTextColor="#aaa"
          style={styles.searchInput}
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* Lista */}
      <FlatList
        data={filteredFosseis}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        numColumns={2}
        contentContainerStyle={styles.list}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        ListEmptyComponent={() => (
          <Text style={{ textAlign: 'center', marginTop: 20, color: '#999' }}>
            Nenhum fóssil encontrado.
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#344E41',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F1F1',
    borderRadius: 12,
    height: 40,
    paddingRight: 10,
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    color: '#000',
  },
  list: {
    paddingBottom: 100,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
