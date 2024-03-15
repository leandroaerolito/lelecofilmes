import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import SafeContainer from "../components/SafeContainer";
import ImagemAlternativa from "../../assets/images/foto-alternativa.jpg";
import { useState } from "react";

export default function Detalhes({ route }) {
  const { filme } = route.params;
  console.log(filme);

  const {
    title: titulo,
    backdrop_path: cartazFilme,
    release_date: dataLancamento,
    overview: descricao,
    vote_average: notaFilme,
  } = filme;

  /* Essa constante é para quebrar o formato da data para o formato brasileiro, por padrão, ele vem no formato USA*/
  const formataData = (data) => {
    /* Quebramos (split) a data em pedaços (ano/mês/dia) */
    const [ano, mes, dia] = data.split("-");

    return `${dia}/${mes}/${ano}`;
  };

  return (
    <SafeContainer>
      <View style={estilos.subContainer}>
        <ImageBackground
          style={estilos.imagemFundo}
          source={
            cartazFilme
              ? {
                  uri: `https://image.tmdb.org/t/p/original/${cartazFilme}`,
                }
              : ImagemAlternativa
          }
        >
          <Text style={estilos.titulo}>{titulo}</Text>
        </ImageBackground>

        <View style={estilos.conteudo}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={estilos.descritivos}>
              <Text style={[estilos.texto, estilos.avaliacao]}>
                Avaliação: {notaFilme.toFixed(2)}
              </Text>

              <Text style={[estilos.texto, estilos.lancamento]}>
                Lançamento:{" "}
                {dataLancamento ? formataData(dataLancamento) : "Indisponível"}
              </Text>
            </View>
            <Text style={[estilos.texto, estilos.descricao]}>
              {descricao || (
                <Text style={{ fontStyle: "italic" }}>Filme sem descrição</Text>
              )}
            </Text>
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
    backgroundColor: "#EACC3399",
    //backgroundColor: "rgba(0,0,0,0.75)",
    color: "#fff",
    fontFamily: "NotoSans",
    fontWeight: "bold",
    paddingLeft: 10,
    textAlign: "center",
    fontSize: 18,
    marginTop: 200,
    flex: 1,
    paddingTop: 10,
    fontWeight: "bold",
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

  avaliacao: { color: "#3e320c" },
  lancamento: { color: "#3e320c" },
  descricao: { color: "#3e320c" },

  descritivos: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#eaac33",
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    padding: 8,
  },
});
