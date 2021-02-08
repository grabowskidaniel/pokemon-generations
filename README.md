# PokemonGenerations

Este site apresenta as gerações dos Pokemons usando a API https://pokeapi.co/docs/v2.

Para cada geração é exibido a região principal e a quantidade de movimentos, espécies, tipos e grupos de versão.
Além disso é possível visualizar os detalhes de uma região clicando em seu nome.

## Pré requisitos

Seguir o guia de setup local do Angular e instalar o Git, NodeJS, NPM e Angular CLI:
https://angular.io/guide/setup-local

Yarn:
https://classic.yarnpkg.com/en/docs/install/#windows-stable

## Clonar repositório

Fazer um clone do repositório do Github para uma pasta local usando o comando:

```
git clone https://github.com/grabowskidaniel/pokemon-generations.git
```

Para mais informações acesse https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository

## Instalar dependências

Para instalar as dependencias, abra um prompt de comando, navegue para a pasta onde o projeto foi clonado, na pasta onde está o arquivo package.json e digite o comando:

```
$ yarn install
```

ou

```
$ npm install
```

## Iniciar servidor local

Após a instalação das dependências, em um prompt de comando, digite:

```
$ yarn start
```

ou

```
$ npm start
```

O projeto irá compilar e pode ser acessado no endereço: `http://localhost:4200`

## Testes unitários

Para executar os testes unitários digite:

```
$ yarn test
```

ou

```
$ npm test
```

O resultado dos testes aparecerá no console e também em uma nova janela no navegador.
