import React, { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import api from '../service/api';

// IMPORTAÇÃO DOS ICONES SVG
import BoneIcon from '../assets/svgs/bone_transparent.svg';
import FossilIcon from '../assets/svgs/fossil.svg';
import TapeIcon from '../assets/svgs/measuring-tape.svg';

export default function ViewDetailsScreen() {
  const route = useRoute();
  const { id } = route.params;

  const [fossil, setFossil] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFossil() {
      try {
        const response = await api.get(`/aquatico/${id}`);
        setFossil(response.data);
      } catch (error) {
        console.error('Erro ao buscar detalhes do fóssil:', error);
      } finally {
        setLoading(false);
      }
    }

    loadFossil();
  }, [id]);

  if (loading) {
    return <ActivityIndicator size="large" color="#704f2c" style={{ flex: 1 }} />;
  }

  if (!fossil) {
    return (
      <View style={styles.container}>
        <Text>Fóssil não encontrado.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.container}>
      <Image
        source={{ uri: `data:image/png;base64,${fossil.imagemBase64}` }}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.headerBox}>
        <Text style={styles.name}>
          {fossil.nome?.split(' ')[0]}
          {'\n'}
          <Text style={styles.nameBold}>{fossil.nome?.split(' ')[1]}</Text>
        </Text>

        <View style={styles.iconRow}>
            <Icon IconSvg={BoneIcon} label={fossil.idadeEstimada} />
            <View style={styles.separator} />
            <Icon IconSvg={FossilIcon} label={fossil.estadoConservacao} />
            <View style={styles.separator} />
            <Icon IconSvg={TapeIcon} label={fossil.tamanho} />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Período geológico</Text>
        <View style={styles.tag}>
          <Text style={styles.tagText}>{fossil.era}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Descrição</Text>
        <View style={styles.descriptionBox}>
          <Text style={styles.descriptionText}>
            {fossil.descricao || 'Descrição não disponível.'}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const Icon = ({ IconSvg, label }) => (
  <View style={styles.iconBox}>
    <IconSvg width={24} height={24} />
    <Text style={styles.iconLabel}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  container: {
    alignItems: 'center',
    paddingBottom: 40,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -30,
  },
  image: {
    width: '100%',
    height: 300,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  headerBox: {
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'flex-start',
    width: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -30,
  },
  name: {
    fontSize: 24,
    color: '#344E41',
    fontWeight: 'normal',
  },
  nameBold: {
    fontWeight: 'bold',
  },
  iconRow: {
    flexDirection: 'row',
    marginTop: 15,
    backgroundColor: '#f1f1f1',
    padding: 12,
    borderRadius: 20,
    justifyContent: 'space-between',
  },
  iconBox: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  iconLabel: {
    fontSize: 12,
    marginTop: 4,
    color: '#333',
  },
  separator: {
    width: 1,
    backgroundColor: '#ccc',
    marginHorizontal: 10,
  },
  section: {
    width: '90%',
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  tag: {
    backgroundColor: '#704f2c',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  tagText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  descriptionBox: {
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 12,
  },
  descriptionText: {
    fontSize: 14,
    color: '#444',
  },
});
