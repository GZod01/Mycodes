if (sessionStorage.getItem('serveraddr')==null){
    let addr = prompt('server address (ws or wss): ')
    const socket = new WebSocket(addr);
    sessionStorage.setItem('serveraddr',addr)
}
else if (sessionStorage.getItem('serveraddr')!=null){
    const socket = new WebSocket(sessionStorage.getItem('serveraddr'))
}
else{alert('error')}
socket.addEventListener('message', function (event) {
    e=JSON.parse(event)
    for(let i = 0; i < length(e); i++){
        let m= e[i]
        let d = document.createElement('div')
        d.className = 'message'
        let u = document.createElement('div')
        u.innerText = m["username"]
        u.className= 'messageusername'
        let c = document.createElement('div')
        c.innerText = m["content"]
        c.className = 'messagecontent'
        let h = document.createElement('div')
        h.innerText= m['date']
        h.className = 'messagedate'
        d.appendChild(u)
        d.appendChild(c)
        d.appendChild(h)
        document.getElementById('clientmessages').appendChild(d)
    }
});
function sendtoserver(){
    let user = sessionStorage.getItem('username')
    if(user == null){alert('you have to be connected for send message, click on the "connect" button')}
    else{
        let message = document.getElementById('messageinput')
        let today = new Date();
        let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let dateTime = date+' '+time;
        let tosend={
            'username': `${user}`,
            'content':`${message}`,
            'date': `${dateTime}`,
        }
        let strtosend = JSON.stringify(tosend)
        socket.send(strtosend)
    }
}
function toconnect(){
    let usrname = prompt('your username: ')
    sessionStorage.setItem('username',usrname)
}
document.getElementById('sendbutton').addEventListener('click',sendtoserver)
document.getElementById('connect').addEventListener('click',toconnect)