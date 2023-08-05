import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image, Button } from "react-native";
import axios from "axios";

const DetailsScreen = ({ route }) => {
  const [userData, setUserData] = useState({});
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    fetchGithubUserData();
    fetchGithubFollowers();
  }, []);

  const fetchGithubUserData = async () => {
    const token = "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"; // Substitua pelo seu token do GitHub

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

  const fetchGithubFollowers = async () => {
    const token = "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"; // Substitua pelo seu token do GitHub

    try {
      const response = await axios.get("https://api.github.com/users/andersonsoares12/followers", {
        headers: {
          Authorization: `token ${token}`,
          "X-GitHub-Api-Version": "2022-11-28",
        },
      });
      setFollowers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      {userData.login ? (
        <>
          <Text>Detalhes do Usuário</Text>
          <Image source={{ uri: userData.avatar_url }} style={styles.avatar} />
          <Text style={styles.name}>{userData.name}</Text>
          <Text style={styles.bio}>{userData.bio}</Text>

          <Text>Seguidores</Text>
          <FlatList
            data={followers}
            renderItem={({ item }) => (
              <View style={styles.followerItem}>
                <Image source={{ uri: item.avatar_url }} style={styles.followerAvatar} />
                <Text>{item.login}</Text>
              </View>
            )}
            keyExtractor={(item) => item.id.toString()}
            style={styles.followerList}
          />
        </>
      ) : (
        <Text style={styles.loadingText}>Carregando...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    textAlign: "center",
    paddingHorizontal: 20,
  },
  loadingText: {
    fontSize: 18,
  },
  followerList: {
    marginTop: 20,
  },
  followerItem: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    flexDirection: "row",
    alignItems: "center",
  },
  followerAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
});

export default DetailsScreen;
