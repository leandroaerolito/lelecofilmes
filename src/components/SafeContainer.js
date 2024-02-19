import { SafeAreaView, StyleSheet, Text } from "react-native";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

/* Manter a tela splash visível enquanto não programarmos a ação de ocultar*/
SplashScreen.preventAutoHideAsync();

export default function SafeContainer({ children }) {
  const [fontsLoaded, fontError] = useFonts({
    "Montserrat-Variable": require("../../assets/fonts/Montserrat-Variable.ttf"),
    NotoSans: require("../../assets/fonts/NotoSans-VariableFont.ttf"),
  });

  const aoAtualizarLayout = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <SafeAreaView onLayout={aoAtualizarLayout} style={estilos.container}>
      {children}
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
