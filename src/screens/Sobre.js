// src/screens/Sobre.js

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Linking,
  ScrollView,
} from "react-native";
import SafeContainer from "../components/SafeContainer";
import logomoviedb from "../../assets/images/logo-tmdb.png";

export default function Sobre() {
  return (
    <SafeContainer>
      <View style={estilos.subContainer}>
        <ScrollView>
          <Text style={estilos.subtitulo}>Sobre o app Leleco Filmes</Text>
          <Text style={estilos.texto}>
            O <Text style={estilos.nomeApp}>Leleco Filmes</Text> é um aplicativo
            com a finalidade de permitir a busca por informações sobre filmes
            existentes na base de dados pública disponibilizada pelo site The
            Movie Database (TMDb).
          </Text>

          <View>
            <Pressable
              onPress={() =>
                Linking.openURL("https://www.themoviedb.org/?language=pt-BR")
              }
            >
              <Image style={estilos.logoMovie} source={logomoviedb}></Image>
            </Pressable>
          </View>

          <Text style={estilos.texto}>
            Ao localizar um filme, o usuário pode visualizar informações como
            título, data de lançamento, nota média de avaliação e uma breve
            descrição sobre o filme e, caso queira, salvar estas informações em
            uma lista no próprio aplicativo para visualização posterior.
          </Text>
          <Text style={estilos.texto}>
            O aplicativo poderá receber novos recursos conforme o feedback e
            demanda dos usuários.
          </Text>
          <Text style={estilos.texto}>LELECO FILMES &copy; 2024</Text>
        </ScrollView>
      </View>
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({
  subContainer: {
    flex: 1,
    padding: 16,
  },
  subtitulo: {
    fontFamily: "NotoSans",
    fontWeight: "bold",
    marginVertical: 8,
    fontSize: 18,
  },
  texto: {
    marginVertical: 12,
    fontSize: 18,
  },

  nomeApp: {
    fontWeight: "bold",
    color: "#eaac33",
  },

  logoMovie: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 25,
    marginBottom: 25,
    alignItems: "center",
    resizeMode: "contain",
  },
});
