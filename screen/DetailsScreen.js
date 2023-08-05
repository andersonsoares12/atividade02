import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image, Button } from "react-native";
import axios from "axios";
import styles from "../styles";

const DetailsScreen = ({ route }) => {
  const [userData, setUserData] = useState({});
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetchGithubUserData();
    fetchGithubRepositories();
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

  const fetchGithubRepositories = async () => {
    const token =
      "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"; // Substitua 'YOUR_GITHUB_ACCESS_TOKEN' pelo token que você gerou

    try {
      const response = await axios.get(
        "https://api.github.com/users/andersonsoares12/repos",
        {
          headers: {
            Authorization: `token ${token}`,
          },
        }
      );
      setRepositories(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const renderRepoItem = ({ item }) => (
    <View style={styles.repoItem}>
      <Text style={styles.repoName}>{item.name}</Text>
      <Text style={styles.repoLanguage}>{item.language}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {userData.login ? (
        <>
          <Text style={[styles.paddingVertical, styles.name]}>
            Detalhes do Usuário
          </Text>
          <Text style={styles.name}>{userData.name}</Text>

          <Text style={[styles.bioText, styles.padding]}> Biografia</Text>
          <Text style={styles.bio}>{userData.bio}</Text>

          <Text style={[styles.bioText, styles.padding]}>Repositorios</Text>

          <FlatList
            data={repositories}
            renderItem={renderRepoItem}
            keyExtractor={(item) => item.id.toString()}
            style={styles.repoList}
          />
        </>
      ) : (
        <Text style={styles.loadingText}>Carregando...</Text>
      )}
    </View>
  );
};

export default DetailsScreen;
