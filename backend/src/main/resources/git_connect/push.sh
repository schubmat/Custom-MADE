#!/bin/bash

#no output means error occurred

gitDirectory=$1
gitName=$3
gitEmail=$4

cd "${gitDirectory}"
git config --local user.name "${gitName}"
git config --local user.email "${gitEmail}"
git push