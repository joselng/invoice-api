## 📘 Decisões Técnicas

### Idempotência
Utilizei um `Map<chargeId, Charge>` como estrutura principal de armazenamento. Isso garante que cada `chargeId` seja único e que não sejam inseridas cobranças duplicadas. Antes de inserir uma nova cobrança, verifico se a chave já existe na estrutura de dados.

### Agrupamento e Ordenação
As cobranças são agrupadas com base no `partnerId`, e as faturas resultantes são ordenadas de forma decrescente conforme o valor total somado por parceiro. Utilizei objetos agrupados dinamicamente e depois apliquei `Array.sort()` para organizar os resultados antes do retorno.

### Estrutura de Dados
Escolhi `Map` para armazenamento em memória por permitir busca eficiente pelo (`chargeId`) e facilitar a verificação de duplicidade. Para agrupamento por `partnerId`, usei objetos indexados e listas simples, o que é suficiente dado o escopo do projeto.

### Adoção do Express
Por se tratar de um desafio técnico simples e com escopo bem definido, eu optei por utilizar o framework `Express` ao invés de algo mais robusto como `NestJS`. Isso me permitiu uma configuração mais ágil, com foco na lógica de negócio em vez de arquitetura elaborada.

### Por que eu não usei Clean Architecture ou Hexagonal
A aplicação foi deliberadamente construída com uma estrutura direta, sem separar responsabilidades em `services`, `repositories` ou `use cases`, por dois motivos principais:

1. **Escopo restrito**: O projeto não possui lógica complexa, persistência real ou necessidade de testes em múltiplas camadas.
2. **Rapidez e clareza**: A estrutura atual facilita a leitura e entendimento por qualquer desenvolvedor, ideal para um teste técnico.

Se o projeto fosse parte de um sistema real de faturamento/NFs:
- Seria necessário persistir dados em um banco de dados (SQL ou NoSQL).
- Validações e schemas mais rigorosos (ex: `Joi`, `Zod` ou `class-validator`).
- Utilização de `services`, `repositories`, e divisão por camadas com `DTOs`, `use cases` etc.
- Autenticação, autorização e versionamento de APIs.
- Deploy com observabilidade, logs estruturados e tratamento de falhas.

---

Este projeto visa demonstrar domínio de lógica, organização e clareza de código em um cenário prático e limitado ao escopo do desafio.
