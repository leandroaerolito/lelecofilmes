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
import { Ionicons } from "@expo/vector-icons";

export default function Favoritos({ navigation }) {
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

  const excluirTodosFavoritos = async () => {
    Alert.alert(
      "Excluir TODOS?",
      "Tem certeza que deseja excluir todos os favoritos?",
      [
        /* Propriedade style (aparência do botão): SOMENTE NO IOS que faz diferença */
        {
          text: "Cancelar",
          style: "cancel", // verificar
        },
        {
          text: "Sim, manda ver",
          style: "destructive",
        },
      ]
    );
  };

  return (
    <SafeContainer>
      <View style={estilos.subContainer}>
        <View style={estilos.viewFavoritos}>
          <Text style={estilos.texto}>Quantidade:{listaFavoritos.length}</Text>

          <Pressable
            onPress={excluirTodosFavoritos}
            style={estilos.botaoExcluirFavoritos}
          >
            <Text style={estilos.textoBotao}>
              <Ionicons name="trash-outline" size={16} /> Excluir favoritos
            </Text>
          </Pressable>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {listaFavoritos.map((filme) => {
            return (
              <View key={filme.id} style={estilos.item}>
                <Pressable
                  onPress={() => {
                    navigation.navigate("Detalhes", { filme });
                  }}
                  style={estilos.botaoFilme}
                >
                  <Text style={estilos.titulo}>{filme.title}</Text>
                </Pressable>
                <Pressable style={estilos.botaoExcluir}>
                  <Ionicons color="white" name="trash" size={16} />
                </Pressable>
              </View>
            );
          })}
        </ScrollView>
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
    //textAlign: "center",
  },

  viewFavoritos: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },

  botaoExcluirFavoritos: {
    borderWidth: 1,
    borderColor: "red",
    padding: 8,
    borderRadius: 10,
  },
  textoBotao: {
    color: "red",
  },

  item: {
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#eaac33",
    marginBottom: 12,
    borderRadius: 10,
    //alignItems: "center",
  },
  botaoFilme: { flex: 1 },
  titulo: {
    color: "#3e320c",
    fontSize: 16,
  },

  botaoExcluir: {
    backgroundColor: "darkred",
    padding: 4,
    borderRadius: 4,
  },
});
