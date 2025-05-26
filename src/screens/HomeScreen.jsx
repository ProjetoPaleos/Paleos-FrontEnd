import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import FireIcon from '../assets/svgs/Fire_Emote.svg';
import api from '../service/api';

export default function HomeScreen() {
  const [fosseis, setFosseis] = useState([]);
  const [search, setSearch] = useState('');
  const navigation = useNavigation();

  const fetchFosseis = async () => {
    try {
      const [aquatico, terrestre, aereo] = await Promise.all([
        api.get('/aquatico'),
        api.get('/terrestre'),
        api.get('/aereo'),
      ]);

      const aquaticoFormat = aquatico.data.map(item => ({ ...item, tipo: 'Aquatico' }));
      const terrestreFormat = terrestre.data.map(item => ({ ...item, tipo: 'Terrestre' }));
      const aereoFormat = aereo.data.map(item => ({ ...item, tipo: 'Aereo' }));

      setFosseis([...aquaticoFormat, ...terrestreFormat, ...aereoFormat]);
    } catch (error) {
      console.error('Erro ao buscar fósseis:', error);
    }
  };

  // ✅ Agora, atualiza sempre que Home for focada:
  useFocusEffect(
    useCallback(() => {
      fetchFosseis();
    }, [])
  );

  const handleNavigate = (item) => {
    if (item.tipo === 'Terrestre') {
      navigation.navigate('ViewDetailsTerrestre', { id: item.id });
    } else if (item.tipo === 'Aquatico') {
      navigation.navigate('ViewDetails', { id: item.id });
    } else if (item.tipo === 'Aereo') {
      navigation.navigate('ViewDetailsAereo', { id: item.id });
    }
  };

  const filteredFosseis = fosseis.filter((item) =>
    item.nome.toLowerCase().includes(search.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleNavigate(item)} style={styles.card}>
      <Image
        source={{ uri: `data:image/png;base64,${item.imagemBase64}` }}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{item.tipo}</Text>
        </View>
        <Text style={styles.title}>{item.nome}</Text>
        <Text style={styles.subtitle}>{`do ${item.periodoGeologico}`}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Bom dia, paleontólogo</Text>

      <View style={styles.searchBox}>
        <TextInput
          placeholder="Procure seu fóssil"
          placeholderTextColor="#999"
          style={styles.searchInput}
          value={search}
          onChangeText={setSearch}
        />
      </View>

      <View style={styles.sectionTitle}>
        <Text style={styles.sectionText}>Em destaque</Text>
        <FireIcon width={18} height={18} style={{ marginLeft: 4 }} />
      </View>

      <FlatList
        data={filteredFosseis}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 40 }}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFCFA',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E1610',
    marginBottom: 20,
  },
  searchBox: {
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  searchInput: {
    fontSize: 14,
    color: '#333',
  },
  sectionTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  sectionText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E1610',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 12,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  badge: {
    backgroundColor: '#A97C50',
    borderRadius: 10,
    alignSelf: 'flex-start',
    paddingVertical: 2,
    paddingHorizontal: 8,
    marginBottom: 8,
  },
  badgeText: {
    fontSize: 10,
    color: '#fff',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E1610',
  },
  subtitle: {
    fontSize: 13,
    color: '#555',
    fontWeight: '500',
  },
});
