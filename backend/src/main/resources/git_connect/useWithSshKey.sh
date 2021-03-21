#!/bin/bash

#no output means error occurred

sshKeyPath=$1
command="${@:2}"

chmod 600 ${sshKeyPath}
result=$(ssh-agent bash -c "ssh-add \"${sshKeyPath}\"; ${command}" 2> /dev/null)

if [ $? -eq 0 ]; then
	echo $result
fi