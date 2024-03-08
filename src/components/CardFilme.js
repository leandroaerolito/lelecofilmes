import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import imagemAlternativa from "../../assets/images/foto-alternativa.jpg";

export default function CardFilme({ filme }) {
  /* Extraindo as informações do filme (título e imagem da capa)*/
  const { title, poster_path } = filme;

  return (
    <View style={estilos.card}>
      <Image
        /*resizeMode="cover"*/
        style={estilos.imagem}
        source={{ uri: `https://image.tmdb.org/t/p/w500/${poster_path}` }}
      />
      <View style={estilos.corpo}>
        <Text style={estilos.titulo}> {title} </Text>
        <View style={estilos.botoes}>
          <Pressable style={estilos.botao}>
            <Text style={estilos.textoBotao}>leia mais</Text>
          </Pressable>
          <Pressable style={estilos.botao}>
            <Text style={estilos.textoBotao}>salvar</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  card: {
    marginVertical: 7,
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "#eaac33",
    justifyContent: "space-between",
    alignContent: "center",
  },

  imagem: {
    height: 150,
    width: 100,
    flex: 1,
  },

  corpo: { flex: 2 },
  titulo: {
    backgroundColor: "#eaac33",
    color: "#3e302c",
    textAlign: "center",
    paddingVertical: 8,
    fontSize: 16,
    fontWeight: "bold",
  },
  botoes: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 30,
  },

  botao: {
    borderColor: "#3e320c",
    borderWidth: 2,
    padding: 8,
    borderRadius: 10,
  },

  textoBotao: {
    color: "#eaac33",
    fontSize: 12,
    //textTransform: "uppercase",
    fontWeight: "bold",
  },
});
