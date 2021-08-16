#!/bin/bash

if [[ ! $1  ]]; then

	if [[ `screen -ls | grep -e Custom-MADE -e LSP-` ]]; then
		screen -ls | grep -e Custom-MADE -e LSP- | cut -d. -f1 | awk '{print $1}' | xargs kill;
	fi

else 

	if [[ `screen -ls | grep -e $1` ]]; then
		screen -ls | grep -e $1 | cut -d. -f1 | awk '{print $1}' | xargs kill;
	fi
	
fi

# kill screens in the backend as you desire

## calling the script with no argument will kill all screens related to DeDoc
## calling with a substring of the screen name will kill all screens with matching names

