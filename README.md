
# 🦕 Paleos - Aplicativo de Fósseis

Aplicativo mobile desenvolvido com **React Native** e **Expo**.  
Permite visualizar informações sobre fósseis marinhos, terrestres e aéreos.  
Conta com navegação entre diversas telas e consumo de uma API via **Axios**.

---

## 🚀 Tecnologias Utilizadas

- **React Native** `0.79.2`
- **React** `19.0.0`
- **Expo** `~53.0.9`
- **React Navigation**:
  - `@react-navigation/native` `^7.1.9`
  - `@react-navigation/native-stack` `^7.3.13`
  - `@react-navigation/bottom-tabs` `^7.3.13`
- **Axios** `^1.9.0`
- **Expo Modules**:
  - `expo-av` `~15.1.4`
  - `expo-file-system` `~18.1.10`
  - `expo-image-picker` `~16.1.4`
  - `expo-status-bar` `~2.2.3`
- **React Native Gesture Handler** `~2.24.0`
- **React Native Reanimated** `^3.17.5`
- **React Native Safe Area Context** `^5.4.0`
- **React Native Screens** `~4.10.0`
- **React Native SVG** `^15.12.0`
- **React Native SVG Transformer** (dev) `^1.5.1`
- **React Native Web** `^0.20.0`
- **Ngrok** (dev) `^5.0.0-beta.2`
- **Babel Core** (dev) `^7.20.0`
---

## 📂 Estrutura de Pastas

```
src
├── assets
│   ├── svgs
│   └── videos
│
├── components
│   ├── CardFossilMarinho.js
│   └── ConfirmDeleteModal.js
│
├── navigation
│   └── BottomTabs.js
│
├── screens
│   ├── screenAereos
│   │   ├── AddScreenAereo.js
│   │   ├── AereosScreen.js
│   │   ├── EditScreenAereo.js
│   │   └── ViewDetailsScreen.jsx
│   │
│   ├── screensMarinhos
│   │   ├── AddScreenMarinho.js
│   │   ├── EditScreen.js
│   │   ├── MarinhosScreen.js
│   │   └── ViewDetailsScreen.jsx
│   │
│   ├── ScreenTerrestres
│   │   ├── AddScreenTerrestre.js
│   │   ├── EditscreenTerrestre.js
│   │   ├── TerrestresScreen.js
│   │   ├── ViewDetailsScreenTerrestres.jsx
│   │   ├── HomeScreen.jsx
│   │   └── OnboardingScreen.js
│
└── service
    └── api.jsx

(root)
├── App.js
├── app.json
├── index.js
└── .gitignore

```

---

## 🛠️ Como Executar o Projeto

### ✅ Pré-requisitos

- Node.js (versão LTS)
- Expo CLI (`npm install -g expo-cli`)
- App **Expo Go** instalado no celular
- (Opcional) Emulador Android ou iOS

### ✅ Passos

1. Clone o repositório:

```bash
git clone https://github.com/ProjetoPaleos/Paleos-FrontEnd.git
cd Paleos-FrontEnd
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor:

```bash
npm start
```

4. Abra o app:

- **Expo Go**: Escaneie o QR Code
- **Emulador**: `npm run android` ou `npm run ios`
- **Web**: `npm run web`

---

## 🌐 API Consumida

- **Base URL:** `https://paleos.azurewebsites.net/`
- Serviço configurado em: `src/service/api.jsx`

---

## 🧭 Funcionalidades

- ✅ Tela de boas-vindas (Onboarding)
- ✅ Visualização de fósseis (Marinhos, Terrestres, Aéreos)
- ✅ Detalhamento de fósseis
- ✅ Upload de imagens (`expo-image-picker`)
- ✅ Navegação por abas (`BottomTabs`)

---

## 📜 Scripts Disponíveis

- `npm start` → Inicia o Metro Bundler
- `npm run android` → Executa no emulador Android
- `npm run ios` → Executa no emulador iOS
- `npm run web` → Executa no navegador

---

## ⚠️ Observações Importantes

- Dispositivo e PC devem estar na **mesma rede** ao usar Expo Go.
- `react-native-svg` deve ser versão **15.11.2**.
- Possíveis problemas de rede (`AxiosError`) se a API estiver fora do ar ou com problemas de SSL.

---

## 🤝 Contribuição

Sinta-se à vontade para abrir **Issues** e **Pull Requests**!

---

## 📝 Licença

Este projeto está sob a licença **MIT**.
