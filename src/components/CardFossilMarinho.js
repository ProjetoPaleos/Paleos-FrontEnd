import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function CardFossilMarinho({ nome, imagemBase64, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.7}>
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
        <Text style={styles.nome}>{nome}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    marginBottom: 16,
    marginHorizontal: 4,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 140,
  },
  imagePlaceholder: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDD',
  },
  placeholderText: {
    color: '#999',
    fontSize: 14,
  },
  info: {
    padding: 10,
  },
  nome: {
    fontSize: 16,
    fontWeight: '600',
    color: '#344E41',
  },
});
