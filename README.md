# Invoice API

API para registrar cobranças e gerar faturas agrupadas por parceiro.

## 🚀 Instalação

```bash
npm install
```

## ▶️ Rodando localmente

```bash
npm run dev
```

## 🧪 Rodando os testes

```bash
npm test
```

## 📌 Endpoints

### `POST /charges`
Registra uma nova cobrança.

#### Exemplo de Requisição
```json
{
  "chargeId": "c123",
  "partnerId": "partner-A",
  "amount": 150,
  "reference": "2025-04",
  "timestamp": "2025-04-29T14:00:00.000Z"
}
```

#### Respostas
✅ Sucesso:
```json
{
  "message": "Charge added"
}
```

❌ Dados inválidos:
```json
{
  "error": "Invalid charge data"
}
```

❌ ID duplicado:
```json
{
  "error": "Duplicate chargeId"
}
```

### `GET /invoices`
Retorna faturas agrupadas por `partnerId` e limpa os registros de cobranças da memória.

#### Exemplo de Resposta
```json
[
  {
    "partnerId": "partner-A",
    "total": 300,
    "charges": [
      {
        "chargeId": "c123",
        "partnerId": "partner-A",
        "amount": 150,
        "reference": "2025-04",
        "timestamp": "2025-04-29T14:00:00.000Z"
      },
      {
        "chargeId": "c124",
        "partnerId": "partner-A",
        "amount": 150,
        "reference": "2025-04",
        "timestamp": "2025-04-29T15:00:00.000Z"
      }
    ]
  }
]
```

#### Após consumo, nova requisição:
```json
[]
```

## 🧪 Diretórios de Testes

- `tests/unit` → Testes de unidade (funções puras e armazenamento)
- `tests/integration` → Testes de integração (rotas e respostas HTTP)

## 📁 Organização do Projeto

```
src/
 ├── app.ts              # Configuração do express
 ├── index.ts            # Ponto de entrada do servidor
 ├── routes/             # Rotas
 ├── controllers/        # Controladores
 ├── storage/            # Simulação de armazenamento
 └── types/              # Tipagens (TypeScript)

 tests/
 ├── unit/               # Testes de unidade
 └── integration/        # Testes de integração
```

