/* groovylint-disable DuplicateStringLiteral, NestedBlockDepth */
pipeline {
  agent none
  stages {
    stage('Front End') {
      agent {
        docker { image 'node:14-alpine' }
      }
      stages {
        stage('Install dependencies') {
          steps {
            dir('app') {
              sh 'npm install'
            }
          }
        }
        stage('Test') {
          steps {
            dir('app') {
              sh 'npm test'
            }
          }
        }
        when {
          branch 'main'
        }
        stage('Build Image') {
          steps {
            dir('app') {
              sh 'docker build -t code-editorv1'
            }
          }
        }
      }
    }
  }
}
