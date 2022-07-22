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

## ✅ Auth
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

## ✅ Credentials
### &nbsp; ‣ &nbsp; Create a credential
#### &nbsp; &nbsp; POST _`/credential`_

##### &nbsp; &nbsp; Body
```json
{
  "label": "My card",
  "userName": "PAULO U LAGO",
  "url": "http://someurl.com",
  "password": "1234"
}
```

##### &nbsp; &nbsp; Header
```json
{
  "Authorization": "Bearer ${token}"
}
```


### &nbsp; ‣ &nbsp; Search all credentials
#### &nbsp; &nbsp; GET _`/credential`_


##### &nbsp; &nbsp; Header
```json
{
  "Authorization": "Bearer ${token}"
}
```

#### &nbsp; Response:
```json
[
  {
    "id": 2,
    "label": "Boyle baa349754ce2",
    "url": "https://sites.com/08337082-31ac-4e28-8a9c-b02c1aeb1c15",
    "userName": "Paulo Santos",
    "password": "112919112919",
    "userId": 1
  }
]
```


### &nbsp; ‣ &nbsp; Search a credential
#### &nbsp; &nbsp; GET _`/credential?id=1`_


##### &nbsp; &nbsp; Header
```json
{
  "Authorization": "Bearer ${token}"
}
```

#### &nbsp; Response:
```json
{
    "id": 2,
    "label": "Boyle baa349754ce2",
    "url": "https://sites.com/08337082-31ac-4e28-8a9c-b02c1aeb1c15",
    "userName": "Paulo Santos",
    "password": "112919112919",
    "userId": 1
}
```

### &nbsp; ‣ &nbsp; Delete a credential
#### &nbsp; &nbsp; DELETE _`/credential/:id`_

##### &nbsp; &nbsp; Header
```json
{
  "Authorization": "Bearer ${token}"
}
```

#### &nbsp; Response:
```json
204
```

## ✅ Secure notes
### &nbsp; ‣ &nbsp; Create a secure note
#### &nbsp; &nbsp; POST _`/secure-note`_

##### &nbsp; &nbsp; Body
```json
{
  "title": "Boyle baa349754ce2",
  "bodyNote": "Cooper 8838fd663d78 Cooper 8838fd663d78 Cooper 8838fd663d78 Cooper"
}
```

##### &nbsp; &nbsp; Header
```json
{
  "Authorization": "Bearer ${token}"
}
```

### &nbsp; ‣ &nbsp; Search all secure-notes
#### &nbsp; &nbsp; GET _`/secure-note`_

##### &nbsp; &nbsp; Header
```json
{
  "Authorization": "Bearer ${token}"
}
```

#### &nbsp; Response:
```json
[
  {
    "id": 2,
    "title": "Boyle baa349754ce2",
    "bodyNote": "Cooper 8838fd663d78 Cooper 8838fd663d78 Cooper 8838fd663d78  Cooper 8838fd663d78",
    "userId": 1
  }
]
```


### &nbsp; ‣ &nbsp; Search a secure-note
#### &nbsp; &nbsp; GET _`/secure-note?id=1`_

##### &nbsp; &nbsp; Header
```json
{
  "Authorization": "Bearer ${token}"
}
```

#### &nbsp; Response:
```json
{
  "id": 2,
  "title": "Boyle baa349754ce2",
  "bodyNote": "Cooper 8838fd663d78 Cooper 8838fd663d78 Cooper 8838fd663d78 Cooper 8838fd663d78 Cooper 8838fd663d78",
  "userId": 1
}
```

### &nbsp; ‣ &nbsp; Delete a secure note
#### &nbsp; &nbsp; DELETE _`/secure-note/:id`_


##### &nbsp; &nbsp; Header
```json
{
  "Authorization": "Bearer ${token}"
}
```

#### &nbsp; Response:
```json
204
```

## ✅ Cards
### &nbsp; ‣ &nbsp; Create a card
#### &nbsp; &nbsp; POST _`/card`_

##### &nbsp; &nbsp; Body
```json
{
    "number": "9317931793174",
    "holderName": "Joanna B Pinheiro",
    "secureCode": "837",
    "expirationDate": "10/49",
    "isVirtual": true,
    "password": "644850",
    "type": "both",
    "lable": "Boyle baa349754ce2"
  }
```

##### &nbsp; &nbsp; Header
```json
{
  "Authorization": "Bearer ${token}"
}
```


### &nbsp; ‣ &nbsp; Search all cards
#### &nbsp; &nbsp; GET _`/card`_


##### &nbsp; &nbsp; Header
```json
{
  "Authorization": "Bearer ${token}"
}
```

#### &nbsp; Response:
```json
[
  {
    "id": 2,
    "number": "9317931793174",
    "holderName": "Joanna B Pinheiro",
    "secureCode": "837",
    "expirationDate": "10/49",
    "isVirtual": true,
    "password": "644850",
    "type": "both",
    "userId": 1,
    "lable": "Boyle baa349754ce2"
  }
]
```

### &nbsp; ‣ &nbsp; Search a card
#### &nbsp; &nbsp; GET _`/card?id=1`_

##### &nbsp; &nbsp; Header
```json
{
  "Authorization": "Bearer ${token}"
}
```

#### &nbsp; Response:
```json
{
  "id": 2,
  "number": "9317931793174",
  "holderName": "Joanna B Pinheiro",
  "secureCode": "837",
  "expirationDate": "10/49",
  "isVirtual": true,
  "password": "644850",
  "type": "both",
  "userId": 1,
  "lable": "Boyle baa349754ce2"
}
```

### &nbsp; ‣ &nbsp; Delete a card
#### &nbsp; &nbsp; DELETE _`/card/:id`_

##### &nbsp; &nbsp; Header
```json
{
  "Authorization": "Bearer ${token}"
}
```

#### &nbsp; Response:
```json
204
```

## ✅ Wifis
### &nbsp; ‣ &nbsp; Create a wifi
#### &nbsp; &nbsp; POST _`/wi-fi`_

##### &nbsp; &nbsp; Body
```json
{
  "name": "Conn ec76c754426e",
  "password": "233534",
  "lable": "Boyle baa349754ce2"
}
```

##### &nbsp; &nbsp; Header
```json
{
  "Authorization": "Bearer ${token}"
}
```

### &nbsp; ‣ &nbsp; Search all wi-fi's
#### &nbsp; &nbsp; GET _`/wi-fi`_

##### &nbsp; &nbsp; Header
```json
{
  "Authorization": "Bearer ${token}"
}
```

#### &nbsp; Response:
```json
[
  {
    "id": 3,
    "name": "Conn ec76c754426e",
    "password": "233534",
    "lable": "Boyle baa349754ce2",
    "userId": 1
  }
]
```

### &nbsp; ‣ &nbsp; Search a wi-fi
#### &nbsp; &nbsp; GET _`/wi-fi?id=1`_

##### &nbsp; &nbsp; Header
```json
{
  "Authorization": "Bearer ${token}"
}
```

#### &nbsp; Response:
```json
{
  "id": 3,
  "name": "Conn ec76c754426e",
  "password": "233534",
  "lable": "Boyle baa349754ce2",
  "userId": 1
}
```

### &nbsp; ‣ &nbsp; Delete a wi-fi
#### &nbsp; &nbsp; DELETE _`/wi-fi/:id`_

##### &nbsp; &nbsp; Header
```json
{
  "Authorization": "Bearer ${token}"
}
```

#### &nbsp; Response:
```json
204
```

---
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
