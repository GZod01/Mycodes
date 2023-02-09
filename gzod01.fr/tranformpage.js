function transformpage(docstr, titleofdoc){
    let toreturn = `
    <!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="//api.gzod01.fr/pictures/gzod01.png">
    <link rel="stylesheet" href="//api.gzod01.fr/css/style.css">
    <script src="//api.gzod01.fr/scripts/main.js"></script>
    <title>${titleofdoc}</title>
</head>
<body>
    <div id="header"></div>
    <div class=content>
    ${docstr}
    </div>
    <div id="footer"></div>
</body>
</html>
    `
}
window.onload = () => {document.querySelector(':root').innerHTML = transformpage(document.getElementById('content'),document.title)}