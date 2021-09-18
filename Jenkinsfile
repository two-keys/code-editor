/* groovylint-disable DuplicateStringLiteral, NestedBlockDepth */
/* groovylint-disable-next-line CompileStatic */
pipeline {
  agent none
  stages {
    stage('UI Test') {
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
      }
    }
    stage('UI Deploy') {
      agent any
      when {
        beforeAgent true
        branch 'main'
      }
      stages {
        stage('Build & Deploy') {
          steps {
            withCredentials([sshUserPrivateKey(credentialsId: 'ssh-for-staging', keyFileVariable: 'SSH_FOR_STAGING')]) {
              sh "ssh -i ${SSH_FOR_STAGING} 192.168.0.16"
              sh 'ls'
              sh 'hostname'
            }
          }
        }
      }
    }
  }
}
