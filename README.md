# Prova de Backend

O projeto inicial é um cadastro de usuários em memória muito simples e sem utilizar nenhuma lib. Apesar de o código estar em qualidade baixa, o projeto está funcional. O que se espera é que o candidato melhore este código de uma maneira que possamos avaliar suas habilidades e competências.

### Rodando o projeto

`node src/index.js`

## O que será avaliado?

A idéia é deixar o candidato bem livre pra reimplementar o código da maneira que mais lhe for conveniente e que mais demonstre suas habilidades. Está liberado o uso de libs de terceiros, bancos de dados, autenticação, etc.

1. Qualidade de código
2. Uso de patterns adequados
3. Estratégia de validação de dados
4. Testes unitários -- Faltou completar os testes, nao deu tempo

## O que é desejado (não obrigatório) na entrega?

1. Adição de Banco de dados
2. Utilização de docker -- foi utilizado docker mas também não deu tempo concluir o ambiente env ou docker-compose
3. Autenticação
4. Utilização de typescript

## Como será feita a entrega?

Deverá ser realizado um fork deste repositório e no formulário enviado você deverá responder com o link deste fork.

## Considerações sobre o projeto

1. O projeto utilza uma imagem docker do postgres e um banco de dados
   chamado: user_db, pode ser verificado em ormconfig.json
2. O projeto usa typeorm com migrations. Após a instalação da imagem docker e
da criação do banco de dados, basta executar:
yarn typeorm migration:run para que ele execute a migração e crie a única tabela de usuários requerida pela aplicação
3. O projeto é bem parecido com outro projeto disposto em:
https://github.com/rocketseat-education/bootcamp-gostack-modulos/tree/master/nivel-04/02-finalizando-backend-do-app

Que é um projeto de um curso da rocketseat do gostack

Como pede basicamente os mesmos requisitos uma parte do codigo foi aproveitada mas ele foi modificado a minha maneira e reconstruido do zero. Gosto da separação de pastas e da forma como o projeto pode ser construido usando essa estrutura mas existem outras formas muito boas de se fazê-lo também, com o uso de nestjs, por exemplo

Devido ao prazo curto de apenas um dia para fazê-lo e como ultimamente não estou com muito tempo disponível, o projeto não foi concluido como eu queria na parte dos testes
