/* groovylint-disable DuplicateStringLiteral, NestedBlockDepth */
/* groovylint-disable-next-line CompileStatic */
pipeline {
  agent none
  environment {
    DOTNET_CLI_HOME = '/tmp/DOTNET_CLI_HOME'
  }
  stages {
    stage('Run Tests') {
      parallel {
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
        stage('Api Test') {
          agent {
            docker { image 'mcr.microsoft.com/dotnet/sdk:5.0' }
          }
          stages {
            stage('Restore Dependencies') {
              steps {
                dir('api/CodeEditorApi') {
                  sh 'dotnet restore'
                }
              }
            }
            stage('Build & Test') {
              steps {
                dir('api/CodeEditorApi') {
                  sh 'dotnet build'
                  sh 'dotnet test --logger:trx'
                }
              }
            }
          }
        }
      }
    }
    stage('Deployment') {
      parallel {
        stage('UI Deploy') {
          agent any
          when {
            beforeAgent true
            branch 'main'
          }
          stages {
            stage ('Build Image') {
              steps {
                dir('app') {
                  sh 'docker build -t code-editor-ui .'
                }
              }
            }
            stage ('Save Image') {
              steps {
                sh 'docker save -o code-editor-ui.tar code-editor-ui'
              }
            }
            stage('Deploy') {
              steps {
                sshagent(['ssh-for-staging']) {
                  sh 'scp code-editor-ui.tar cruizk@192.168.0.16:/home/cruizk'
                  sh 'cat scripts/deployStagingUI.sh | ssh cruizk@192.168.0.16 /bin/bash'
                }
              }
            }
          }
        }
        stage('API & DB Deploy') {
          agent any
          when {
            beforeAgent true
            branch 'main'
          }
          stages {
            stage('Docker Image Building') {
              parallel {
                stage('Api') {
                  stages {
                    stage ('Build Api Image') {
                      steps {
                        dir('api') {
                          sh 'docker build -f Dockerfile.web -t code-editor-api .'
                        }
                      }
                    }
                    stage('Save Api Image') {
                      steps {
                        sh 'docker save -o code-editor-api.tar code-editor-api'
                      }
                    }
                    stage('Transfer Api Image') {
                      steps {
                        sshagent(['ssh-for-staging']) {
                          sh 'scp code-editor-api.tar cruizk@192.168.0.16:/home/cruizk'
                          sh 'cat scripts/deployStagingApi.sh | ssh cruizk@192.168.0.16 /bin/bash'
                        }
                      }
                    }
                  }
                }
                stage('DB') {
                  stages {
                    stage ('Build DB Image') {
                      steps {
                        dir('api') {
                          sh 'docker build -f Dockerfile.db -t code-editor-db .'
                        }
                      }
                    }
                    stage('Save Db Image') {
                      steps {
                        sh 'docker save -o code-editor-db.tar code-editor-api'
                      }
                    }
                    stage('Transfer DB Image') {
                      steps {
                        sshagent(['ssh-for-staging']) {
                          sh 'scp code-editor-db.tar cruizk@192.168.0.16:/home/cruizk'
                        }
                      }
                    }
                  }
                }
              }
            }
            stage('Deploy') {
              steps {
                sshagent(['ssh-for-staging']) {
                  sh 'cat scripts/deployStagingApi.sh | ssh cruizk@192.168.0.16 /bin/bash'
                }
              }
            }
          }
        }
      }
    }
  }
}
