
# 🦕 Paleos - Aplicativo de Fósseis

Aplicativo mobile desenvolvido com **React Native** e **Expo**.  
Permite visualizar informações sobre fósseis marinhos, terrestres e aéreos.  
Conta com navegação entre diversas telas e consumo de uma API via **Axios**.

---

## 🚀 Tecnologias Utilizadas

- **React Native** `0.79.2`
- **Expo** `~53.0.9`
- **React Navigation**:
  - `@react-navigation/native`
  - `@react-navigation/native-stack`
  - `@react-navigation/bottom-tabs`
- **Axios** para consumo de API
- **Expo Modules**: `expo-av`, `expo-file-system`, `expo-image-picker`, `expo-status-bar`
- **React Native SVG**

---

## 📂 Estrutura de Pastas

```
src
├── assets
│   ├── svgs
│   └── videos
│
├── components
│   └── CardFossilMarinho.js
│
├── navigation
│   └── BottomTabs.js
│
├── screens
│   ├── AddScreen.js
│   ├── AereosScreen.js
│   ├── HomeScreen.js
│   ├── MarinhosScreen.js
│   ├── OnboardingScreen.js
│   ├── TerrestresScreen.js
│   └── ViewDetailsScreen.jsx
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
git clone <url-do-repositório>
cd paleos
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
