#!/bin/bash

#output: list of modified, created or deleted files

gitDirectory=$1

cd "${gitDirectory}"
numberOfChangedFiles=$(git pull | egrep "\|" | wc -l)
#numberOfLines=$(git pull | wc -l)
if (( $numberOfChangedFiles > 0 )); 
then
  git diff --name-only HEAD@{1} HEAD@{0} & git diff HEAD@{1} HEAD@{0} | grep "rename from" | awk '{print $3}'
fi