#!/bin/bash
# plz do not ask why, how or wtf (its working)

localProjectDir=$1
repoUrl=$2
branch=$3
repoDir=$4
gitName=$5
gitEmail=$6

cd "${localProjectDir}"
rm -r -f .git
git init
git remote add -f origin "${repoUrl}"
git config --local user.name "${gitName}"
git config --local user.email "${gitEmail}"
git config core.sparseCheckout true
echo "${repoDir}" >> .git/info/sparse-checkout
git pull origin master
git checkout -b $(date +%s)
mkdir -p "${repoDir}"
echo "This branch was created by Custom-MADE tool" >> "${repoDir}/readme"
git add .
git commit -m "init"
git checkout "${branch}"
git checkout -b "${branch}"
git push --set-upstream origin "${branch}"