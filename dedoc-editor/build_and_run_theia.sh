#!/bin/bash

# Build Theia
yarn
# Go to the browser version
cd browser-app
# Start the browser application.
# Possible arguments:
# 	Path after "yarn start": 	Workspace to be used by default.
#	--hostname: 			Hostname
#	--port:				Port
yarn start ./workspace
