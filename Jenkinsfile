pipeline {
    agent any

    options {
        timestamps()
        disableConcurrentBuilds()
    }

    environment {
        CI = 'true'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npm run install:browsers'
            }
        }

        stage('Run EventBooking Tests') {
            steps {
                bat 'npm run test:eventbooking'
            }
        }
    }

    post {
        always {
            bat 'npm run report:allure:generate'
            archiveArtifacts artifacts: 'allure-report/**, playwright-report/**', allowEmptyArchive: true
        }
    }
}
