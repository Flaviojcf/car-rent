# Cadastro de carros

**RF** => Requisitos funcionais

* Deve ser possível cadastrar um carro;
* Deve ser possível listar todas as categorias;


**RN** => Regras de negócio

* Não deve ser possível cadastrar um carro com uma placa já existente;
* Não deve ser possível alterar a placa de um carro já cadastrado;
* Por padrão o carro deve ser cadastrado como disponível;
* O usuário responsável pelo cadastro deve ser um administrador;



# Listagem de carros

**RF** => Requisitos funcionais

* Deve ser possível listar todos os carros disponíveis;
* Deve ser possível listar todos os carros disponíveis pelo nome da categoria;
* Deve ser possível listar todos os carros disponíveis pelo nome da marca;
* Deve ser possível listar todos os carros disponíveis pelo nome do carro;


**RN** => Regras de negócio

* O usuário não precisa estar logado para listar os carros;


# Cadastro de especificação no carro

**RF** => Requisitos funcionais

* Deve ser possível cadastrar uma especificação para um carro;
* Deve ser possível listar todas as especificações;
* Deve ser possível listar todos os carros;


**RN** => Regras de negócio

* Não deve ser possível cadastrar uma especificação para um carro não cadastrado;
* Não deve ser possível cadastrar uma especificação já existente para o mesmo carro;
* O usuário responsável pelo cadastro deve ser um administrador;


# Cadastro de imagens do carro 

**RF** => Requisitos funcionais

* Deve ser possível cadastrar a imagem do carro;
* Deve ser possível listar todos os carros;


**RNF** => Requisitos não funcionais

* Utilizar o multer para upload dos arquivos


**RN** => Regras de negócio

* O usuário deve poder cadastrar mais de uma imagem para o mesmo carro;
* O usuário responsável pelo cadastro deve ser um administrador;


# Aluguel de carros

**RF** => Requisitos funcionais

* Deve ser possível cadastrar um aluguel;


**RN** => Regras de negócio

* O aluguel deve ter duração miníma de 24 horas;
* Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário;
* Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro;