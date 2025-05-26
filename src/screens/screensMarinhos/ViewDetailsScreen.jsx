import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import ConfirmDeleteModal from '../../components/ConfirmDeleteModal';
import api from '../../service/api';

import BoneIcon from '../../assets/svgs/bone_transparent.svg';
import FossilIcon from '../../assets/svgs/fossil.svg';
import TapeIcon from '../../assets/svgs/measuring-tape.svg';

export default function ViewDetailsScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { id } = route.params;

  const [fossil, setFossil] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

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

  const handleDelete = async () => {
    try {
      console.log(`Enviando DELETE para: /aquatico/${id}`);
      const response = await api.delete(`/aquatico/${id}`);
      console.log('Resposta da exclusão:', response.status);
      alert('Fóssil excluído com sucesso!');
      setModalVisible(false);
      navigation.goBack();
    } catch (error) {
      console.error('Erro ao excluir fóssil:', error.response?.data || error.message);
      alert('Erro ao excluir fóssil.');
    }
  };

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
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: `data:image/png;base64,${fossil.imagemBase64}` }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.name}>
          {fossil.nome?.split(' ')[0]}{'\n'}
          {fossil.nome?.split(' ')[1]}
        </Text>

        <View style={styles.infoBox}>
          <Icon IconSvg={BoneIcon} label={fossil.idadeEstimada} />
          <View style={styles.separator} />
          <Icon IconSvg={FossilIcon} label={fossil.estadoConservacao} />
          <View style={styles.separator} />
          <Icon IconSvg={TapeIcon} label={fossil.tamanho} />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Período geológico</Text>
          <View style={styles.tag}>
            <Text style={styles.tagText}>{fossil.periodoGeologico}</Text>
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

        <View style={styles.actions}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: '#2d3d2d' }]}
            onPress={() => navigation.navigate('EditScreen', { id })}
          >
            <Text style={styles.buttonText}>Editar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: '#E15C4A' }]}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.buttonText}>Excluir</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ConfirmDeleteModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onConfirm={handleDelete}
      />
    </ScrollView>
  );
}

const Icon = ({ IconSvg, label }) => (
  <View style={styles.iconBox}>
    <IconSvg width={16} height={16} />
    <Text style={styles.iconLabel}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingBottom: 30,
  },
  imageContainer: {
    width: '100%',
    height: 375,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  content: {
    marginTop: -40,
    backgroundColor: '#fff',
    width: '100%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 30,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  infoBox: {
    flexDirection: 'row',
    backgroundColor: '#f1f1f1',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  separator: {
    width: 1,
    height: 20,
    backgroundColor: '#ccc',
  },
  iconBox: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconLabel: {
    marginLeft: 5,
    fontSize: 12,
    color: '#333',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  tag: {
    backgroundColor: '#704f2c',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  tagText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  descriptionBox: {
    backgroundColor: '#f9f9f9',
    borderRadius: 16,
    padding: 16,
  },
  descriptionText: {
    fontSize: 14,
    color: '#444',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
