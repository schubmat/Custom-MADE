FROM ubuntu:latest

RUN bash
RUN apt-get update
RUN apt-get install -y npm screen maven gradle git openjdk-11-jdk mysql-server
RUN apt-get install -y build-essential g++ libx11-dev libxkbfile-dev libsecret-1-dev python-is-python3 curl
RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.5/install.sh | bash
RUN curl -fsSL https://deb.nodesource.com/setup_12.22.5 | bash -
RUN apt-get install -y nodejs
RUN npm install yarn -g
WORKDIR "/tmp/"
RUN git clone https://github.com/schubmat/Custom-MADE.git Custom-MADE
RUN git clone https://github.com/schubmat/Custom-MADE-1.1-DSLs.git Custom-DSLs
RUN echo "cp -r /tmp/Custom-DSLs" > Custom-MADE/backend/language-repository.git.cnf
RUN sed -i "s~\(\.*port 3001\)~\1 --hostname=0.0.0.0~" Custom-MADE/run.sh
RUN sed -i "s~\(git push\.*\)~\#\1~" Custom-MADE/backend/src/main/resources/lsp/manageLSP.sh
WORKDIR "/tmp/Custom-MADE"

# Frontend
EXPOSE 3000
# Editor
EXPOSE 3001