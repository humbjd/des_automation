# README - Projeto de Automação Web e API

## Descrição do Projeto

Este repositório contém um projeto de automação destinado a testes em ambientes Web e API. O objetivo principal é garantir a qualidade e confiabilidade do sistema por meio da automação de casos de teste. O projeto utiliza as ferramentas Cypress e Faker.js para facilitar o desenvolvimento e execução de testes automatizados.

## Ferramentas Utilizadas

### Cypress

[Cypress](https://www.cypress.io/) é uma ferramenta de teste de ponta a ponta que oferece uma abordagem rápida, fácil e confiável para testes de aplicações Web. A escolha do Cypress se deve à sua capacidade de fornecer uma experiência de teste simplificada, suporte robusto para testes em navegadores modernos e uma vasta gama de funcionalidades poderosas.

### Faker.js

[Faker.js](https://github.com/marak/Faker.js/) é uma biblioteca JavaScript que permite a geração de dados fictícios de maneira realista. Utilizamos o Faker.js para criar dados de teste dinâmicos e realistas, tornando nossos testes mais abrangentes e representativos das situações do mundo real.

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

- **cypress/**
  - **fixtures/**: Contém dados estáticos utilizados nos testes.
  - **integration/**: Agrupa os testes de integração da aplicação.
  - **plugins/**: Contém plugins do Cypress, se necessário.
  - **support/**: Armazena arquivos de suporte como comandos customizados e configurações globais.

- **api/**
  - **endpoints/**: Contém módulos para cada endpoint da API.
  - **utils/**: Utilitários relacionados à automação de testes da API.

## Como Executar os Testes

1. Clone o repositório para sua máquina local.

```
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```

2. Instale as dependências do projeto.

```
npm install
```

3. Execute os testes usando o comando Cypress.

```
npm run test
```

## Contribuições

Contribuições são bem-vindas. Sinta-se à vontade para abrir problemas (issues) ou propor melhorias por meio de pull requests. Certifique-se de seguir as diretrizes de contribuição do projeto.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE), o que significa que você tem a liberdade de utilizá-lo conforme desejar, desde que mantenha a atribuição ao autor original.

---

Agradecemos por contribuir para a qualidade do nosso projeto através da automação de testes!
