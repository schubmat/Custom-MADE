#!/bin/bash

#no output means error occurred

gitDirectory=$1
commitMessage=$2
gitName=$3
gitEmail=$4
files="${@:5}"

cd "${gitDirectory}"
git config --local user.name "${gitName}"
git config --local user.email "${gitEmail}"
git add -A $files
git commit -m "${commitMessage}"
git pull
git push