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

        stage('Installing Dependencies'){

            steps{
                nodejs(nodeJSInstallationName: 'node-16.16.0'){
                    sh "npm install --force"
                }
            }
        }

        stage('Testing Aplication'){
            steps{
                    nodejs(nodeJSInstallationName: 'node-16.16.0'){
                    sh "NO_COLOR=1 npx cypress run --browser ${BROWSER} --spec ${SPEC}"            

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