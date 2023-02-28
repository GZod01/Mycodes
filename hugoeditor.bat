set filename=%1
set host=%2
set blogname=%3
scp %filename% %host%:~/hugotemporar/%filename%
ssh -t %host% "cd ~ ; ./bin/hugo_%blogname%.sh ~/hugotemporar/%filename% ; exit"