#!/bin/bash

###############
# For using this script, please specify the two absolute paths to the tool and the language-project directory first.
###############

###############
#
# Is meant to the following things:
# 	1. Build Language Server.
#	  2. Unzip Language Server to get binaries.
#	      Result:
#		      - /bin/ --> The Language Server binaries
#		      - /lib/ --> The required jars.
#			      (not seem to be needed for execution of the binaries..).
# 	3. Copy binaries to /dedoc-editor/mdr-dsl/build/mdr-language/.
#	  4. Rename binaries to MDR-LanguageServer.bat / MDR-LanguageServer.
#	     (this is required by Theia
# 	    -> change by looking at /mdr-dsl/src/node/mdr-dsl-language-server-contribution.ts)
#	  5. If Frontend is to be recompiled --> specify "-rc" --> script executes in /dedoc-editor/ "yarn"
# 	6. In /dedoc-editor/browser-app --> "yarn start ./workspace/"
#
###############


CUSTOM_MADE_LANGUAGE_SERVER_ROOT_DIR="ABSOLUTE_PATH_TO_CUSTOM_MADE_LANGUAGE_SERVER_PROJECT"
CUSTOM_MADE_TOOL_ROOT_DIR="ABSOLUTE_PATH_TO_CUSTOM_MADE_TOOL"

# CUSTOM_MADE_LANGUAGE_SERVER_ROOT_DIR="/home/robert/Git/GitLab-XtextLS-Richter"
distribution_path="org.xtext.example.mydsl.ide/build/distributions/"
snapshot_name="org.xtext.example.mydsl.ide-1.0.0-SNAPSHOT"

# Step 1
cd "$CUSTOM_MADE_LANGUAGE_SERVER_ROOT_DIR" || exit 1
./gradlew distZip

# Step 2
cd "$distribution_path" || exit 1
# rm -R "$snapshot_name"
unzip -o -q "$snapshot_name.zip"

# Step 3
cp -R "./$snapshot_name" "$CUSTOM_MADE_TOOL_ROOT_DIR/dedoc-editor/mdr-dsl/build/"
cd "$CUSTOM_MADE_TOOL_ROOT_DIR/dedoc-editor/mdr-dsl/build/" || exit 1

# Step 4
rm -R "mdr-language"
mv "./$snapshot_name" "./mdr-language"

# Step 5
cd "../../"
if [[ $1 == "-rc" ]]
then
  yarn
fi

# Step 6
cd "browser-app" || exit 1
yarn start ./workspace/
