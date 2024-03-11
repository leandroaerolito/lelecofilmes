import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import SafeContainer from "../components/SafeContainer";
import ImagemAlternativa from "../../assets/images/foto-alternativa.jpg";

export default function Detalhes() {
  return (
    <SafeContainer>
      <View style={estilos.subContainer}>
        <ImageBackground style={estilos.imagemFundo} source={ImagemAlternativa}>
          <Text style={estilos.titulo}>Título do filme...</Text>
        </ImageBackground>

        <View style={estilos.conteudo}>
          <ScrollView>
            <Text style={[estilos.texto, estilos.avaliacao]}>Avaliação...</Text>
            <Text style={[estilos.texto, estilos.lancamento]}>
              Lançamento...
            </Text>
            <Text style={[estilos.texto, estilos.descricao]}>Descrição...</Text>
          </ScrollView>
        </View>
      </View>
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({
  subContainer: {
    flex: 1,
    width: "100%",
    //padding: 25,
  },
  imagemFundo: {
    height: 250,
    justifyContent: "center",
  },

  titulo: {
    //backgroundColor: "#eaac33",
    backgroundColor: "rgba(0,0,0,0.75)",
    color: "#fff",
    fontFamily: "NotoSans",
    fontWeight: "bold",
    paddingLeft: 10,
    textAlign: "center",
    fontSize: 18,
  },
  conteudo: {
    padding: 16,
    flex: 1,
    /* Apenas para garantir a ocupação do espaço em caso de texto muito grande */
  },

  texto: {
    paddingVertical: 4,
    fontSize: 16,
    fontWeight: "bold",
  },

  avaliacao: { color: "blue" },
  lancamento: { color: "red" },
  descricao: { color: "gray" },
});
