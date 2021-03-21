#!/bin/bash

PROJECT_PATH=$1
### GROUP_ID="de.btu.sst.swt"
### ARTIFACT_ID=$2
M1_GROUP_ID="de.btu.sst.swt.xtextLsp"
M1_ARTIFACT_ID=$2
M1_STANDALONE_SETUP="org.xtext.example.mydsl.MyDslStandaloneSetup"
M1_VERSION=$3
SOURCE_REL_DIR=$4
TARGET_REL_DIR=$5
ZIP_NAME=$6

#M1_GROUP_ID="my.mavenized.herolanguage"
#M1_ARTIFACT_ID="my.mavenized.herolanguage"
#M1_STANDALONE_SETUP="my.mavenized.HeroLanguageStandaloneSetup"
#M1_VERSION="1.0.0-SNAPSHOT"

cd "$PROJECT_PATH"
mvn clean compile "-Dm1-groupId=${M1_GROUP_ID}" "-Dm1-artifactId=${M1_ARTIFACT_ID}" "-Dm1-standaloneSetup=${M1_STANDALONE_SETUP}" "-Dm1-version=${M1_VERSION}" "-Dsource-dir=${SOURCE_REL_DIR}" "-Dtarget-dir=${TARGET_REL_DIR}"

cd "$TARGET_REL_DIR"
rm "$ZIP_NAME"
zip -r "$ZIP_NAME" ./