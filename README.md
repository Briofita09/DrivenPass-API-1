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

- APIs
- SQL
- Node.js
- TypeScript

***

## 🚀 Rotas

```yml
POST /cadastro
    - Rota para cadastrar um novo usuário
    - headers: {}
    - body: {
        "nome": "Lorem ipsum",
        "email": "lorem@gmail.com",
        "senha": "loremipsum"
    }
```
    
```yml 
POST /login
    - Rota para fazer login
    - headers: {}
    - body: {
    "email": "lorem@gmail.com",
    "senha": "loremipsum"
    }
```
    
```yml 
POST /card/create
  -Rota para cirar um cartão
  - header: {'x-api-key': '$somekey'}
  - body: { 
      type: 'groceries' | 'restaurants' | 'transport' | 'education' | 'health',
      cpf: '$00011122233'
    }
  - status: 201
  - response data: 
```

```yml
``` 

```yml
```
 
```yml
```

***

## 🏁 Rodando a aplicação

Para rodar este projeto, certifique-se que você tem a ultima versão estável do [Node.js](https://nodejs.org/en/download/) e [npm](https://www.npmjs.com/) rodando localmente.

Primeiro, faça o clone desse repositório na sua maquina:

```
git clone https://github.com/joltzz/DrivenPass-API.git
```

Depois, dentro da pasta, rode o seguinte comando para instalar as dependencias.

```
npm install
```

Finalizado o processo, é só inicializar o servidor
```
npm run dev
```
