function getpartials(){
    let default_header = document.createElement('header')
    let getheader = fetch('//api.gzod01.fr/parts/header.html').then(function (response) {
        // The API call was successful!
        return response.text();
    }).then(function (html) {
        let parser = new DOMParser();
        let doc = parser.parseFromString(html, 'text/html');
        return doc
    }).catch(function (err) {
        console.warn('Something went wrong.', err);
    });
    default_header.appendChild(getheader)
    let default_footer = document.createElement('footer')
    let getfooter = fetch('//api.gzod01.fr/parts/footer.html').then(function (response) {
        // The API call was successful!
        return response.text();
    }).then(function (html) {
        let parser = new DOMParser();
        let doc = parser.parseFromString(html, 'text/html');
        return doc
    }).catch(function (err) {
        console.warn('Something went wrong.', err);
    });
    default_footer.appendChild(getfooter)
    document.getElementById('header').replaceWith(default_header)
    document.getElementById('footer').replaceWith(default_footer)
}
window.onload=function(){
    getpartials()
    gettheme()
}
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

