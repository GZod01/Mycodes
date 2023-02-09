#!/usr/bin/bash
Help(){
    echo "A script for transforming page easily with the gzod01.fr api"
    echo "If you enter one argument it will print you the html code (so you can use an > to put it in a file) but if you enter two argument it will automatically put the code in a file (1st arg = file to read, 2nd arg= file to write)"
}

if [ $# -eq 0 ]
  then
    Help
else if [ $# -eq 1 ]
  then
cat <<-END
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="//api.gzod01.fr/pictures/gzod01.png">
    <link rel="stylesheet" href="//api.gzod01.fr/css/style.css">
    <script src="//api.gzod01.fr/scripts/main.js"></script>
    <title>$1</title>
</head>
<body>
    <div id="header"></div>
    <div class=content>
        $(cat $1)
    </div>
    <div id="footer"></div>
</body>
</html>
END
else 
    cat > "$2" <<-END
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="//api.gzod01.fr/pictures/gzod01.png">
    <link rel="stylesheet" href="//api.gzod01.fr/css/style.css">
    <script src="//api.gzod01.fr/scripts/main.js"></script>
    <title>$1</title>
</head>
<body>
    <div id="header"></div>
    <div class=content>
        $(cat $1)
    </div>
    <div id="footer"></div>
</body>
</html>
END
fi
fi