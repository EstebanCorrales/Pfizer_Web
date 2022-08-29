pipeline{
    agent any

    parameters {
        string(name: "SPEC", defaultValue: "cypress/e2e/**/**", description: "Ej: cypress/e2e/pom/*.cy.js")
        choice(name: "BROWSER", choices: ['chrome', 'firefoex', 'edge'], description: "Seleccione el browser donde quiere realizar las pruebas")
    }

    options{
        ansiColor('xterm')
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
        }/* 
        stage('API Testing'){
            steps{
                nodejs(nodeJSInstallationName: 'node-16.16.0'){
                    sh "NO_COLOR=1 npx cypress run --browser ${BROWSER} --spec ${SPEC}"

                }
            }
        }*/
        stage('Deploy'){
            steps{
                echo "Deploying the application"
            }
        }
         
    }

    /* 
    
    post{
        always{     
                  
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/reports/html', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: ''])
            
        }
    }

    */
     
}   