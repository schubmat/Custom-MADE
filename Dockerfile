FROM ubuntu:latest

RUN bash
RUN apt update
RUN apt install -y npm screen maven gradle git openjdk-11-jdk mysql-server
RUN apt install -y build-essential g++ libx11-dev libxkbfile-dev libsecret-1-dev python-is-python3 curl
RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.5/install.sh | bash
RUN curl -fsSL https://deb.nodesource.com/setup_12.22.5 | bash -
RUN apt install -y nodejs
RUN npm install yarn -g

# Frontend
EXPOSE 3000
# Editor
EXPOSE 3001
# Backend
EXPOSE 8080