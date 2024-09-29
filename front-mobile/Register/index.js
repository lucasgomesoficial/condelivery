import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Importar o ícone
import { useNavigation } from '@react-navigation/native';
import api from '../Services/api';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [nomeCompleto, setNomeCompleto] = useState(''); // Estado para nome completo
  const [email, setEmail] = useState(''); // Estado para email
  const [senha, setSenha] = useState(''); // Estado para senha
  const [isChecked, setIsChecked] = useState(false);
  const [selectedRole, setSelectedRole] = useState(''); // Morador ou colaborador
  const [inputFocused, setInputFocused] = useState('');
  const [showPassword, setShowPassword] = useState(false);

 const cadastrar = async () => {
    const dadosCadastro = {
      nomeCompleto: nomeCompleto, //confirma nome do campo dos parametros que ele espera receber ver Lucas
      email: email,
      senha: senha,
      role: selectedRole, // Morador ou colaborador
    };

    console.log('Dados cadastrados:', dadosCadastro);

    // Chamar a API para cadastro
     api.post('/user', dadosCadastro, { headers: { 'Content-Type': 'application/json' } }) //endpoint de cadastrar ver Lucas
      .then(response => {
        navigation.navigate('Profile');
      })
      .catch(error => {
        alert("erro Api", JSON.stringify(error ))
      });
  };


  const handleInputFocus = (inputName) => {
    setInputFocused(inputName);
  };

  const handleInputBlur = () => {
    setInputFocused('');
  };

  const handleRoleSelection = (role) => {
    setSelectedRole(role);
  };

  const getInputBorderColor = (inputName) => {
    if (inputFocused === inputName) {
      return '#F57201'; // Cor quando o input está em foco
    }
    if ((inputName === 'morador' && selectedRole === 'morador') || 
        (inputName === 'colaborador' && selectedRole === 'colaborador')) {
      return '#F57201'; // Cor quando o checkbox correspondente está selecionado
    }
    return '#ccc'; // Cor padrão
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-Vindo</Text>

      {/* Campos para nome completo, e-mail e senha */}
      <TextInput
        style={[styles.input, { borderColor: getInputBorderColor('nomeCompleto') }]}
        placeholder="Nome Completo"
        onFocus={() => handleInputFocus('nomeCompleto')}
        onBlur={handleInputBlur}
      />
      <TextInput
        style={[styles.input, { borderColor: getInputBorderColor('email') }]}
        placeholder="Seu e-mail"
        onFocus={() => handleInputFocus('email')}
        onBlur={handleInputBlur}
      />
      
      {/* Campo para criar uma senha com ícone dentro */}
      <View style={styles.passwordContainer}>
        <TextInput
          style={[styles.input, { borderColor: getInputBorderColor('senha'), paddingRight: 50 }]} // Adiciona espaço para o ícone
          placeholder="Criar uma senha"
          secureTextEntry={!showPassword}
          onFocus={() => handleInputFocus('senha')}
          onBlur={handleInputBlur}
        />

      
      </View>

      {/* Checkbox para Cadastrar como Morador */}
      <View style={styles.checkboxContainer}>
        <TouchableOpacity
          style={[styles.checkbox, selectedRole === 'morador' ? { backgroundColor: 'rgba(245, 114, 1, 0.2)', borderColor: '#F57201' } : null]}
          onPress={() => handleRoleSelection('morador')}
        >
          {selectedRole === 'morador' && <Icon name="check" size={20} color="#F57201" />}
        </TouchableOpacity>
        <Text style={styles.checkboxText}>Cadastrar como morador</Text>
      </View>

      {/* Checkbox para Cadastrar como Colaborador */}
      <View style={styles.checkboxContainer}>
        <TouchableOpacity
          style={[styles.checkbox, selectedRole === 'colaborador' ? { backgroundColor: 'rgba(245, 114, 1, 0.2)', borderColor: '#F57201' } : null]}
          onPress={() => handleRoleSelection('colaborador')}
        >
          {selectedRole === 'colaborador' && <Icon name="check" size={20} color="#F57201" />}
        </TouchableOpacity>
        <Text style={styles.checkboxText}>Cadastrar como colaborador</Text>
      </View>

      {/* Opção para concordar com os Termos e Condições */}
      <View style={styles.checkboxContainer}>
        <TouchableOpacity
          style={[styles.checkbox, isChecked ? { backgroundColor: 'rgba(245, 114, 1, 0.2)', borderColor: '#F57201' } : null]}
          onPress={() => setIsChecked(!isChecked)}
        >
          {isChecked && <Icon name="check" size={20} color="#F57201" />}
        </TouchableOpacity>
        <Text style={styles.checkboxText}>
          Ao criar sua conta você concorda com nossos Termos e Condições.
        </Text>
      </View>

      {/* Botão de Registro */}
      <TouchableOpacity style={styles.registerButton} onPress={cadastrar}>
        <Text style={styles.buttonCriarConta}>Criar Conta</Text>
      </TouchableOpacity>

      {/* Texto "Ou criar conta com" */}
      <Text style={styles.orText}>Ou criar conta com</Text>

      {/* Botões de login com Google e Facebook */}
      <View style={styles.socialButtonContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.buttonClicar}>G</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.buttonClicar}>F</Text>
        </TouchableOpacity>
      </View>

      {/* Botão de Entrar na conta */}
      <TouchableOpacity
        style={styles.enterButton}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>Entrar na conta</Text>
      </TouchableOpacity>

      {/* Imagem */}
      <Image
        source={require('../assets/Titulo.png')}
        style={styles.logoImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 40,
    marginTop: 10,
  },
  input: {
    width: 320,
    height: 50,
    marginBottom: 15,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 15,
    fontSize: 16,
    color: '#000',
  },
  passwordContainer: {
    position: 'relative',
    width: 320,
  },

  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    width: 320,
  },
  checkbox: {
    width: 26,
    height: 26,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'rgba(165, 165, 165, 0.2)',
    backgroundColor: 'rgba(165, 165, 165, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checkboxText: {
    fontSize: 14,
  },
  registerButton: {
    width: 300,
    height: 50,
    backgroundColor: '#F57201',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 15,
  },
  orText: {
    fontSize: 18,
    marginBottom: 10,
  },
  socialButtonContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  socialButton: {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginRight: 10,
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
  },
  buttonClicar: {
    color: '#0074D9',
    fontSize: 20,
    fontWeight: 'bold',
  },
  enterButton: {
    width: 300,
    height: 50,
    borderColor: '#F57201',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 15,
  },
  buttonCriarConta: {
    color: '#ffffff', 
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonText: {
    color: '#F57201',
    fontSize: 18,
    fontWeight: 'bold',
  },
  logoImage: {
    width: 115,
    height: 23.94,
    marginTop: 20,
  },
});

export default RegisterScreen;
