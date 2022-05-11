#!/bin/bash

sudo docker build -t Custom-Made .
sudo docker run -p 3000:3000 -p 3001:3001 -p 8080:8080 -it Custom-Made

#### once the tty has started, type in:
#
# bash run.sh
#
#### and confirm with enter
#### it will take some time to compile
#### once finished, Custom-Made will be available and ready at localhost:3000
#### thus, open up a browser and type 
#
# http://localhost:3000
#
#### in to the address line