pipeline {
    agent any

    tools {
        nodejs 'NodeJS_24'
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/brimarrodriguez/UI_Testing_OpenCart.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run WebDriverIO Tests') {
            steps {
                bat 'npx wdio run wdio.conf.js'
            }
        }
    }

    post {
        always {
            echo 'Pipeline finalizado'
        }
        success {
            echo 'La ejecución fue exitosa ✅'
        }
        failure {
            echo 'La ejecución falló ❌'
        }
    }
}

