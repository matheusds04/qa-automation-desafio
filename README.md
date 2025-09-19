# 🧪 Desafio QA Automation

Este repositório contém a solução para o **Desafio de QA Automation** proposto.  
O objetivo é validar fluxos de **API** e **Frontend** utilizando a aplicação de exemplo [DemoQA BookStore](https://demoqa.com/books).

---

## 📌 Estrutura do Projeto

qa-automation-desafio/
 ├── cypress/
 │   ├── e2e/
 │   │   ├── api.cy.js              
 │   │   ├── forms.cy.js            
 │   │   ├── webTables.cy.js        
 │   │   ├── progressBar.cy.js      
 │   │   ├── browserWindows.cy.js   
 │   │   └── sortable.cy.js         
 │   ├── fixtures/
 │   │   └── upload.txt             
 │   └── support/
 │       └── e2e.js                
 ├── cypress.config.js             
 ├── package.json                   
 ├── .gitignore
 └── README.md


---

## ⚙️ Tecnologias Utilizadas
- [Node.js](https://nodejs.org) (v20)
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

Forms (Practice Form)

Preencher formulário com dados

Fazer upload de arquivo .txt

Submeter e validar o popup

Browser Windows

Abrir nova janela /sample

Validar mensagem “This is a sample page”

Retornar para /browser-windows

Web Tables

Criar novo registro

Editar o registro

Deletar o registro

Progress Bar

Iniciar e parar antes de 25%

Validar valor ≤ 25%

Continuar até 100% e resetar

Sortable

Ordenar lista em ordem crescente (One → Six)

📚 Referências

Documentação Swagger da API: https://demoqa.com/swagger/

Cypress Docs

LINK SWAGGER: https://demoqa.com/swagger/


✨ Autor

👤 @matheusds04


