import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";
import styles from "../styles";
import { useNavigation } from "@react-navigation/native"; // Importe a função useNavigation

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigation = useNavigation(); // Obtenha a instância de navegação

  const handleSubmit = () => {
    const mensagem = `Email: ${email}\n` + `Senha: ${senha}\n`;

    Alert.alert("Efetuando Login...", mensagem);

    // Navegue para a tela "Home" após o envio
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Login</Text>
      <Text style={styles.title}>Dados Pessoais</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
