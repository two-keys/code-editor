pipeline {
  agent none
  stages {
    stage('Front End') {
      agent {
        docker { image 'node:14-alpine' }
      }
      stage('Build UI') {
        steps {
          dir('app') {
            sh 'npm install'
            sh 'npm run build'
            sh 'npm start'
          }
        }
      }
    }
  }
}
