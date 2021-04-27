#!/bin/bash

command=$1
languageName=$2
commandParamOne=$3
commandParamTwo=$4

cd target/

# unzip xtext lsp git project if not already done.
# obtain exclusive lock for extracting
if [ ! -d "xtext-lsp" ] && [ ! command == "killAll" ]; then
	(
		flock -e 200
		if [ ! -d "xtext-lsp" ]; then
			echo "# cloning LSP environment"

			if [[ `git clone git@git.informatik.tu-cottbus.de:richtro3/xtext-languageserver.git xtext-lsp` ]]; then
				echo "ERR: Cloning git repository failed. Exiting!"
				exit 1;
			fi

			cd xtext-lsp

			git branch -a > branches.current
			cat branches.current | grep -v master | grep -v HEAD > branches.revised
			# remove remotes prefix
			sed -e s/"remotes\/origin\/"//g -e s/"*"/" "/g -i branches.revised


			#availableBranches=`cat branches.current | grep -v master | grep -v HEAD`
			availableBranches=`cat branches.revised`


			# remove remotes prefix
			#availableBranches=${availableBranches//"remotes\/origin\/"/""}
			# remove asteriks of current branch
			#availableBranches=${availableBranches//"*"/" "}

			for currLang in $availableBranches; do

				git checkout $currLang
				git push --set-upstream origin $currLang
			done

			git checkout develop
			rm -rf branches.current branches.revised

		fi
		) 200>/tmp/LSP_CONTROLLER.lockfile
fi

cd xtext-lsp
bash -x manage_LSP_instance.sh $command $languageName $commandParamOne $commandParamTwo

while screen -list | grep "concurrentBuildAndInstall"
do
    sleep 1
done

# EXAMPLES

### start an LSP on port "4400" with language "grammar_MDR"

# bash startLSP.sh start grammar_MDR 4400

### kill all LSP instances

# bash startLSP.sh killAll

### kill all LSP instances running the "grammar_MDR" language

# bash startLSP.sh killAll-FromLanguage grammar_MDR

### kill all a specific LSP instance running the "grammar_MDR" on port 4400

# bash startLSP.sh killAll-FromLanguage grammar_MDR 4400
