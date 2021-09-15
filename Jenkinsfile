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
              sh 'npm install --production'
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
      }
    }
  }
}
