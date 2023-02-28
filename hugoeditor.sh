#!/usr/bin/sh
# filename : $1
# host: $2
# blogname : $3
scp $1 $2:~/hugotemporar/$1
ssh -t $2 "cd ~ ; ./bin/hugo_$3.sh ; exit"