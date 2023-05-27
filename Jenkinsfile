pipeline {
    agent any
    
    stages {
        stage('安装Node.js') {
            steps {
                sh 'curl -sL https://deb.nodesource.com/setup_14.x | bash -'
                sh 'apt-get install -y nodejs'
            }
        }
        stage('安装依赖') {
            steps {
                // 执行安装依赖的命令
                sh 'npm install'
            }
        }
        
        stage('构建和打包静态资源') {
            steps {
                // 执行构建和打包静态资源的命令
                sh 'npm run build'
            }
        }
    }
}
