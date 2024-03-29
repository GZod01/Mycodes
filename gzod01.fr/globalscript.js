var getfooter = `<footer>
<div class=footerleft>
    <a href="/">Accueil</a><br>
    <a href="/games.html">Jeux</a><br>
    <a href="/services.html">Services</a><br>
    <a href="/projects.html">Projets</a><br>
</div>
<div class=footerright>
    <a href="/contact.html">Me contacter</a><br>
    <a href="/sitemap.html">Plan Du Site</a><br>
    <a href="/about.html">A Propos</a><br>
    <a href="/legal.html">Mentions Légales</a><br>
</div>              
</footer>`
var getheader = `<header>
<div class="nav">
    <a href="/">Accueil</a>
    <a href="/games.html">Jeux</a>
    <a href="/services.html">Services</a>
    <a href="/projects.html">Projets</a>
    <a href="/contact.html">Me contacter</a>
    <a href="/sitemap.html">Plan Du Site</a>
    <a href="/about.html">A Propos</a>
    <a href="/legal.html">Mentions Légales</a>
</div>
<span class=themebutton onclick=switchtheme()>Switch the theme</span>
</header>`
function getpartials(){
    // Bug with the fetch to api.gzod01.fr/parts/... TODO
    // let default_header = document.createElement('header')
    // let getheader = fetch('//api.gzod01.fr/parts/header.html').then(function (response) {
    //     // The API call was successful!
    //     return response.text();
    // }).then(function (html) {
    //     let parser = new DOMParser();
    //     let doc = parser.parseFromString(html, 'text/html');
    //     return doc
    // }).catch(function (err) {
    //     console.warn('Something went wrong.', err);
    // });
    // default_header.appendChild(getheader)
    // let default_footer = document.createElement('footer')
    // let getfooter = fetch('//api.gzod01.fr/parts/footer.html').then(function (response) {
    //     // The API call was successful!
    //     return response.text();
    // }).then(function (html) {
    //     let parser = new DOMParser();
    //     let doc = parser.parseFromString(html, 'text/html');
    //     return doc
    // }).catch(function (err) {
    //     console.warn('Something went wrong.', err);
    // });
    // default_footer.appendChild(getfooter)
    let default_header = document.createElement('header')
    let default_footer = document.createElement('footer')
    default_header.innerHTML = getheader
    default_footer.innerHTML = getfooter
    document.getElementById('header').replaceWith(default_header)
    document.getElementById('footer').replaceWith(default_footer)
}
function mainscript(){
    getpartials()
    gettheme()
}
window.onload = ()=>{mainscript()}
function gettheme(){
    if(localStorage.getItem('colorscheme')==='dark'){
        var colorScheme = 'dark'
    }
    else if(localStorage.getItem('colorscheme')==='light'){
        var colorScheme = 'light'
    }
    else{
        var colorScheme = getComputedStyle(document.body,':after').content
        if(colorScheme==='"dark"'){colorScheme='dark'}
        else if(colorScheme==='"light"'){colorScheme='light'}
        else{colorScheme='light'}
    }
    let r = document.querySelector(':root')
    if(colorScheme==='dark'){
        r.style.setProperty('--main-bg-color','midnightblue')
        r.style.setProperty('--main-txt-color','white')
        r.style.setProperty('--scdr-bg-color','darkslateblue')
    }
    else if(colorScheme==='light'){
        r.style.setProperty('--main-bg-color','white')
        r.style.setProperty('--main-txt-color','black')
        r.style.setProperty('--scdr-bg-color','lightgray ')
    }
    
}
function switchtheme(){
    let r = document.querySelector(':root')
    if('white'===r.style.getPropertyValue('--main-txt-color')){
        localStorage.setItem('colorscheme','light')
        gettheme()
    }
    else if('black'===r.style.getPropertyValue('--main-txt-color')){
        localStorage.setItem('colorscheme','dark')
        gettheme()
    }
}
