import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/Logoprincipal.png')}
        style={styles.logoImage}
      />
      <Image
        source={require('../assets/Titulo.png')}
        style={styles.titleImage}
      />

      <TouchableOpacity
        style={styles.buttonOrange}
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={styles.buttonText}>Cadastre-se</Text>
      </TouchableOpacity>

  

      <TouchableOpacity
        style={styles.buttonBordered}
        onPress={() => navigation.navigate('Login')} // Navegar para a tela de login
      >
        <Text style={styles.buttonTextBordered}>Já tenho um cadastro</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logoImage: {
    width: 290,
    height: 290,
    marginBottom: 32,
  },
  titleImage: {
    width: 243.44,
    height: 50.67,
    marginBottom: 30,
  },
  buttonOrange: {
    width: 300,
    height: 60,
    backgroundColor: '#F57201',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
    borderRadius: 15,
  },

  buttonBordered: {
    width: 300,
    height: 60,
    borderColor: '#F57201',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Inter',
  },
  buttonTextBordered: {
    color: '#F57201',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Inter',
  },
});

export default Home;
