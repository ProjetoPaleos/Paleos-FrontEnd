import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function CardFossilMarinho({ nome, imagemBase64, onPress }) {
  const primeiraPalavra = nome.split(' ')[0];  // Pegando só a primeira palavra

  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      {imagemBase64 ? (
        <Image
          source={{ uri: `data:image/jpeg;base64,${imagemBase64}` }}
          style={styles.image}
          resizeMode="cover"
        />
      ) : (
        <View style={[styles.image, styles.imagePlaceholder]}>
          <Text style={styles.placeholderText}>Sem imagem</Text>
        </View>
      )}
      <View style={styles.info}>
        <Text style={styles.nome}>{primeiraPalavra}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 16,
    marginHorizontal: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 140,
  },
  imagePlaceholder: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  placeholderText: {
    color: '#aaa',
    fontSize: 14,
  },
  info: {
    padding: 12,
  },
  nome: {
    fontSize: 18,
    fontWeight: '600',
    color: '#344E41',
  },
});
