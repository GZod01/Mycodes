const socket = new WebSocket('ws://localhost:8000');

socket.addEventListener('message', function (event) {
    e=JSON.parse(event)
    for(let i = 0; i < length(e); i++){
        let m= e[i]
        let d = document.createElement('div')
        d.className = 'message'
        let u = document.createElement('div')
        u.innerText = m["username"]
        u.className= 'username'
        let c = document.createElement('div')
        c.innerText = m["content"]
        c.className = 'content'
        let h = document.createElement('div')
        h.innerText= m['date']
        h.className = 'date'
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
document.getElementById('sendbutton').addEventListener('click',sendtoserver)