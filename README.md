<h1 align="center">
  <img alt="Boilerplate Node + Express" src="https://res.cloudinary.com/andersonmota/image/upload/v1588801747/boilerplate-node-express_drchh7.png" />
  <br>
  Boilerplate Node + Express
</h1>

<h4 align="center">
  Sequelize, Dotenv, ESLint, Nodemon, Prettier e Sucrase.
</h4>

##Tecnologias

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [DotEnv](https://github.com/motdotla/dotenv)
- [ESLint](https://eslint.org/)
- [Nodemon](https://nodemon.io/)
- [Prettier](https://prettier.io/)
- [Sucrase](https://github.com/alangpierce/sucrase)
- [VS Code][vc] com [EditorConfig][vceditconfig] e [ESLint][vceslint]

## Começar

```bash
# Clone este repositório
$ git clone https://github.com/andersonmotta/boilerplate-node-express.git

# Acesse a pasta do projeto
$ cd boilerplate-node-express

# Instale as libs
$ yarn

# Iniciar server localhost:3333
$ yarn dev
```

## Atualizado

Caso queira utilizar sempre as versões atuais das libs, siga os passos abaixo:

```bash
# Cria a pasta do seu projeto
$ mkdir nome-projeto

# Acesse a pasta do projeto e crie o Package.json
$ cd nome-projeto
$ yarn init -y

# Abra o projeto no VScode
$ code .

# Instale o ESLint
$ yarn add eslint -D

# Configure o ESLint
$ yarn eslint --init

# Finalizado a configuração, apague o arquivo package-lock e execute
$ yarn

# Instale as dependencias de desenvolvimento
$ yarn add eslint-config-prettier eslint-plugin-import eslint-plugin-prettier nodemon prettier sequelize-cli sucrase -D

# Instale as dependencias
$ yarn add dotenv express sequelize
```

Abra o arquivo "package.json" e acrescente o objeto abaixo:

```json
"scripts": {
    "dev": "nodemon src/server.js",
    "dev:debug": "nodemon --inspect src/server.js",
    "queue": "nodemon src/queue.js"
  },
```

Copie a pasta "src" e ".vscode" para a raiz do seu projeto e os arquivos: ".editorconfig, .env.example, .eslintrc.js, .gitattributes, .gitignore, .prettierrc, .sequelizerc e nodemon.json"

Se pedir para substituir, confirme que sim.

#### Pronto! Agora é só codar.

[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
