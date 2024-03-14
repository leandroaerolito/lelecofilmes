// src/screens/Favoritos.js

import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  Alert,
} from "react-native";
import SafeContainer from "../components/SafeContainer";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Favoritos() {
  /* State para registrar os dados carregados do storage */
  const [listaFavoritos, setListaFavoritos] = useState([]);

  /* useEffect será disparado assim que o usuário entrar na tela `Favoritos` (portanto, somente uma vez) */
  useEffect(() => {
    const carregarFavoritos = async () => {
      try {
        /* Acessamos o storage criado previamente e guardamos as strings de dados. */
        const dados = await AsyncStorage.getItem("@favoritosleleco");

        /* Se houver dados, transformamos em objetos (JSON.parse) e atualizamos o state com a lista de favoritos.  */
        if (dados) {
          setListaFavoritos(JSON.parse(dados));
        }
      } catch (error) {
        console.error("Erro ao carregar os dados: " + error);
        Alert.alert("Erro", "Erro ao carregar os dados.");
      }
    };
    carregarFavoritos();
  }, []);

  /* Log no state */
  console.log(listaFavoritos);

  return (
    <SafeContainer>
      <View style={estilos.subContainer}>
        <View style={estilos.viewFavoritos}>
          <Text style={estilos.texto}>Esta é a sua lista de FAVORITOS</Text>
        </View>
      </View>
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({
  subContainer: {
    flex: 1,
    padding: 16,
    width: "100%",
  },

  texto: {
    marginVertical: 8,
    color: "#eaac33",
    fontSize: 18,
    fontFamily: "NotoSans",
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 30,
  },
});
