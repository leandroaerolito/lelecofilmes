# DAHORA Filmes (LelecoFilmes)

Exemplo de app nativo multiplataforma criado com React Native e Expo.

## Branco 08-detalhes-de-tela-do-filme

- Criação da tela `Detalhes.js` e adição dela à `Stack` em `App.js`
- Em `CardFilme`, utilização do hook `useNavigation` para funcionalidade de navegação do botão **Leia mais**.
- Em `App.js` na `Stack.Screen Detalhes`, adicionamos uma prop `options` configurada para exibir um `Button` responsável por permitir a navegação direta para `Home`.

Branch 07-melhorias-nos-resultados
Loading usando ActivityIndicator
Em Resultados, aplicamos à FlatList componentes personalizados para o caso de não haver filmes na busca (NaoEncontrado/ListEmptyComponent) e para separar cada elemento da FlatList (Separador/ItemSeparatorComponent)
Em CardFilme colocamos uma condicional para o carregamento de imagem alternativa caso algum filme não tenha imagem, e também ícones nos botões.

## Branch 06-tela-de-resultados-e-programação-api

Resumo
API de Filmes
Cadastro na API TheMovieDB
Criação de uma chave de API (API Key)
Configuração de variável ambiente através do arquivo .env contendo a API Key via Expo. (arquivo ENV são ignorados no versionamento)
Consumo de dados da API
Instalação da lib Axios
Configuração/exportação do services/api-moviedb.js contendo a programação básica de acesso à API para uso em diferentes partes do app.
Exibição dos resultados
Utilização do componente FlatList para listagem dinâmica dos resultados
Criação do componente CardFilme com uso de prop (filme) com carregamento do title e do poster_path (imagem) de cada filme.

### RESUMO

#### API de Filmes

- Cadastro na API TheMovieDB
- Criação uma chave de API (API Key)
- Configuração de variável ambiente através do arquivo `.env` contendo a API Key via Expo (arquivo ENV são ignorados no versionamento).

#### Consumo de dados da API

- Instalação da lib **Axios**
- Configuração do `services/api-moviedb.js` contendo a programação báscia de acesso à API para uso em diferentes partes do app.

#### Exibição dos resultados

- Utilização do componente `FlatList`para listagem dinâmica dos resultados
- Criação do componente `CardFilme` com uso de props (`filme`) com carregamento do `title` e do `poster_path`(imagem) de cada filme.

## Branch 05-desafio--tela-BuscarFilmes

### Solução: recursos utilizados

- Componentes/Recursos nativos: `TextInput`, `Vibration` e `Alert`
- Eventos: -`onChangeText` no `TextInput` para captura em tempo real do nome do filme digitado e atualização no `state` usando a função `filmeDigitado`
  - `onPress` no `Button` para acionamento da função `buscarFilmes`
  - `onSubmitEditing` no `TextInput` para acionamento da função `buscarFilmes`

## Branch 04

Para gerenciar os recursos de navegação é necessário usar uma biblioteca de navegação.

As mais conhecidas são a **React Navegation** e a **Expo Router**.

Atualmente (fevereiro 2024), a biblioteca mais usada e considerada padrão é a **React Navegation**.

### SITE OFICIAL

- React Navigation: https://reactnavigation.org
- Expo Router: https://docs.expo.dev/router/introduction

### COMO USAR O REACT NAVEGATION COM NAVEGAÇÃO 'Stack'

#### Pacotes de instalação

- React Navegation: `npm install @react-navigation/native`

- Dependências para navegação:
  `npx expo install react-native-screens react-native-safe-area-context`

- Mecanismo de navegação stack: npm install @react-navigation/native-stack

#### Configurações

No `App.js` importamos o `NavigationContainer` e o `createNativeStackNavigator`, em seguida os configuramos para determinar o `Stack.Navigator` e as telas `Stack.Screen` e seus componentes correspondentes (no momento, apenas `Home`, `Privacidade` e `Sobre`).

Em `Home`, configuramos os botões para navegar para as telas usando a prop `navigation` e o método `navigate`.

## Branch 03

- Criação das telas básicas: Sobre a Privacidade
- Componente `Scrollview` para conteúdos maiores que a tela com suporte à rolagem.
- Componente `Linking` para criação de link para a web.

## Branch 02

### Utilização de fontes adicionais

- Download dos arquivos de fonte (formato TTF ou OTF)
- Colocação na pasta `assets\fonts`
- Instalação das libs `expo-fonts` e `expo-splash-screen`
- Importação das fontes com auxílio dos `hooks` `usefonts` e `useCallback`.
- Aplicação das fontes usando regras de StyleSheet.

Para mais detalhes sobre o processo veja a documentação do Expo Fonts e do Expo Splash Screen:
https://docs.expo.dev/versions/latest/sdk/font/
https://docs.expo.dev/versions/latest/sdk/splash-screen/

## DICA

Instale a extensão **ES7+ React** no VSCode para facilitar a programação dos componentes.
