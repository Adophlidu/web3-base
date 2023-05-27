pipeline {
    stages {
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
