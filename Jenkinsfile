pipeline {
  agent any

  environment {
    RUNRIGHT_URL     = credentials('runright-url')
    RUNRIGHT_API_KEY = credentials('runright-api-key')
    RUNRIGHT_BIN     = credentials('runright-bin-path')
  }

  stages {

    stage('Install') {
      steps {
        sh 'node --version && npm --version'
        sh 'npm ci'
      }
    }

    stage('Lint') {
      steps {
        sh """
          $RUNRIGHT_BIN monitor \
            --export http \
            --http-url $RUNRIGHT_URL \
            --job-id "devops-learn-lint-${env.BUILD_NUMBER}" \
            --duration 5m &
          echo \$! > .runright.pid
          npm run lint
          kill \$(cat .runright.pid) 2>/dev/null || true
        """
      }
    }

    stage('Test') {
      steps {
        sh """
          $RUNRIGHT_BIN monitor \
            --export http \
            --http-url $RUNRIGHT_URL \
            --job-id "devops-learn-test-${env.BUILD_NUMBER}" \
            --duration 10m &
          echo \$! > .runright.pid
          npm run test:run
          kill \$(cat .runright.pid) 2>/dev/null || true
        """
      }
    }

    stage('Build') {
      steps {
        sh """
          $RUNRIGHT_BIN monitor \
            --export http \
            --http-url $RUNRIGHT_URL \
            --job-id "devops-learn-build-${env.BUILD_NUMBER}" \
            --duration 10m &
          echo \$! > .runright.pid
          npm run build
          kill \$(cat .runright.pid) 2>/dev/null || true
        """
      }
    }

  }

  post {
    always {
      sh 'kill $(cat .runright.pid) 2>/dev/null || true'
      archiveArtifacts artifacts: 'dist/**', allowEmptyArchive: true
    }
    success {
      echo 'Pipeline passed — check the RunRight dashboard'
    }
    failure {
      echo 'Pipeline failed — RunRight heartbeat data still sent for interrupted jobs'
    }
  }
}

