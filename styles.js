import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "blue",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
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
    padding: 20,
  },
  bio: {
    fontSize: 16,
    textAlign: "center",
    paddingHorizontal: 50,
  },
  bioText: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "500",
    paddingHorizontal: 20,
  },
  repoList: {
    marginTop: 20,
  },
  repoItem: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  repoName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  repoLanguage: {
    fontSize: 14,
    color: "#666",
  },
  loadingText: {
    fontSize: 18,
  },
  padding: {
    paddingVertical: 20,
  },
});

export default styles;
