# COPY && PASTE LIST IF YOU FOLLOW ALONG THE TUTORIAL

### Initialize npm project

```bash
npm init -y
```
### Backend Dependencies

```bash
npm install express@4.18.2 express-session@1.18.0 graphql@16.8.1 @apollo/server@4.10.0 @graphql-tools/merge@9.0.3 bcryptjs@2.4.3 connect-mongodb-session@5.0.0 dotenv@16.4.5 graphql-passport@0.6.8 passport@0.7.0 mongoose@8.2.0
```

### edit package.json add "type" and "scripts"
```bash
"type": "module",
"scripts": {
  "start": "node backend/index.js",
  "dev": "nodemon backend/index.js" 
}
```

### nodemon

```bash
npm install nodemon@3.1.0 --save-dev
```
### initialize vite application

```bash
npm create vite@5.1.4 .
```
### add server port to vite.config.js

```bash
server: {
  port:3000,
}
```
### add tailwind and create tailwind.config.js

```bash
npm install -D tailwindcss
npx tailwindcss init
```

### Frontend Dependencies

```bash
npm install graphql@16.8.1 @apollo/client@3.9.5 react-router-dom@6.22.1 react-icons@5.0.1 react-hot-toast@2.4.1 tailwind-merge@2.2.1 @tailwindcss/aspect-ratio@0.4.2 clsx@2.1.0 chart.js@4.4.1 react-chartjs-2@5.2.0 mini-svg-data-uri@1.4.4 framer-motion@11.0.6
```

### Visual Studio Code Plugins

- GraphQL: Language Feature Support
- GraphQL: Syntax Highlighting
- ES7+ React/Redux/React-Native snippets
