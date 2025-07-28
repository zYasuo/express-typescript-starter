# Express TypeScript Starter

![Node.js](https://img.shields.io/badge/Node.js-v18+-339933?style=flat&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8+-3178C6?style=flat&logo=typescript&logoColor=white)
![Express](https://img.shields.io/badge/Express-5.1+-000000?style=flat&logo=express&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-30.0+-C21325?style=flat&logo=jest&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green.svg)

Um projeto starter para aplicações web usando **Express.js** e **TypeScript**, configurado com as melhores práticas de desenvolvimento, testes e
estrutura de projeto.

## 🚀 Funcionalidades

-   ✅ **Express.js 5.1+** - Framework web rápido e minimalista
-   ✅ **TypeScript** - Tipagem estática para JavaScript
-   ✅ **Jest** - Framework de testes com cobertura de código
-   ✅ **CORS configurado** - Middleware para Cross-Origin Resource Sharing
-   ✅ **Variáveis de ambiente** - Configuração com dotenv
-   ✅ **Health Check** - Endpoint para verificação de saúde da aplicação
-   ✅ **404 Handler** - Middleware para rotas não encontradas
-   ✅ **Build otimizado** - Compilação TypeScript para produção

## 📁 Estrutura do Projeto

```
express-typescript-starter/
├── src/
│   ├── server.ts                          # Arquivo principal do servidor
│   ├── config/
│   │   └── config.ts                      # Configurações da aplicação
│   └── middleware/
│       ├── cors-handler.middleware.ts     # Middleware de CORS
│       └── not-found-route.middleware.ts  # Middleware 404
├── test/
│   └── integration/
│       └── server.integration.test.ts     # Testes de integração
├── build/                                 # Arquivos compilados (gerados)
├── coverage/                              # Relatórios de cobertura de testes
├── jest.config.ts                         # Configuração do Jest
├── tsconfig.json                          # Configuração do TypeScript
├── tsconfig.build.json                    # Configuração de build
└── package.json                           # Dependências e scripts
```

## 🛠️ Pré-requisitos

-   **Node.js** 18+
-   **npm** ou **yarn**

## ⚡ Instalação e Execução

### 1. Clone o repositório

```bash
git clone https://github.com/zYasuo/express-typescript-starter.git
cd express-typescript-starter
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
NODE_ENV=development
SERVER_HOSTNAME=localhost
SERVER_PORT=3001
```

### 4. Execute em modo de desenvolvimento

```bash
npm run dev
```

O servidor estará rodando em `http://localhost:3001`

### 5. Build para produção

```bash
npm run build
```

Os arquivos compilados estarão na pasta `build/`

## 🧪 Testes

### Executar todos os testes

```bash
npm test
```

### Executar testes com watch mode

```bash
npm run test:watch
```

### Ver relatório de cobertura

Após executar os testes, abra o arquivo `coverage/lcov-report/index.html` no navegador.

## 📋 Scripts Disponíveis

| Script          | Descrição                                    |
| --------------- | -------------------------------------------- |
| `npm test`      | Executa todos os testes com cobertura        |
| `npm run build` | Compila o projeto TypeScript para JavaScript |
| `npm start`     | Inicia o servidor em produção (após build)   |

## 🌐 Endpoints

### Health Check

```
GET /main/healthcheck
```

**Resposta:**

```json
{
    "hello": "world",
    "message": "Server is running"
}
```

### 404 - Rota não encontrada

Qualquer rota não definida retornará:

```json
{
    "message": "Not Found",
    "path": "/rota-inexistente",
    "status": 404
}
```

## ⚙️ Configuração

### Variáveis de Ambiente

| Variável          | Descrição            | Padrão      |
| ----------------- | -------------------- | ----------- |
| `NODE_ENV`        | Ambiente de execução | -           |
| `SERVER_HOSTNAME` | Hostname do servidor | `localhost` |
| `SERVER_PORT`     | Porta do servidor    | `3001`      |

### Middleware Configurado

-   **CORS**: Permite requisições de diferentes origens
-   **Body Parser**: Parse de JSON e URL-encoded
-   **404 Handler**: Tratamento de rotas não encontradas

## 🔧 Desenvolvimento

### Adicionando novas rotas

1. Edite o arquivo `src/server.ts`
2. Adicione suas rotas antes do middleware `NotFoundRouteHandler`

```typescript
app.get("/api/users", (req, res) => {
    res.json({ users: [] });
});
```

### Adicionando novos middlewares

1. Crie um novo arquivo em `src/middleware/`
2. Implemente o middleware seguindo o padrão do projeto
3. Importe e use no `server.ts`

### Configurações adicionais

Edite o arquivo `src/config/config.ts` para adicionar novas configurações.

## 📝 Estrutura de Testes

O projeto usa Jest para testes com a seguinte estrutura:

-   **Testes de Integração**: `test/integration/`
-   **Configuração**: `jest.config.ts`
-   **Cobertura**: Relatórios gerados na pasta `coverage/`

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Danilo Aguiar**

-   GitHub: [@zYasuo](https://github.com/zYasuo)

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!
