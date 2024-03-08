// src/screens/Resultados.js

import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import SafeContainer from "../components/SafeContainer";
import CardFilme from "../components/CardFilme";
import { api, apiKey } from "../services/api-moviedb";
import { useEffect, useState } from "react";
import Separador from "../components/Separador";
import ListaVazia from "../components/ListaVazia";

/* Prop route
   Prop especial e definida pelo React Navigation. Através dela que é possível acessar valores passados por meio de navegação entre telas. */

export default function Resultados({ route }) {
  /* State para gerenciar os resultados da busca da API*/
  const [resultados, setResultados] = useState([]);

  /* State para gerenciar o loading (mostrar/esconder) */
  const [loading, setLoading] = useState(true);

  // Capturando o parâmetro filme vindo de BuscarFilmes
  const { filme } = route.params;

  useEffect(() => {
    async function buscarFilmes() {
      try {
        const resposta = await api.get(`/search/movie`, {
          params: {
            include_adult: false,
            language: "pt-BR",
            query: filme,
            api_key: apiKey,
          },
        });

        /* Adicionando os resultados ao state*/
        setResultados(resposta.data.results);

        setLoading(false);
      } catch (error) {
        console.error("Deu ruim: " + error.message);
      }
    }
    buscarFilmes();
  }, []);

  return (
    <SafeContainer>
      <View style={estilos.subContainer}>
        <Text style={estilos.texto}>Você buscou por: {filme}</Text>

        {loading && <ActivityIndicator size="large" color="#eaac33" />}

        {!loading && (
          <View style={estilos.viewFilmes}>
            <FlatList
              data={resultados}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => {
                return <CardFilme filme={item} />;
              }}
              ListEmptyComponent={ListaVazia}
              ItemSeparatorComponent={Separador}
            />
          </View>
        )}
      </View>
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({
  viewFilmes: { marginVertical: 8 },

  subContainer: {
    flex: 1,
    padding: 16,
    width: "100%",
  },

  texto: {
    marginVertical: 12,
    fontSize: 18,
  },
});
