# 🐝 MeliponaOS — Plataforma de Gestão, Mapeamento e Ecologia para Meliponicultura

<p align="center">
  <img src="./assets/logo.png" alt="MeliponaOS Logo" width="220" style="border-radius: 24px; box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
</p>

<p align="center">
  <strong>O Sistema Operacional Inteligente para Criadores de Abelhas Nativas Sem Ferrão (ASF)</strong><br>
  <em>Mapeamento via Satélite em Tempo Real • Alcance Biológico • Simulador 3D WebGL • Telemetria • PWA Offline • Firebase Cloud</em>
</p>

<p align="center">
  <a href="https://marcosaosf.github.io/ProjetoMeliponicultura/"><img src="https://img.shields.io/badge/Acessar_Online-GitHub_Pages-FFC300?style=for-the-badge&logo=github&logoColor=black" alt="Acessar Online"></a>
  <img src="https://img.shields.io/badge/Status-100%25_Operacional-10B981?style=for-the-badge" alt="Status Operacional">
  <img src="https://img.shields.io/badge/PWA-Instal%C3%A1vel_Mobile-3B82F6?style=for-the-badge" alt="PWA Instalável">
</p>

---

## 📌 Visão Geral do Projeto

O **MeliponaOS** é uma aplicação web progressiva (PWA) de alta performance projetada para apoiar meliponicultores, biólogos e entusiastas da conservação ambiental no manejo científico de abelhas nativas brasileiras sem ferrão. 

A plataforma divide de forma limpa o uso **prático de campo** (satélite de alta resolução com GPS de alta precisão e câmera) da **simulação científica 3D** (Three.js WebGL com dinâmica climática e biomas sazonais).

---

## 🚀 Principais Módulos & Funcionalidades

### 🛰️ 1. Mapa do Meliponário em Satélite Real (`Leaflet.js` + `Esri WorldImagery`)
- **Imagens Reais de Alta Resolução**: Permite identificar árvores, estradas, divisas e construções rurais com dados cartográficos oficiais.
- **Geolocalização Automática & Fallback Silencioso**: Centraliza o satélite instantaneamente nas coordenadas GPS reais do criador de campo (ou por geolocalização aproximada por IP se o GPS for bloqueado, sem alertas invasivos).
- **Busca Global de Endereços**: Campo integrado com o OpenStreetMap Nominatim para navegar instantaneamente digitando o nome do município, bairro ou coordenada.
- **Alcance Real Biológico de Voo (em Metros Reais)**:
  - Desenha círculos precisos na escala do satélite baseados na fisiologia de cada espécie:
    - *Mirim Droryana*: **400m**
    - *Jataí Dourada*: **500m**
    - *Iraí*: **600m**
    - *Manduri*: **1.000m**
    - *Borá*: **1.200m**
    - *Mandaçaia MQA*: **1.500m**
    - *Bugia*: **1.800m**
    - *Uruçu Amarela*: **2.000m**
    - *Uruçu Nordestina*: **2.000m**
    - *Tiúba / Uruçu-Cinzenta*: **2.200m**
    - *Ninhos-Isca PET*: **120m** (alcance feromonado em círculo tracejado verde).
  - **Enquadramento Dinâmico com `fitBounds`**: Ao trocar a espécie de uma caixa (ex: de Jataí para Uruçu), o raio cresce em tempo real e a câmera se afasta automaticamente para mostrar o diâmetro inteiro do pasto.
  - **Botão Liga/Desliga de Raios**: Oculte ou mostre os perímetros amarelos com 1 clique para manter o mapa limpo quando houver muitos enxames concentrados.

### 📷 2. Rastreabilidade Física e Bilhete de Identidade com Câmera
- **Fotos Reais Comprimidas**: Fotografe caixas e árvores com a câmera do celular (`capture="environment"`). As imagens são otimizadas via `<canvas>` (700px, JPEG 0.7) para economizar dados e funcionar rápido até no 3G/4G rural.
- **Categorias de Foto**: Organize fotos por *"Local/Árvore"*, *"Entrada/Pito"* e *"Disco de Cria/Interno"*.
- **Etiqueta QR Code**: Gere códigos QR individuais de alta resolução prontos para imprimir e colar nas caixas físicas em campo.
- **Rota GPS Automática**: Botão que abre a rota passo a passo até a caixa direto no Google Maps.
- **Transferência de Ninho-Isca para Caixa**: Fluxo guiado que transforma a isca PET em caixa racional de madeira, preservando o histórico de fotos e substituindo o perímetro verde pelo alcance de voo amarelo.
- **Gestão de Força & Revisão (>90 dias)**:
  - Avaliação de enxame: **🟢 Forte**, **🟡 Médio** ou **🔴 Fraco**.
  - Alerta automático em vermelho caso uma colmeia esteja há mais de 90 dias sem revisão.
  - Botão *"✍️ Revisar Hoje"* que registra o manejo instantaneamente no diário.

### 🔬 3. Simulador 3D de Voo & Ecologia (Three.js WebGL)
- Localizado na aba **"Espécies Nativas"**, sob a enciclopédia biológica.
- **Botão "Mapear no Radar 3D →"**: Presente em todos os 10 cards das abelhas. Ao clicar, a página rola suavemente até o simulador, seleciona a abelha e dá um flash luminoso na borda.
- **Dinâmica Procedural**: Movimentação individual de campeiras, oscilação de asas, bebedouro de água e árvores nativas.
- **Controle de Chuva & Clima**: Botão integrado de simulação de chuva/tempestade e ciclo de estações do ano (*Primavera Floral*, *Verão*, *Outono*, *Inverno*).

### ⚖️ 4. Comparador Biológico de Espécies
- Modal interativo para comparar lado a lado quaisquer 2 espécies do catálogo.
- Métricas analisadas: Tribo taxonômica, Raio de forrageamento, Área de pasto em km², Produção média anual de mel, Docilidade (%), Tolerância a baixas temperaturas e Características de ninho/geoprópolis.

### 📋 5. Diário Técnico de Manejo com Persistência
- Histórico cronológico permanente salvo no navegador e na nuvem.
- Categorias: *Colheita de Mel*, *Alimentação Suplementar*, *Divisão de Enxame*, *Revisão Geral* e *Transferência de Ninho-Isca*.

### 🌦️ 6. Alertas Climáticos Preventivos
- Análise meteorológica preventiva no topo da aba Meliponário para proteger colmeias contra frentes frias bruscas, tempestades e risco de forídeos.

### 📊 7. Relatório Visual em Canvas & Compartilhamento no WhatsApp
- **Gerador de Imagem (PNG)**: Cria dinamicamente um card institucional elegante em 1200x680 contendo o logotipo oficial, total de colmeias ativas, ninhos-isca e inventário por espécie.
- **Compartilhamento WhatsApp**: Dispara uma mensagem pronta formatada com o balanço do meliponário e convite para outros criadores.

### ☁️ 8. Login Seguro e Nuvem (Firebase Auth + Cloud Firestore)
- **Login com Google** oficial (`signInWithPopup`).
- **Login com E-mail e Senha**.
- **Modo Demonstração (1 Clique)**: Permite testar todos os recursos imediatamente sem precisar de chaves.
- **Regras de Segurança de Produção**: Cada meliponicultor só lê e edita seus próprios dados (`/users/{uid}/meliponario_data`).

---

## 🛠️ Tecnologias Utilizadas

- **Frontend & UI**: HTML5 Semântico, Tailwind CSS, Google Fonts (*Plus Jakarta Sans* e *Inter*), CSS Animations.
- **Mapeamento Satélite**: Leaflet.js v1.9, Esri WorldImagery, OpenStreetMap Nominatim API, ipwho.is Geolocation.
- **Renderização 3D**: Three.js r128, OrbitControls, Custom Shaders, CSS2DRenderer.
- **Data Visualization**: Chart.js v4.4.
- **Autenticação & Nuvem**: Firebase SDK v10 (Auth + Firestore).
- **Processamento de Mídia**: HTML5 Canvas API para compressão de imagens em Base64 e renderização gráfica do relatório.
- **PWA & Mobile**: Service Worker nativo (`sw.js`), Web App Manifest (`manifest.json`), meta tags para iOS/Android.
- **Open Graph**: Integração com WhatsApp, Telegram e redes sociais (`og:image`, `og:title`, `og:description`).

---

## 📲 Instalação no Celular (PWA)

1. Abra o link **[https://marcosaosf.github.io/ProjetoMeliponicultura/](https://marcosaosf.github.io/ProjetoMeliponicultura/)** no navegador do seu celular (Safari no iPhone ou Chrome no Android).
2. Toque no botão de **Compartilhar** (iOS) ou nos **três pontinhos** (Android).
3. Selecione **"Adicionar à Tela de Início"** (ou *"Instalar Aplicativo"*).
4. O MeliponaOS será instalado com o ícone oficial da abelha no seu celular e abrirá em tela cheia como um app nativo.

---

## ✉️ Suporte e Contato

Dúvidas, sugestões de novos recursos ou parcerias:
- **Desenvolvedor**: Marcos Aosf
- **E-mail de Contato**: [marcosaosf2010@gmail.com](mailto:marcosaosf2010@gmail.com)
- **Repositório**: [github.com/MarcosAosf/ProjetoMeliponicultura](https://github.com/MarcosAosf/ProjetoMeliponicultura)

---

<p align="center">
  &copy; 2026 MeliponaOS. Todos os direitos reservados.<br>
  Desenvolvido por <strong>Marcos Aosf</strong>.
</p>
