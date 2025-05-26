import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';
import { useNavigation } from '@react-navigation/native';

export default function OnboardingScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.videoContainer}>
        <Video
          source={require('../assets/videos/fossil-intro.mp4')} // ajuste o caminho se necessário
          style={styles.video}
          shouldPlay
          isLooping
          resizeMode="cover"
          muted
        />
      </View>

      <View style={styles.overlay} />

      <View style={styles.content}>
        <Text style={styles.title}>
          Boas histórias,{'\n'}
          boas lembranças,{'\n'}
          vamos misturar
        </Text>
        <Text style={styles.subtitle}>
          O melhor site de coleção de fósseis do Brasil
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('MainTabs', { screen: 'Home' })}
        >
          <Text style={styles.buttonText}>Nada e nem ninguém irá nos deter!
</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  videoContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  video: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 24,
    paddingBottom: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#ccc',
    marginBottom: 32,
  },
  button: {
    backgroundColor: '#8B5E3C',
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
