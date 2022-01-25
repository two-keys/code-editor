package server

import "github.com/gin-gonic/gin"

func RunServer() {
	r := gin.Default()

	r.POST("/compile", CompileHandler)

	r.Run("0.0.0.0:8081")
}
