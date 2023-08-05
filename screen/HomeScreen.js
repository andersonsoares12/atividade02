import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import styles from "../styles";

const DetailsScreen = ({ navigation }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  const fetchGithubUserData = async () => {
    const token =
      "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"; // Substitua 'YOUR_GITHUB_ACCESS_TOKEN' pelo token que você gerou

    try {
      const response = await axios.get("https://api.github.com/user", {
        headers: {
          Authorization: `token ${token}`,
        },
      });
      setUserData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleGoToDetails = () => {
    navigation.navigate("Details");
  };

  return (
    <View style={styles.container}>
      {userData ? (
        <>
          <Image source={{ uri: userData.avatar_url }} style={styles.avatar} />
          <Text style={styles.name}>{userData.name}</Text>
          <Text style={[styles.bio, styles.padding]}>{userData.bio}</Text>

          <TouchableOpacity style={[styles.button, styles.padding]} onPress={handleGoToDetails}>
            <Text style={[styles.buttonText]}>Ir para Detalhes</Text>
          </TouchableOpacity>
        </>
      ) : (
        <Text style={styles.loadingText}>Carregando...</Text>
      )}
    </View>
  );
};

export default DetailsScreen;
