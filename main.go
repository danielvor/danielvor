package main

import (
    "github.com/gin-gonic/gin"
    "os"
)

func main() {
    // Cria uma nova instância do Gin
    r := gin.Default()

    // Serve arquivos estáticos da pasta "static"
    // Certifique-se de que a pasta "static" contém os arquivos necessários (ex.: index.html, styles.css, etc.)
    r.Static("/", "./static")

    // Obtém a porta da variável de ambiente PORT (necessário para Google Cloud Run/App Engine)
    // Se a variável PORT não estiver definida, usa a porta 8080 como padrão
    port := os.Getenv("PORT")
    if port == "" {
        port = "8080"
    }

    // Inicia o servidor na porta especificada
    r.Run(":" + port)
}