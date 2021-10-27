<h1 align="center">
     🚀 <a href="#" alt="site do ecoleta"> Challenge Fullstack Developer - Backend </a>
</h1>

<h3 align="center">
    Desenvolvimento de um API Rest
</h3>
</br>
<h4 align="center">
	 Concluído 👍🏻 </h4>

# Tabela de conteúdos

<!--ts-->

- [Sobre o projeto](#-sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Como executar o projeto](#como-executar-o-projeto)
  - [Pré-requisitos](#pré-requisitos)
  - [Rodando o Backend (servidor)](#rodando-o-backend-servidor)
- [Tecnologias](#tecnologias)
  - [Server](#user-content-server--nodejs)
- [Publicação](#publicação)
- [Desenvolvido](#desenvolvido)
<!--te-->
<br />

## Sobre o projeto

Projeto desenvolvido para o challenge da Mazzatech para concorrer a vaga de Fullstack. 
<br />

---

## Funcionalidades
- [x] Listagem de clientes inadimplentes:
  - [x] Listagem de clientes inadimplentes
  - [x] Ordenação por colunas
  - [x] Busca por nome

<br />

---

## Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Docker & Docker Compose](https://www.docker.com/), [Yarn](https://yarnpkg.com/) e o [MongoDB](https://www.mongodb.com/pt-br). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)
</br>
#### Rodando o Backend (servidor)
</br>

```bash

# Clone este repositório
$ git clone https://github.com/eveban/challenge-totvs-backend.git

# Acesse a pasta do projeto no terminal/cmd
$ cd challenge-backend-totvs

# Instale as dependências
$ npm install
# ou
$ yarn

# Instale o package make para linux ou mac
$ sudo apt install make 

# Execute os containers de backend e do banco de dados (api/db)
$ make up

# Para derrubars os containers
$ make down

# Para visualizar os logs
$ make logs


# O servidor backend inciará na porta:3332 - acesse http://localhost:3332

# Execute uma chamada GET no endpoint para popular os dados no banco - acesse http://localhost:3332/fake

# O servidor do banco de dados inciará na porta:27001

```

<!-- <p align="left">
  <a href="https://insomnia.rest/download" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p> -->
---
## Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### [](https://github.com/tgmarinho/Ecoleta#server-nodejs--typescript)**Server** ([NodeJS](https://nodejs.org/en/))

- **[Express](https://expressjs.com/)**
- **[Mongoose](https://mongoosejs.com/)**
- **[Nodemon](https://www.npmjs.com/package/nodemon)**
- **[MongoDB](https://www.mongodb.com/pt-br)**
- **[Sucrase](https://www.npmjs.com/package/sucrase)**
- **[Dotenv](https://www.npmjs.com/package/dotenv)**
- **[Moment](https://momentjs.com/)**
- **[CORS](https://www.npmjs.com/package/cors)**

---

<!-- ## Publicação
Projeto publicado na Digital Ocean para fins de testes.

- **[Fake de Clientes (GET)](https://fullstack.pitstopcabines.com.br/fake)**
- **[Listagem de Clientes inadimplentes (GET)](https://fullstack.pitstopcabines.com.br/clientes)**
- **[Cadastro de Clientes (POST)](https://fullstack.pitstopcabines.com.br/cliente)**
- **[Listagem de Clientes inadimplentes por nome (GET)](https://fullstack.pitstopcabines.com.br/clientes/cliente?name="Teste")**

Link do FrontEnd para testes.
- **[FrontEnd](https://fullstack.pitstopcabines.com.br/cliente)** -->

<!-- <p align="left">
  <a href="https://insomnia.rest/download" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p> -->
---
## Desenvolvido

Por Everson Silva 
👋🏽 [Entre em contato!](https://www.linkedin.com/in/everson-silva-77bb1513/)

