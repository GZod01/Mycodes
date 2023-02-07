function addscrc(scrc){
    let x = document.createElement('script')
    x.src = `${scrc}`
    document.head.appendChild(x)
}