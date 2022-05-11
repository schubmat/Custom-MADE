FROM ubuntu:latest

RUN bash
RUN apt update
RUN apt install -y npm screen maven gradle git openjdk-11-jdk mysql-server
RUN apt install -y build-essential g++ libx11-dev libxkbfile-dev libsecret-1-dev python-is-python3 curl
RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.5/install.sh | bash
RUN curl -fsSL https://deb.nodesource.com/setup_12.22.5 | bash -
RUN apt install -y nodejs
RUN npm install yarn -g
WORKDIR "/tmp/"
RUN git clone https://github.com/schubmat/Custom-MADE.git Custom-MADE
RUN git clone https://github.com/schubmat/Custom-MADE-DSLs.git Custom-DSLs
RUN echo "cp -r /tmp/Custom-DSLs" > Custom-MADE/backend/language-repository.git.cnf
RUN sed -i "s~\(git push\.*\)~\#\1~" Custom-MADE/backend/src/main/resources/lsp/manageLSP.sh
WORKDIR "/tmp/Custom-MADE"

# Frontend
EXPOSE 3000
# Editor
EXPOSE 3001
# Backend
EXPOSE 8080
