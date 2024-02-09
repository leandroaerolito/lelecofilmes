import {
  Button,
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

import logo from "./assets/images/lelecofilmes-logo.png";
import { Ionicons } from "@expo/vector-icons";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

/* Manter a tela splash visível enquanto não programarmos a ação de ocultar*/
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "Monoton-Regular": require("./assets/fonts/Monoton-Regular.ttf"),
  });

  /* Função atrelada ao hook useCallback. 
      Quando uma função está conectada ao useCallback, garantimos que a referência dela é armazenada na memória somente uma vez. */
  const aoAtualizarLayout = useCallback(async () => {
    /* Se estiver tudo 'ok' com o carregamento */
    if (fontsLoaded || fontError) {
      /* Escondemos o splashscreen */
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={estilos.container} onLayout={aoAtualizarLayout}>
        <View style={estilos.viewLogo}>
          <Image source={logo} style={estilos.logo} />
          <Ionicons name="search" size={24} color="black" />
          <Text style={estilos.titulo}>Assista de qualquer lugar</Text>
        </View>

        <View style={estilos.viewBotoes}>
          <Pressable style={estilos.botao}>
            <Text style={estilos.textoBotao}>Pesquisar</Text>
            <Ionicons name="search" size={16} color="white" />
          </Pressable>
          <Pressable style={estilos.botao}>
            <Text style={estilos.textoBotao}>Favoritos</Text>
            <Ionicons name="star" size={16} color="white" />
          </Pressable>
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

  titulo: {
    fontFamily: "Monoton-Regular",
    fontSize: 16,
    color: "#5a51a6",
  },

  viewBotoes: {
    backgroundColor: "white",
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-around",
    marginLeft: 40,
    marginRight: 40,
    alignItems: "flex-start",
    width: "80%",
  },

  botao: {
    borderStyle: "solid",
    borderWidth: 2,
    padding: 10,
    backgroundColor: "#eaac33",
    borderRadius: 10,
    fontWeight: "bold",
    fontSize: 50,
  },

  textoBotao: {
    color: "#3e302c",
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
