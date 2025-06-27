pipeline {
    agent any

    environment {
        NODE_ENV = 'test'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run UI Tests') {
            steps {
                sh 'npx wdio run wdio.conf.js'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'screenshots/**/*.png', allowEmptyArchive: true
        }

        failure {
            echo 'FAILED: Uno o más escenarios de prueba fallaron.'
        }
    }
}
