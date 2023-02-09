#!/usr/bin/bash
Help(){
    echo "A script for creating page easily with the gzod01.fr api"
    echo "The only one argument you have to enter is the title of the file without the .html and without space (use - instead of space)"
}

if [ $# -eq 0 ]
  then
    Help
else
    htmlfile = "$1.html"
cat > $htmlfile <<-END
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
        YOUR HTML HERE
    </div>
    <div id="footer"></div>
</body>
</html>
END

fi
