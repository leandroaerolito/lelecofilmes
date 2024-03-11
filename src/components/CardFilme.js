import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import imagemAlternativa from "../../assets/images/foto-alternativa.jpg";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function CardFilme({ filme }) {
  /* Extraindo as informações do filme (título e imagem da capa)*/
  const { title, poster_path } = filme;

  const navigation = useNavigation();

  return (
    <View style={estilos.card}>
      <Image
        /*resizeMode="cover"*/
        style={estilos.imagem}
        source={
          poster_path
            ? { uri: `https://image.tmdb.org/t/p/w500/${poster_path}` }
            : imagemAlternativa
        }
      />
      <View style={estilos.corpo}>
        <Text style={estilos.titulo}> {title} </Text>
        <View style={estilos.botoes}>
          <Pressable
            style={estilos.botao}
            onPress={() => navigation.navigate("Detalhes", { filme })}
          >
            <Text style={estilos.textoBotao}>
              <Ionicons name="book" size={12} /> Leia mais
            </Text>
          </Pressable>
          <Pressable style={estilos.botao}>
            <Text style={estilos.textoBotao}>
              {" "}
              <Ionicons name="add-circle" size={12} /> Salvar
            </Text>
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
