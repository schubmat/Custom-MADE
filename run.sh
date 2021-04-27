#!/bin/bash

if [[ `screen -ls | grep -e dedoc -e backend` ]]; then
	screen -ls | grep -e dedoc -e backend | cut -d. -f1 | awk '{print $1}' | xargs kill;
fi

# ------------------------------------------------------------
# ------------------------------------------------------------
#
#  ██████   █████   ██████ ██   ██ ███████ ███    ██ ██████  
#  ██   ██ ██   ██ ██      ██  ██  ██      ████   ██ ██   ██ 
#  ██████  ███████ ██      █████   █████   ██ ██  ██ ██   ██ 
#  ██   ██ ██   ██ ██      ██  ██  ██      ██  ██ ██ ██   ██ 
#  ██████  ██   ██  ██████ ██   ██ ███████ ██   ████ ██████  
#                                      
# ------------------------------------------------------------
# ------------------------------------------------------------
#
# start spring backend and set JAVA_HOME if needed#

cd backend

if [[ $1 == "noclean" ]]; then
 	if [[ $2 == "server" ]]; then
		screen -dmS spring-backend bash -c "export JAVA_HOME=/usr/lib/jvm/java-11-openjdk-11.0.1.13-3.el7_6.x86_64; mvn compile process-classes exec:java"
	elif [[ $2 == "deb" ]]; then
		screen -dmS spring-backend bash -c "JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64; mvn compile process-classes exec:java"
	else
		screen -dmS spring-backend bash -c "mvn compile process-classes exec:java"
	fi	
elif [[ $1 == "server" ]]; then
	screen -dmS spring-backend bash -c "export JAVA_HOME=/usr/lib/jvm/java-11-openjdk-11.0.1.13-3.el7_6.x86_64; mvn clean compile process-classes exec:java"
elif [[ $1 == "deb" ]]; then
	screen -dmS spring-backend bash -c "JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64; mvn clean compile process-classes exec:java"
else
	screen -dmS spring-backend bash -c "mvn clean compile process-classes exec:java"
fi
cd ..

# ------------------------------------------------------------
# ------------------------------------------------------------
#
#   ██████ ███    ███     ██     ██ ███████ ██████  
#  ██      ████  ████     ██     ██ ██      ██   ██ 
#  ██      ██ ████ ██     ██  █  ██ █████   ██████  
#  ██      ██  ██  ██     ██ ███ ██ ██      ██   ██ 
#   ██████ ██      ██      ███ ███  ███████ ██████  
#                                                                                                                               
# ------------------------------------------------------------
# ------------------------------------------------------------
#


# start dedoc-web (react app)
cd dedoc-web
 screen -dmS dedoc-react-web bash -c "npm install && npm run start"
cd ..


# ------------------------------------------------------------
# ------------------------------------------------------------
#
#   ██████ ███    ███     ███████ ██████  ██ ████████  ██████  ██████  
#  ██      ████  ████     ██      ██   ██ ██    ██    ██    ██ ██   ██ 
#  ██      ██ ████ ██     █████   ██   ██ ██    ██    ██    ██ ██████  
#  ██      ██  ██  ██     ██      ██   ██ ██    ██    ██    ██ ██   ██ 
#   ██████ ██      ██     ███████ ██████  ██    ██     ██████  ██   ██ 
#                                                                                                                                                  
# ------------------------------------------------------------
# ------------------------------------------------------------
#

# start dedoc-editor (language client)
cd dedoc-editor
screen -dmS dedoc-monaco-editor bash -c "npm install && npm run start"
cd ..
