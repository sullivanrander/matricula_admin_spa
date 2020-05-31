# Matrícula Admin SPA

### Setup do pojeto
Para iniciar o projeto é necessário ter o Node JS instalado
na maquina, após a instalação do Node JS é necessário entrar
na pasta raiz do projeto e instalar as dependências do projeto:
```
$ npm install
```

### Configuração de host
Abra o arquivo src/resource/index.js e altere as configurações 
de acordo com o servidor da API, ex. altere 192.168.0.105 por 
localhost:8000:
```
baseURL: 'http://192.168.0.105/api/v1'
```

### Servindo a aplicação
Inicie o servidor de teste:
```
$ npm run serve
```

Ou no Windows execute o arquivo serve.bat na raiz do projeto.
