import { Button, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/screens/Home";
import Sobre from "./src/screens/Sobre";
import Privacidade from "./src/screens/Privacidade";
import Pesquisar from "./src/screens/BuscarFilmes";
import Resultados from "./src/screens/Resultados";
import Detalhes from "./src/screens/Detalhes";
/*import { useNavigation } from "@react-navigation/native";*/

// Criação/Inicialização do mecanismo Stack
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: { backgroundColor: "#eaac33" },
            headerTintColor: "#3e302c",
          }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Sobre"
            component={Sobre}
            options={{ title: "Conheça nosso app" }}
          />
          <Stack.Screen name="Privacidade" component={Privacidade} />

          <Stack.Screen
            name="Pesquisar"
            component={Pesquisar}
            options={{ title: "Qual filme quer pesquisar?" }}
          />
          <Stack.Screen name="Resultados" component={Resultados} />
          <Stack.Screen
            name="Detalhes"
            component={Detalhes}
            options={({ navigation }) => {
              return {
                headerRight: () => (
                  <Button
                    color="black"
                    onPress={() => navigation.navigate("Home")}
                    title="Home"
                  />

                  /*ESTA É UMA SEGUNDA OPÇÃO DE FAZER ESTA NAVEGAÇÃO, A ESCOLHIDA PELO PROFESSOR*/
                ),
              };
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
