#!/bin/bash

remoteUrl=$1
branch=$2
folder=$(date +%s)

mkdir $folder
cd $folder
git init >/dev/null
git archive --remote="${remoteUrl}" "${branch}" | tar -t | grep "/$"
cd ..
rm -r -f $folder
