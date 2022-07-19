# <p align = "center"> Projeto DrivenPass </p>

<p align="center">
   <img src="https://s3.amazonaws.com/helpjuice-static/helpjuice_production%2Fuploads%2Fupload%2Fimage%2F6769%2Fdirect%2F1608159897699-Senha.png" style="width: 300px;"/>
</p>

***


##  📝 Descrição

- Navegar na internet pode ser uma atividade muito divertida, mas ao mesmo tempo, muito perigosa. Inúmeros estudos e levantamentos (nacionais e internacionais) mostram que o número de golpes virtuais não para de crescer. O que levanta a questão: como nos proteger?
- Existem várias formas diferentes de se proteger. Tudo começa com o uso de senhas diferentes e seguras. Para uma senha ser segura, ela deve conter vários caracteres e números misturados, sem contar que o quanto mais longa ela for, melhor.
- *Só que como vamos memorizar senhas gigantes e sem significado semântico?* É para resolver essa dor que os gerenciadores de senhas surgiram! Com eles, criamos apenas uma senha “mestra” e todas as outras senhas ficam gravadas em segredo! Logo, quando precisamos dela, basta lembrar da senha “mestra”!
- Neste projeto, você ficará responsável por desenvolver a DrivenPass, um gerenciador de senhas!

***

## 💻	 Tecnologias e Conceitos

- PostgreSQL
- Prisma
- Node.js
- TypeScript
- JWT
- Express.js

***

## 🚀 Rotas

### [Authentication](#authentication) _`/auth`_
- [Register](#---register)
- [Login](#---login)

### [Credentials](#credentials) _`/credentials`_
- [Create a credential](#---create-a-credential)
- [Search all credentials](#---search-all-credentials)
- [Search a credential](#---search-a-credential)
- [Delete a credential](#---delete-a-credential)


### [Secure notes](#secure-notes) _`/secure-note`_
- [Create a secure note](#---create-a-secure-note)
- [Search all secure notes](#---search-all-secure-notes)
- [Search a secure note](#---search-a-secure-note)
- [Delete a secure note](#---delete-a-secure-note)


### [Cards](#cards) _`/card`_
- [Create a card](#---create-a-card)
- [Search all cards](#---search-all-cards)
- [Search a card](#---search-a-card)
- [Delete a card](#---delete-a-card)


### [Wifis](#wifis) _`/wi-fi`_
- [Create a wi-fi](#---create-a-wifi)
- [Search all wi-fi's](#---search-all-wi-fis)
- [Search a wi-fi](#---search-a-wi-fi)
- [Delete a wi-fi](#---delete-a-wi-fi)


***

## 🏁 Rodando a aplicação

Para rodar este projeto, certifique-se de importar o código e colocar na sua máquina com os seguintes comandos: 

```bash
# Install all dependencies
$ git clone https://github.com/joltzz/DrivenPass-API

$ cd DrivenPass-API

$ npm install

# Perform database migration with prism
$ npx prisma migrate dev

# Start the server
$ npm start
```

***

## ✅ Autenticação
### &nbsp; ‣ &nbsp; Register
#### &nbsp; &nbsp; POST _`/sign-up`_

##### &nbsp; &nbsp; Body
```json
{
  "email": "email@gmail.com",
  "password": "1234"
}
```

### &nbsp; ‣ &nbsp; Login
#### &nbsp; &nbsp; POST _`/sign-in`_

##### &nbsp; &nbsp; Body
```json
{
  "email": "email@gmail.com",
  "password": "1234"
}
```
