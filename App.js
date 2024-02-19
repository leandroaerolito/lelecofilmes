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
    "Montserrat-Variable": require("./assets/fonts/Montserrat-Variable.ttf"),
    NotoSans: require("./assets/fonts/NotoSans-VariableFont.ttf"),
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
          <Text style={estilos.titulo}>Assista de qualquer lugar</Text>
        </View>

        <View style={estilos.viewBotoes}>
          <Pressable style={estilos.botao}>
            <Text style={estilos.textoBotao}>Pesquisar</Text>
            <Ionicons name="search" size={12} color="white" />
          </Pressable>

          <Pressable style={estilos.botao}>
            <Text style={estilos.textoBotao}>Favoritos</Text>
            <Ionicons name="star" size={12} color="white" />
          </Pressable>
        </View>

        <View style={estilos.viewRodape}>
          <Pressable style={estilos.botaoRodape}>
            <Text style={estilos.textoBotao}>
              <Ionicons name="lock-closed" size={16} color="white" />
              Privacidade
            </Text>
          </Pressable>
          <Pressable style={estilos.botaoRodape}>
            <Text style={estilos.textoBotao}>
              <Ionicons name="information-circle" size={16} color="white" />
              Sobre
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </>
  );
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "white",
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
    width: 200,
    height: 200,
  },

  titulo: {
    fontFamily: "Montserrat-Variable",
    fontSize: 20,
    color: "#eaac33",
    marginBottom: 35,
    marginTop: 15,
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
    fontFamily: "NotoSans",
    fontSize: 16,
    fontWeight: "bold",
  },

  viewRodape: {
    flex: 0.5,
    backgroundColor: "#eaac33",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },

  botaoRodape: {
    padding: 13,
  },
});
