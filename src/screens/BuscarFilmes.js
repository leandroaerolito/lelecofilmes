import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  Vibration,
  View,
} from "react-native";
import SafeContainer from "../components/SafeContainer";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";

export default function BuscarFilmes({ navigation }) {
  const [filme, setFilme] = useState("");

  const filmeDigitado = (valorDigitado) => {
    setFilme(valorDigitado);
  };

  const [text, onChangeText] = React.useState("");
  const procurar = () => {
    /* OUTRA FORMA DE FAZER: 
       if (!filme) { 
        return Alert.alert ("Ops!", "Você deve digitar um filme!");
        }
        ====> Se o 'state' filme não foi definido/indicado/preenchido
    */
    if (filme === "") {
      Vibration.vibrate(1000);
      return Alert.alert("Ops! Você deve digitar um filme!");
    }

    /* Redirecionamento para a tela de Resultados paassando o filme para ela através do segundo parâmetro do método 'navigate' OBS: Não se esqueça de definir a prop navigation no componente */
    navigation.navigate("Resultados", { filme });
  };

  return (
    <SafeContainer>
      <View style={estilos.subContainer}>
        <Text>Avatar? Titanic? A trilogia "Senhor dos Anéis"?</Text>
        <Text>Localize um filme que você viu ou gostaria de ver.</Text>

        <View style={estilos.formulario}>
          <Ionicons name="film-sharp" size={32} color="#eaac33" />
          <TextInput
            style={estilos.BuscarFilmes}
            onChangeText={filmeDigitado}
            //value={text}
            placeholder="Digite o nome do filme"
            placeholderTextColor="#eaac33"
            maxLength={40}
            enterKeyHint="search"
            onSubmitEditing={procurar}
          />
        </View>
        <Button title="Pesquisar" color={"#eaac33"} onPress={procurar} />
      </View>
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({
  subContainer: {
    flex: 1,
    padding: 16,
    marginTop: 30,
  },

  BuscarFilmes: {
    height: 40,
    // margin: 12,
    marginTop: 30,
    marginBottom: 30,
    borderWidth: 1,
    padding: 10,
    width: "85%",
    color: "#eaac33",
    borderColor: "#eaac33",
  },

  formulario: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
