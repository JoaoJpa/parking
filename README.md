# Parking

Esse projeto tem como intuito ser um teste para o Grupo ITSS.

#Tecnologias

- Java
- Spring 2.2.0 SNAPSHOT
- Angular 8
- Ngb Boostrap (https://ng-bootstrap.github.io/#/home)
- Node 10.15.1 
- Maven 3.6.0
- PostgreSql
- ElephantSql (https://www.elephantsql.com/)

## Development Front

 - npm install 
 - ng server ou npm start para executar o front em localhost:4200

## Development Back

 - mvn clean install (pasta api isso irá adicionar as dependencias via maven do projeto) ou importar o projeto em IDE de preferencia 
 - Executar classe main do projeto 'parking-api' ou usar Spring Tools
 
 ## Database
 
 O Database esta hospedado num servidor gratuito com PostgreSql caso queira connectar em outra base mudar no 'application.properties' no projeto 'parking-api'.
 
 - spring.datasource.url --> url do database
 - spring.datasource.username --> usuário database
 - spring.datasource.password --> password database
 
O esquema do data base será criado automaticamente ao iniciar o projeto.
 

