# Fase de construção (builder stage): Compila sua aplicação Go
FROM golang:1.22-alpine AS builder

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia o código-fonte do aplicativo Go para o contêiner
COPY main.go .

# Compila o aplicativo Go para criar um binário executável.
# CGO_ENABLED=0 cria um binário estático, ideal para imagens pequenas e sem dependências de C.
RUN CGO_ENABLED=0 go build -o /main

# Fase final (final stage): Cria uma imagem leve com o binário e os arquivos estáticos
FROM alpine:latest

# Copia o binário compilado da fase de construção para a imagem final
COPY --from=builder /main /main

# Copia a pasta 'static' (com seus arquivos HTML, CSS, JS) para a imagem final
# Certifique-se de que este caminho corresponda à pasta 'static' na raiz do seu projeto
COPY static /static

# Expõe a porta na qual o seu servidor Go irá escutar.
# Para Cloud Run/App Engine, seu aplicativo Go deve escutar na porta definida pela variável de ambiente PORT,
# mas o Dockerfile expõe uma porta interna para o contêiner.
EXPOSE 8080

# Define o comando que será executado quando o contêiner for iniciado
# Ele executa o binário 'main' que você compilou
CMD ["/main"]