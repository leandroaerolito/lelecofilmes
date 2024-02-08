import {
  Button,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

import logo from "./assets/images/logo.png";

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={estilos.container}>
        <View style={estilos.viewLogo}>
          <Image source={logo} style={estilos.logo} />
          <Text>Leleco Filmes</Text>
        </View>

        <View style={estilos.viewBotoes}>
          <Button title="Pesquisar" />
          <Button title="Favoritos" />
        </View>

        <View style={estilos.viewRodape}>
          <Button title="Privacidade" />
          <Button title="Sobre" />
        </View>
      </SafeAreaView>
    </>
  );
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
    flex: 1,
  },

  viewLogo: {
    backgroundColor: "white",
    flex: 4,
    marginLeft: 40,
    marginRight: 40,
    alignItems: "center",
    justifyContent: "flex-end",
    width: "80%",
  },

  logo: {
    width: 128,
    height: 128,
  },

  viewBotoes: {
    backgroundColor: "grey",
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-around",
    marginLeft: 40,
    marginRight: 40,
    alignItems: "flex-start",
    width: "80%",
  },

  viewRodape: {
    flex: 0.5,
    backgroundColor: "red",
    marginRight: 40,
    marginLeft: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "80%",
  },
});
