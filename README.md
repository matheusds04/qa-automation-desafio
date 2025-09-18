# 🧪 Desafio QA Automation

Este repositório contém a solução para o **Desafio de QA Automation** proposto.  
O objetivo é validar fluxos de **API** e **Frontend** utilizando a aplicação de exemplo [DemoQA BookStore](https://demoqa.com/books).

---

## 📌 Estrutura do Projeto

qa-automation-desafio/
├── cypress/
│ ├── e2e/
│ │ ├── api.cy.js # Testes da API BookStore
│ │ └── frontend.cy.js # Testes de frontend (UI)
│ └── support/
│ └── e2e.js # Configurações globais do Cypress
├── cypress.config.js # Configuração do Cypress
├── package.json # Dependências e scripts
└── README.md


---

## ⚙️ Tecnologias Utilizadas
- [Node.js](https://nodejs.org) (v18+ ou v20+)
- [Cypress](https://www.cypress.io/) v13
- JavaScript

---

## 🚀 Como executar

### 1. Clonar o repositório
```bash
git clone https://github.com/matheusds04/qa-automation-desafio.git
cd qa-automation-desafio

npm install
npm run cy:open
npm run cy:run

🧩 Testes implementados
🔹 API (cypress/e2e/api.cy.js)

Fluxo completo da BookStore API:

Criar um usuário

Gerar um token de acesso

Autorizar usuário

Listar livros disponíveis

Alugar dois livros

Validar usuário com livros alugados

🔹 Frontend (cypress/e2e/frontend.cy.js)

Validações simples da interface:

Acessar a página Book Store e validar título

Pesquisar um livro por nome

Abrir detalhes de um livro e validar ISBN

📚 Referências

Documentação Swagger da API: https://demoqa.com/swagger/

Cypress Docs

✨ Autor

👤 @matheusds04


