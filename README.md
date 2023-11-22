
# CarSystem
Este projeto consiste em uma aplicação completa com back-end em Java (Spring) e front-end em Angular, oferecendo uma API RESTful para gerenciar usuários e carros. Os usuários podem autenticar-se, cadastrar informações pessoais, listar, atualizar e remover dados, incluindo detalhes sobre seus carros. A aplicação utiliza JWT para autenticação, H2 como banco de dados em memória, e proporciona uma experiência intuitiva e responsiva, atendendo aos requisitos de segurança, persistência, e integração entre front-end e back-end.

## Requisitos

-   Java 8 ou superior
-   Maven
-   Node.js
-   Angular CLI

----------

## Back-End

### Execução Local

1.  Clone o repositório:
    `git clone [URL_DO_REPOSITORIO]` 
    
2.  Navegue até o diretório back-end:
    `cd nome_do_projeto/back-end` 
    
3.  Execute o build e inicie o servidor:
     `mvn spring-boot:run` 
    

### Testes Unitários

-   Execute os testes unitários:
   `mvn test` 
    

### Implantação

-   Implante a aplicação em um servidor Tomcat, Undertow ou Jetty.

----------

## Front-End

### Instalação

1.  Navegue até o diretório front-end:
    `cd nome_do_projeto/front-end` 
    
2.  Instale as dependências:
    `npm install` 
    

### Execução Local

-   Inicie o servidor de desenvolvimento:
     `npm start`
      
    

### Build para Produção

-   Execute o build para produção:
    `ng build --prod` 
    
----------

## Utilização da API

### Autenticação

#### `POST /api/signin`

-   **Descrição:** Realiza a autenticação do usuário.
-   **Como Usar:** Enviar uma requisição POST com os campos `login` e `password`.
-   **Possíveis Erros:** Código 401: Unauthorized - "Invalid login or password"

----------

### Usuários

#### `GET /api/users`

-   **Descrição:** Lista todos os usuários cadastrados.
-   **Requisitos:** Autenticação (Token no header Authorization).
-   **Possíveis Erros:** Código 401: Unauthorized - "Unauthorized - invalid session"

#### `POST /api/users`

-   **Descrição:** Cadastra um novo usuário.
-   **Como Usar:** Enviar uma requisição POST com os dados do novo usuário.
-   **Possíveis Erros:**
    -   Código 400: Bad Request - "Invalid fields"
    -   Código 400: Bad Request - "Missing fields"
    -   Código 400: Bad Request - "Email already exists"
    -   Código 400: Bad Request - "Login already exists"

#### `GET /api/users/{id}`

-   **Descrição:** Busca um usuário pelo ID.
-   **Requisitos:** Autenticação (Token no header Authorization).
-   **Possíveis Erros:** Código 401: Unauthorized - "Unauthorized - invalid session"

#### `DELETE /api/users/{id}`

-   **Descrição:** Remove um usuário pelo ID.
-   **Requisitos:** Autenticação (Token no header Authorization).
-   **Possíveis Erros:** Código 401: Unauthorized - "Unauthorized - invalid session"

#### `PUT /api/users/{id}`

-   **Descrição:** Atualiza um usuário pelo ID.
-   **Requisitos:** Autenticação (Token no header Authorization).
-   **Como Usar:** Enviar uma requisição PUT com os dados atualizados do usuário.
-   **Possíveis Erros:**
    -   Código 400: Bad Request - "Invalid fields"
    -   Código 400: Bad Request - "Missing fields"
    -   Código 401: Unauthorized - "Unauthorized - invalid session"

----------

### Carros

#### `GET /api/cars`

-   **Descrição:** Lista todos os carros do usuário logado.
-   **Requisitos:** Autenticação (Token no header Authorization).
-   **Possíveis Erros:** Código 401: Unauthorized - "Unauthorized - invalid session"

#### `POST /api/cars`

-   **Descrição:** Cadastra um novo carro para o usuário logado.
-   **Requisitos:** Autenticação (Token no header Authorization).
-   **Como Usar:** Enviar uma requisição POST com os dados do novo carro.
-   **Possíveis Erros:**
    -   Código 400: Bad Request - "Invalid fields"
    -   Código 400: Bad Request - "Missing fields"
    -   Código 400: Bad Request - "License plate already exists"
    -   Código 401: Unauthorized - "Unauthorized - invalid session"

#### `GET /api/cars/{id}`

-   **Descrição:** Busca um carro do usuário logado pelo ID.
-   **Requisitos:** Autenticação (Token no header Authorization).
-   **Possíveis Erros:** Código 401: Unauthorized - "Unauthorized - invalid session"

#### `DELETE /api/cars/{id}`

-   **Descrição:** Remove um carro do usuário logado pelo ID.
-   **Requisitos:** Autenticação (Token no header Authorization).
-   **Possíveis Erros:** Código 401: Unauthorized - "Unauthorized - invalid session"

#### `PUT /api/cars/{id}`

-   **Descrição:** Atualiza um carro do usuário logado pelo ID.
-   **Requisitos:** Autenticação (Token no header Authorization).
-   **Como Usar:** Enviar uma requisição PUT com os dados atualizados do carro.
-   **Possíveis Erros:**
    -   Código 400: Bad Request - "Invalid fields"
    -   Código 400: Bad Request - "Missing fields"
    -   Código 401: Unauthorized - "Unauthorized - invalid session"

----------

## Observações

-   Certifique-se de ajustar as configurações de banco de dados e autenticação conforme necessário.
-   O ambiente de desenvolvimento pressupõe a execução local da aplicação. Em um ambiente de produção, ajustes adicionais podem ser necessários.

Com essas instruções, desenvolvedores podem facilmente clonar, configurar, testar e implantar a aplicação tanto localmente quanto em um ambiente de produção. A documentação da API e a integração contínua proporcionam uma experiência de desenvolvimento transparente e eficiente.
  

## Estórias de Usuário - Front-end

1.  **Página de Login:**
    
    -   Como usuário, quero acessar uma página de login onde posso inserir meu login e senha para autenticar na aplicação.
2.  **Página de Cadastro:**
    
    -   Como usuário novo, quero acessar uma página de cadastro onde posso preencher todas as informações necessárias, incluindo detalhes sobre meus carros, para criar minha conta na aplicação.
3.  **Página de Perfil do Usuário:**
    
    -   Como usuário autenticado, quero ter acesso a uma página que exiba todas as informações do meu perfil, incluindo dados pessoais, lista de carros, data de criação e última data de login.
4.  **Página de Lista de Usuários (Admin):**
    
    -   Como administrador, quero ter acesso a uma página que liste todos os usuários cadastrados na aplicação, para ter uma visão geral.
5.  **Página de Detalhes do Usuário (Admin):**
    
    -   Como administrador, quero poder acessar uma página de detalhes de um usuário específico, exibindo todas as informações relacionadas a esse usuário.
6.  **Página de Lista de Carros do Usuário:**
    
    -   Como usuário autenticado, quero ter acesso a uma página que liste todos os carros cadastrados em meu nome, para visualizar e gerenciar meus veículos.
7.  **Página de Detalhes do Carro do Usuário:**
    
    -   Como usuário autenticado, quero poder acessar uma página de detalhes de um carro específico em minha lista, exibindo todas as informações relacionadas a esse veículo.
8.  **Formulário de Atualização de Informações do Usuário:**
    
    -   Como usuário autenticado, quero acessar um formulário onde posso atualizar minhas informações cadastradas, incluindo nome, sobrenome, e-mail, data de nascimento, senha, telefone e detalhes sobre meus carros.
9.  **Formulário de Cadastro de Novo Carro:**
    
    -   Como usuário autenticado, quero acessar um formulário onde posso cadastrar um novo carro em meu nome, fornecendo as informações necessárias.
10.  **Mensagens de Erro/Feedback:**
	 
	 - Como usuário, quero receber mensagens de erro claras e feedback visual ao realizar ações na aplicação, como cadastro, login, atualizações e remoções, para entender e corrigir possíveis problemas.


## Estórias de Usuário - Back-end:

1.  **Autenticação do Usuário:**
    
    -   Como usuário, quero poder realizar o login na aplicação fornecendo meu login e senha, para obter um token de acesso JWT e utilizar as funcionalidades protegidas da API.
2.  **Cadastro de Novo Usuário:**
    
    -   Como usuário, quero poder cadastrar minhas informações pessoais, incluindo nome, sobrenome, e-mail, data de nascimento, login, senha, telefone e detalhes sobre meus carros, para ter acesso aos recursos da aplicação.
3.  **Listagem de Usuários:**
    
    -   Como administrador, quero poder listar todos os usuários cadastrados na aplicação, para ter uma visão geral dos usuários registrados.
4.  **Busca de Usuário por ID:**
    
    -   Como administrador, quero poder buscar informações detalhadas de um usuário específico através do seu ID, para realizar ações específicas em relação a esse usuário.
5.  **Remoção de Usuário por ID:**
    
    -   Como administrador, quero poder remover um usuário específico através do seu ID, para garantir a segurança e integridade dos dados da aplicação.
6.  **Atualização de Informações do Usuário por ID:**
    
    -   Como usuário, quero poder atualizar minhas informações cadastradas, incluindo nome, sobrenome, e-mail, data de nascimento, senha, telefone e detalhes sobre meus carros, para manter meus dados sempre atualizados.
7.  **Listagem de Carros do Usuário Logado:**
    
    -   Como usuário autenticado, quero poder listar todos os carros cadastrados em meu nome, para visualizar e gerenciar meus veículos.
8.  **Cadastro de Novo Carro para o Usuário Logado:**
    
    -   Como usuário autenticado, quero poder cadastrar um novo carro em meu nome, fornecendo as informações necessárias, para incluir um novo veículo na minha lista.
9.  **Busca de Carro por ID do Usuário Logado:**
    
    -   Como usuário autenticado, quero poder buscar informações detalhadas de um carro específico em minha lista através do seu ID, para realizar ações específicas em relação a esse veículo.
10.  **Remoção de Carro por ID do Usuário Logado:**
    
	 - Como usuário autenticado, quero poder remover um carro específico da minha lista através do seu ID, para manter minha lista de carros atualizada.
11.  **Atualização de Informações do Carro por ID do Usuário Logado:**
    
     - Como usuário autenticado, quero poder atualizar as informações de um carro específico em minha lista através do seu ID, para manter os dados dos meus veículos sempre precisos.


## Justificativas e Defesa Técnica

### Arquitetura e Tecnologias Escolhidas

Optou-se por uma arquitetura de microserviços utilizando o Spring Boot para o back-end devido à sua robustez, flexibilidade e facilidade de integração com o ecossistema Spring. O H2 foi escolhido como banco de dados em memória para simplificar o processo de desenvolvimento e testes.

Para o front-end, Angular foi selecionado devido à sua escalabilidade, estrutura modular e rica comunidade de desenvolvedores, proporcionando uma experiência de usuário interativa e responsiva.

### Autenticação e Segurança

A utilização do JWT (JSON Web Token) para autenticação proporciona um processo seguro e eficiente. A escolha por esse método baseia-se na sua simplicidade, capacidade de evitar ataques como CSRF, e a capacidade de transmitir informações do usuário de forma segura.

### Persistência de Dados

O uso do JPA (Java Persistence API) com o Hibernate como provedor facilita a persistência de dados, permitindo uma integração suave entre a aplicação e o banco de dados H2 em memória. Essa escolha contribui para uma implementação eficiente e de fácil manutenção.

### Testes Unitários

A integração de testes unitários é essencial para garantir a robustez e a qualidade do código. O framework de testes do Spring foi empregado para testar componentes específicos da aplicação, garantindo que cada parte funcione conforme o esperado.

### Documentação

A inclusão de documentação, especialmente Javadoc, tem como objetivo tornar o código mais compreensível e facilitar a manutenção futura. Cada método e classe está documentado de forma clara para orientar desenvolvedores que interagirão ou contribuirão para o projeto.

### Front-End Responsivo

A escolha do Angular como framework front-end permite a criação de uma interface de usuário moderna e responsiva. A estrutura modular do Angular contribui para a escalabilidade e manutenção do código.


### Ordenação de Carros e Usuários

A implementação da ordenação de carros e usuários com base no número de utilizações proporciona uma visão mais útil dos dados. Essa funcionalidade foi adicionada para melhorar a experiência do usuário e fornecer informações relevantes de maneira mais eficaz.

### Conclusão

A solução proposta visa equilibrar eficiência, segurança e escalabilidade. A combinação de tecnologias consolidadas e boas práticas de desenvolvimento resulta em uma aplicação robusta, de fácil manutenção e pronta para evolução. O README.md fornece todas as informações necessárias para execução, build e testes, garantindo uma experiência descomplicada para desenvolvedores e colaboradores.


