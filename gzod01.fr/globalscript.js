/*header:
<header>
    <div class="nav">
        <a href="/"><img src="/pictures/gzod01.png"></a>
        <a href="/">Accueil</a>
        <a href="/games.html">Jeux</a>
        <a href="/services.html">Services</a>
        <a href="/projects.html">Projets</a>
        <a href="/contact.html">Me contacter</a>
        <a href="/sitemap.html">Plan Du Site</a>
        <a href="/about.html">A Propos</a>
        <a href="/legal.html">Mentions Légales</a>
    </div>
</header>

footer:
<footer>
    <div class=footerleft>
        <a href="/">Accueil</a>
        <a href="/games.html">Jeux</a>
        <a href="/services.html">Services</a>
        <a href="/projects.html">Projets</a>
    </div>
    <div class=footerright>
        <a href="/contact.html">Me contacter</a>
        <a href="/sitemap.html">Plan Du Site</a>
        <a href="/about.html">A Propos</a>
        <a href="/legal.html">Mentions Légales</a>
    </div>        
</footer>
*/
window.onload=function(){
    let default_header = document.createElement('header')
    default_header.innerHTML = `
<div class="nav">
    <a href="/"><img src="/pictures/gzod01.png"></a>
    <a href="/">Accueil</a>
    <a href="/games.html">Jeux</a>
    <a href="/services.html">Services</a>
    <a href="/projects.html">Projets</a>
    <a href="/contact.html">Me contacter</a>
    <a href="/sitemap.html">Plan Du Site</a>
    <a href="/about.html">A Propos</a>
    <a href="/legal.html">Mentions Légales</a>
</div>`
    let default_footer = document.createElement('footer')
    default_footer.innerHTML = `
    `
}



document.getElementById('footer').replaceWith()