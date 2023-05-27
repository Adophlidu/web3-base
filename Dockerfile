# 基于 Jenkins 镜像
FROM jenkins/jenkins:lts

# 切换到 root 用户
USER root

# 安装 Node.js
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash - \
    && apt-get install -y nodejs

# 切换回 Jenkins 用户
USER jenkins
