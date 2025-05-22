
====================================================
🦕 PALEOS - APLICATIVO DE FÓSSEIS
====================================================

Aplicativo mobile desenvolvido com **React Native** e **Expo**.
Permite visualizar informações sobre fósseis marinhos, terrestres e aéreos.
Conta com navegação entre diversas telas e consumo de uma API via **Axios**.

----------------------------------------------------
🚀 TECNOLOGIAS UTILIZADAS
----------------------------------------------------
✅ React Native 0.79.2
✅ Expo ~53.0.9
✅ React Navigation:
   - @react-navigation/native
   - @react-navigation/native-stack
   - @react-navigation/bottom-tabs
✅ Axios
✅ Expo Modules: expo-av, expo-file-system, expo-image-picker, expo-status-bar
✅ React Native SVG

----------------------------------------------------
📂 ESTRUTURA DE PASTAS
----------------------------------------------------
src
 ├── assets
 │    ├── svgs
 │    └── videos
 ├── components
 │    └── CardFossilMarinho.js
 ├── navigation
 │    └── BottomTabs.js
 ├── screens
 │    ├── AddScreen.js
 │    ├── AereosScreen.js
 │    ├── HomeScreen.js
 │    ├── MarinhosScreen.js
 │    ├── OnboardingScreen.js
 │    ├── TerrestresScreen.js
 │    └── ViewDetailsScreen.jsx
 └── service
      └── api.jsx

----------------------------------------------------
🛠️ COMO EXECUTAR O PROJETO
----------------------------------------------------

✅ Pré-requisitos:
- Node.js (LTS)
- Expo CLI (npm install -g expo-cli)
- App Expo Go
- (Opcional) Emulador Android ou iOS

✅ Passos:
1. Clone o repositório:
   git clone <url-do-repositório>
   cd paleos
2. Instale as dependências:
   npm install
3. Inicie o servidor:
   npm start
4. Abra o app:
   - Expo Go: Escaneie o QR Code
   - Emulador: npm run android / npm run ios
   - Web: npm run web

----------------------------------------------------
🌐 API CONSUMIDA
----------------------------------------------------
🔗 Base URL: https://paleos.azurewebsites.net/
📁 Serviço configurado: src/service/api.jsx

----------------------------------------------------
🧭 FUNCIONALIDADES
----------------------------------------------------
✅ Tela de boas-vindas (Onboarding)
✅ Visualização de fósseis (Marinhos, Terrestres, Aéreos)
✅ Detalhamento de fósseis
✅ Upload de imagens (expo-image-picker)
✅ Navegação por abas (BottomTabs)

----------------------------------------------------
📜 SCRIPTS DISPONÍVEIS
----------------------------------------------------
- npm start → Inicia o Metro Bundler
- npm run android → Executa no emulador Android
- npm run ios → Executa no emulador iOS
- npm run web → Executa no navegador

----------------------------------------------------
⚠️ OBSERVAÇÕES IMPORTANTES
----------------------------------------------------
⚠️ Dispositivo e PC devem estar na mesma rede ao usar Expo Go.
⚠️ react-native-svg deve ser versão 15.11.2.
⚠️ Possíveis problemas de rede (AxiosError) se a API estiver fora do ar.

----------------------------------------------------
🤝 CONTRIBUIÇÃO
----------------------------------------------------
Sinta-se à vontade para abrir Issues e Pull Requests!

----------------------------------------------------
📝 LICENÇA
----------------------------------------------------
Este projeto está sob a licença **MIT**.

====================================================
