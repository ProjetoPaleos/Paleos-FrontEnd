import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import TrashIcon from '../assets/svgs/trash.svg'; 

export default function ConfirmDeleteModal({ visible, onClose, onConfirm }) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <TrashIcon width={40} height={40} style={{ marginBottom: 10 }} />
          <Text style={styles.title}>Excluir item ?</Text>

          <TouchableOpacity style={styles.deleteButton} onPress={onConfirm}>
            <Text style={styles.deleteButtonText}>Excluir</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
            <Text style={styles.cancelButtonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#FAF5E9',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    width: 260,
    elevation: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 16,
  },
  deleteButton: {
    backgroundColor: '#E15C4A',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 50,
    marginBottom: 10,
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cancelButton: {
    borderWidth: 1,
    borderColor: '#CFC6B8',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 50,
  },
  cancelButtonText: {
    color: '#6B645E',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
