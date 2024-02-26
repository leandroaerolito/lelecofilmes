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
import React from "react";

export default function BuscarFilmes() {
  const [text, onChangeText] = React.useState("");
  const procurar = () => {
    if (text === "") {
      Vibration.vibrate(1000);
      Alert.alert("Ops! você deve digitar um filme!");
    } else Alert.alert("Você procurou por:", `${text}`);
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
            onChangeText={onChangeText}
            value={text}
            placeholder="Digite o nome do filme"
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
  },

  BuscarFilmes: {
    height: 40,
    // margin: 12,
    marginTop: 15,
    marginBottom: 15,
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
