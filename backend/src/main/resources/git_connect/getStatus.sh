#!/bin/bash

#lists all files matching the given statusCode
#dont use spaces in statusCode!

gitDirectory=$1
statusCode=$2 #for explanation look at file end

cd "${gitDirectory}"
git status -s | grep "$statusCode" | awk '{print $2}'


#X          Y     Meaning
#-------------------------------------------------
#	 [AMD]   not updated
#M        [ MD]   updated in index
#A        [ MD]   added to index
#D                deleted from index
#R        [ MD]   renamed in index
#C        [ MD]   copied in index
#[MARC]           index and work tree matches
#[ MARC]     M    work tree changed since index
#[ MARC]     D    deleted in work tree
#[ D]        R    renamed in work tree
#[ D]        C    copied in work tree
#-------------------------------------------------
#D           D    unmerged, both deleted
#A           U    unmerged, added by us
#U           D    unmerged, deleted by them
#U           A    unmerged, added by them
#D           U    unmerged, deleted by us
#A           A    unmerged, both added
#U           U    unmerged, both modified
#-------------------------------------------------
#?           ?    untracked
#!           !    ignored
#-------------------------------------------------