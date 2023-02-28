rem filename : %1
rem host: %2
rem blogname : %3
set blogname = %3
scp %1 %2:~/hugotemporar/%1
ssh -t %2 "cd ~ ; ./bin/hugo_%blogname%.sh ; exit"