package main

import (
	"log"
	"net/http"
	"os" // Importar o pacote 'os' para acessar variáveis de ambiente
)

func main() {
	// Cria um manipulador de arquivos estáticos para a pasta "static"
	// Certifique-se que index.html, styles.css e scripts.js estejam dentro da pasta "static"
	fs := http.FileServer(http.Dir("static"))

	// Registra o manipulador para a raiz do site.
	// StripPrefix é usado para remover o "/static/" da URL antes de buscar o arquivo no disco.
	// Ex: requisição para "/styles.css" vai buscar "static/styles.css"
	http.Handle("/", fs)

	// Obtém a porta da variável de ambiente PORT (necessário para Google Cloud Run/App Engine)
	// Se a variável PORT não estiver definida, usa a porta 8080 como padrão
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	log.Printf("Servidor Go rodando na porta :%s\n", port)
	log.Printf("Acesse http://localhost:%s\n", port)

	// Inicia o servidor HTTP na porta especificada
	if err := http.ListenAndServe(":"+port, nil); err != nil {
		log.Fatalf("Erro ao iniciar servidor: %v\n", err)
	}
}