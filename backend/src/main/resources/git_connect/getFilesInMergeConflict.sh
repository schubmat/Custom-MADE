#!/bin/bash

#lists all files that are currently in a merge-conflict

gitDirectory=$1

cd "${gitDirectory}"
git diff --name-only --diff-filter=U