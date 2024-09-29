import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome, MaterialIcons } from '@expo/vector-icons';

export default function ProfileScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTopRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.headerContent}>
          <Text style={styles.headerText}>Hellen Silva</Text>
          <Ionicons name="person-circle-outline" size={40} color="white" style={styles.profileIcon} />
        </View>
        <Text style={styles.subHeaderText}>Morador(a)</Text>
      </View>

      <View style={styles.infoSection}>
        <View style={styles.titleContainer}>
          <Text style={styles.sectionTitle}>Informações Gerais</Text>
          <TouchableOpacity onPress={() => { /* ação de edição */ }}>
            <MaterialIcons name="edit" size={20} color="orange" style={styles.editIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.infoBox}>
          <View style={styles.infoItem}>
            <FontAwesome name="map-marker" size={20} color="#0068ff" style={styles.infoIcon} />
            <View style={styles.infoTextContainer}>
              <Text style={styles.infoLabel}>Endereço:</Text>
              <Text style={styles.infoText}>Rua das Flores, 123, Bairro Jardim</Text>
              <Text style={styles.infoText}>Encantado - Cidade das Estrelas, SP, CEP 12345-678 - Brasil</Text>
            </View>
          </View>

          <View style={styles.infoItem}>
            <FontAwesome name="envelope" size={20} color="#0068ff" style={styles.infoIcon} />
            <View style={styles.infoTextContainer}>
              <Text style={styles.infoLabel}>E-mail:</Text>
              <Text style={styles.infoText}>hellen.silva345@gmail.com</Text>
            </View>
          </View>

          <View style={styles.infoItem}>
            <FontAwesome name="id-card" size={20} color="#0068ff" style={styles.infoIcon} />
            <View style={styles.infoTextContainer}>
              <Text style={styles.infoLabel}>CPF:</Text>
              <Text style={styles.infoText}>652.478.123/62</Text>
            </View>
          </View>

          <View style={styles.infoItem}>
            <FontAwesome name="phone" size={20} color="#0068ff" style={styles.infoIcon} />
            <View style={styles.infoTextContainer}>
              <Text style={styles.infoLabel}>Número de celular:</Text>
              <Text style={styles.infoText}>(11) 00000-0000</Text>
            </View>
          </View>

          <View style={styles.infoItem}>
            <FontAwesome name="id-badge" size={20} color="#0068ff" style={styles.infoIcon} />
            <View style={styles.infoTextContainer}>
              <Text style={styles.infoLabel}>ID Condomínio:</Text>
              <Text style={styles.infoText}>#09897</Text>
            </View>
          </View>

          <View style={styles.infoItem}>
            <FontAwesome name="building" size={20} color="#0068ff" style={styles.infoIcon} />
            <View style={styles.infoTextContainer}>
              <Text style={styles.infoLabel}>Bloco:</Text>
              <Text style={styles.infoText}>A</Text>
            </View>
          </View>

          <View style={styles.infoItem}>
            <FontAwesome name="home" size={20} color="#0068ff" style={styles.infoIcon} />
            <View style={styles.infoTextContainer}>
              <Text style={styles.infoLabel}>Apartamento:</Text>
              <Text style={styles.infoText}>8</Text>
            </View>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>Apagar meu perfil</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  header: {
    height: 150,
    backgroundColor: '#0068ff',
    padding: 20,
  },
  headerTopRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  profileIcon: {
    marginLeft: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  subHeaderText: {
    color: 'white',
    fontSize: 15,
    marginTop: 5,
  },
  infoSection: {
    marginVertical: 10,
    padding: 15,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  editIcon: {
    marginLeft: 12,
  },
  infoBox: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 15,
    elevation: 5, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 9,
  },
  infoIcon: {
    marginRight: 10,
  },
  infoTextContainer: {
    flex: 1,
  },
  infoLabel: {
    fontWeight: 'bold',
    marginBottom: 2,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 2,
  },
  deleteButton: {
    marginVertical: 5,
    padding: 10,
    alignItems: 'center',
  
  },
  deleteButtonText: {
    color: '#F57201',
    fontSize: 15,
     fontWeight: 'bold',
  },
});
