#!/bin/bash

## 
# Process input parameters
#
PROJECT_ID=$1
POM_PATH=$2
M1_GROUP_ID="de.btu.sst.swt.xtextLsp"
M1_ARTIFACT_ID=$3
M1_VERSION=$4
SOURCE_REL_DIR=$5
TARGET_REL_DIR=$6

## 
# Set constants
#
M1_STANDALONE_SETUP="org.xtext.example.mydsl.MyDslStandaloneSetup"

# echo "#### "
# echo "# ${POM_PATH}"
# echo "#### "

# echo "### " >> tmp.txt
# echo "## ${1} #### ${2} ## ${3} ## ${4} ## ${5} ## ${6}" >> tmp.txt
# echo "### " >> tmp.txt
# echo "mvn clean compile -B -q \"-Dm1-groupId=${M1_GROUP_ID}\" \"-Dm1-artifactId=${M1_ARTIFACT_ID}\" \"-Dm1-standaloneSetup=${M1_STANDALONE_SETUP}\" \"-Dm1-version=${M1_VERSION}-${M1_ARTIFACT_ID}\" \"-Dsource-dir=${SOURCE_REL_DIR}\" \"-Dtarget-dir=${TARGET_REL_DIR}\"" >> tmp.txt

cd "$POM_PATH"
flock /tmp/project_$PROJECT_ID.lockfile mvn clean compile -B -q "-Dm1-groupId=${M1_GROUP_ID}" "-Dm1-artifactId=${M1_ARTIFACT_ID}" "-Dm1-standaloneSetup=${M1_STANDALONE_SETUP}" "-Dm1-version=${M1_VERSION}-${M1_ARTIFACT_ID}" "-Dsource-dir=${SOURCE_REL_DIR}" "-Dtarget-dir=${TARGET_REL_DIR}"
