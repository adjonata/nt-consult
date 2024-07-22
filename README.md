# Desafio NT - Front-End
## Detalhes do desafio
Desafio Front-End para a Vaga Desenvolvedor PL na empresa NTConsult. 
> [Veja mais detalhes...](https://gitsrv.ntconsult.com.br/desafios-ntconsult/desafio-frontend)

## Como executar o projeto
1. Clone o repositório e em seguida instale as dependências:
```npm install```
2. Inicie o ambiente de desenvolvimento:
```npm run dev```

## Tecnologias utilizadas
### Pacotes principais
- Vue3 + Typescript - utilizando compositionAPI;
- VueRouter - manejo de rotas;
- Pinia - controle de informações;
- Axios - requisições http;
- VeeValidate + Zod - validação de campos do formulário;
- TailwindCSS - padronização de estilos;
---
### Pacotes extras
- Vitest - testes unitários;
- Vite - aplicação performática;
- VueUse - funções genéricas e reutilizáveis;
- VueSelect - componente select com várias funções;
- VueDatepicker - componente para seleção de datas;
- AxiosMockAdapter - criação de requisições mock;
- DateFns - manipulação de datas;

## Configurações de deploy
CI/CD feito utilizando Github Actions com o host estático do Netlify.

## Arquiteturas utilizadas
- Atomic Design aplicado na estruturação dos componentes.
- Padronização de estilos css *BEM*.

## Funcionamento do sistema
### Pesquisa por hotéis
O formulário para pesquisa de hotéis possui 6 campos, sendo eles:
- **Origem**: Estado de origem;
- **Destino**: Estado destino onde será feito a reserva;
- **Data de Check-In**: Primeiro dia de reserva no hotel;
- **Data de Check-Out**: Último dia de reserva no hotel;
- **N° de Quartos**: Quantidade de quartos a serem reservados;
- **N° de Hóspedes**: Quantidade de pessoas que irão se hospedar;

### Criação de Planos de Viagens
Ao enviar os dados do formulário, utilizo os campos que foram enviados para criar planos de viagem & hospedagem com valores gerados de acordo com os dados informados. 


**As variáveis principais são:**
- Duração = Dias entre o check-in e o check-out;
- Distância em KM = Distância em KM's utilizando as coordenas dos estados selecionados;
---
A partir dessas informações gero vários hotéis com as seguintes características:
- Estrelas = Cada grupo de hotel pode ter estrelas de 1 à 5;
- Preço da Viagem = Valor próprio do hotel por cada 100KM viajado
- Preço da Hospedagem = Estrelas x Dias de Hospedagem x Hóspedes x Preço por estrela (definido por cada grupo de hotel)
- Preço Total = Preço da Viagem + Preço da Hospedagem

### Comparação de Preços
Ao selecionar um ou mais preços da listagem, um botão flutuante é exibido para iniciar a comparação dos planos selecionados.
Ao clicar no botão, o modal de comparação é aberto e nele é exibido em tabela todas as informações dos planos selecionados, para que o usuário possa escolher o pacote que mais lhe chamar á atenção.

### Contratação do Pacote
Caso o usuário prossiga, um novo formulário é aberto contendo as informações do pacote selecionado, e ao lado campos para preenchimento das suas informações pessoais e método de pagamento.

### Notificação do status da reserva
Ao enviar o formulário de contratação, em alguns intantes o usuário será notificado sobre o andamento da sua proposta.

