// src/screens/Resultados.js

import { StyleSheet, Text, View } from "react-native";
import SafeContainer from "../components/SafeContainer";

/* Pro route
   Prop especial e definida pelo React Navigation. Através dela que é possível acessar valores passados por meio de navegação entre telas. */

export default function Resultados({ route }) {
  return (
    <SafeContainer>
      <View style={estilos.subContainer}>
        <Text style={estilos.texto}>Você buscou por:</Text>
      </View>
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({
  subContainer: {
    flex: 1,
    padding: 16,
  },

  texto: {
    marginVertical: 12,
    fontSize: 18,
  },
});
