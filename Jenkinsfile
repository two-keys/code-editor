pipeline {
  agent any
  stages {
    stage('Build UI') {
      steps {
        dir("app") {
          sh "npm install"
          sh "npm run build"
          sh "npm start"
        }
      }
    }
  }
}