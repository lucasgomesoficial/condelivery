import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native'; // Adicionei o Image aqui
import { useNavigation } from '@react-navigation/native';

const RecoverPassword = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');

  const handlePasswordReset = () => {
    // Lógica para reset de senha (chamada para API, etc.)
    console.log('Email enviado para: ', email);
    
     //Após o envio, navegar para a tela de Login
     navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Esqueci minha senha</Text>
      <Text style={styles.subtitle}>Digite seu e-mail para redefinir sua senha</Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
         placeholderTextColor="#F57201"
      />

      <TouchableOpacity style={styles.button} onPress={handlePasswordReset}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>

      <Image
        source={require('../assets/Titulo.png')}
        style={styles.logoImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', 
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 70, 
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
     fontWeight: '500',
    color: '#666',
    marginBottom: 50,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#F57201',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 15,
    marginBottom: 20,
    backgroundColor: '#FFF7F2',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#F57201',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  logoImage: {
     position: 'absolute',
      bottom: 50,
     width: 115,
  height: 23.94,
  marginTop: 27,
  },
});

export default RecoverPassword;
