
  
# Estados api
Api que retorna os estados brasileiros. Esse serviço se comunica com outro serviço chamado populacao-api (api que retorna a população dos estados brasileiros)
Tendo dois tipos de comunicação, por rest e por fila.

### Instalação
Estou usando o gerenciador de pacote yarn, caso utilize o npm, altere os comandos para os do npm.
```sh
$ git clone https://github.com/andersonribeirodemoraes/estados-api.git
$ cd estados-api
$ yarn
```
### Banco de Dados
Estou usando o [knex](http://knexjs.org/) para manipular o banco de dados sqlite3.

#### Migrations
Para criar a tabela de estados.
Para rodar é utilizado o knex, mas criei uma configuração no package.json, para facilitar o uso.

#### Rodando as migrations
```sh
$ yarn knex:migrate //Roda as últimas migrations
$ yarn knex:migrate:rollback //Faz rollback nas migrations
```

#### Seeds
Preparei uma carga inicial de estados.

#### Rodando os Seeds
```sh
$ yarn knex seed:run
```

#### Rodando o projeto
```sh
$ yarn dev:server
```

