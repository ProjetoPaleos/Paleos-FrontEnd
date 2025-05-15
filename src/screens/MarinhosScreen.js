import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import api from '../service/api';

export default function MarinhosScreen() {
  const [fosseis, setFosseis] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/aquatico')
      .then(response => {
        setFosseis(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erro ao buscar fósseis marinhos:', error);
        setLoading(false);
      });
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.imagemBase64 }} style={styles.image} />
      <Text style={styles.nome}>{item.nome}</Text>
      <TouchableOpacity style={styles.plusButton}>
        <Text style={styles.plusText}>+</Text>
      </TouchableOpacity>
    </View>
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
      {/* Topo */}
      <View style={styles.header}>
        <Text style={styles.titulo}>Fóseis marinhos</Text>
        <TouchableOpacity>
          <Ionicons name="add-circle" size={28} color="#62442B" />
        </TouchableOpacity>
      </View>

      {/* Barra de busca */}
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={20} color="#999" style={{ marginLeft: 10 }} />
        <TextInput
          placeholder="Procure o fósseis.."
          placeholderTextColor="#aaa"
          style={styles.searchInput}
        />
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="options-outline" size={20} color="#62442B" />
        </TouchableOpacity>
      </View>

      {/* Lista */}
      <FlatList
        data={fosseis}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        numColumns={2}
        contentContainerStyle={styles.list}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
      />

      {/* Navegação inferior */}
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home-outline" size={22} color="#999" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItemActive}>
          <Ionicons name="fish" size={22} color="#62442B" />
          <Text style={styles.navTextActive}>Marinhos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="leaf-outline" size={22} color="#999" />
          <Text style={styles.navText}>Terrestres</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="airplane-outline" size={22} color="#ccc" />
          <Text style={[styles.navText, { color: '#ccc' }]}>Aéreos</Text>
        </TouchableOpacity>
      </View>
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
  filterButton: {
    marginLeft: 8,
  },
  list: {
    paddingBottom: 100,
  },
  card: {
    backgroundColor: '#F9F9F9',
    borderRadius: 16,
    padding: 12,
    marginBottom: 16,
    width: '48%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 12,
    marginBottom: 8,
  },
  nome: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  plusButton: {
    backgroundColor: '#62442B',
    borderRadius: 999,
    width: 26,
    height: 26,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  navbar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  navItem: {
    alignItems: 'center',
  },
  navItemActive: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 10,
    color: '#999',
  },
  navTextActive: {
    fontSize: 10,
    color: '#62442B',
    fontWeight: 'bold',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
