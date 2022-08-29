pipeline{
    agent any

    parameters {
        string(name: "SPEC", defaultValue: "cypress/e2e/**/**", description: "Ej: cypress/e2e/pom/*.cy.js")
        choice(name: "BROWSER", choices: ['chrome', 'firefox', 'edge'], description: "Seleccione el browser donde desee realizar las pruebas")
    }

    options {
        ansiColor ('xterm')
    }
    
     stages{

        stage('Build'){
            steps{
                echo "Building Application"
            }
        }

        stage('Testing Aplication'){
            steps{
                bat "npm install cypress@10.2.0 --save-dev"
                bat "npx cypress run"               

                }
            }
        
        stage('Deploy'){
            steps{
                echo "Deploying the Application"
            }
        }

        
    }
    
    
    post{
        always{     
                  
           publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/reports/html', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: ''])
            
        }

    }

}