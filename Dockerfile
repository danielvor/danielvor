# filepath: /workspaces/danielvor/Dockerfile
# Fase de construção (builder stage): Compila sua aplicação Go
FROM golang:1.24.1-alpine AS builder

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia os arquivos de dependências do Go
COPY go.mod go.sum ./

# Baixa as dependências do projeto
RUN go mod download

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
COPY static /static

# Expõe a porta na qual o seu servidor Go irá escutar.
EXPOSE 8080

# Define o comando que será executado quando o contêiner for iniciado
CMD ["/main"]