import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    padding: 10,
    margin: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    width: 350,
  },
  esquerda: {
    width: 350,
    textAlign: "left",
  },
  direita: {
    width: 350,
    textAlign: "right",
    fontWeight:'bold'
  },
  form: {
    justifyContent: "center",
    width: 350,
    marginTop: 30,
  },
  btn: {
    width: 200,
    height: 50,
    backgroundColor: "#dd0000",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  img: {
    width: 300,
    height: 45,
    marginTop: 40,
  },
  baixo: {
    flexDirection: "column",
    alignItems: "flex-end",
  },
  entrar: {
    color: "white",
    fontWeight: "bold",
  },
  contBaixo: {
    width: 350,
    height: 40,
    justifyContent: "flex-end",
    marginTop: 10,
  },
  botao: {
    marginTop: 20,
  },
});

export default styles;
