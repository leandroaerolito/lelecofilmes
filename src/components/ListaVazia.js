import { StyleSheet, Text, View, Image } from "react-native";
import ImgErro from "../../assets/images/erro.png";

export default function ListaVazia() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.textoVazio}>
        Desculpe, nenhum filme foi encontrado!
      </Text>
      <Image style={estilos.ImgErro} source={ImgErro} />
    </View>
  );
}

const estilos = StyleSheet.create({
  textoVazio: {
    color: "#eaac33",
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
    //padding: 20,
    paddingVertical: 50,
  },

  container: {
    //flex: 1,
    //backgroundColor: "black",
  },

  ImgErro: {
    marginLeft: 80,
    //justifyContent: "center",
    alignItems: "center",
  },
});
