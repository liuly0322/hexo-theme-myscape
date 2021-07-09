function refresh() {
    fetch('https://v1.hitokoto.cn/?c=a&c=b&c=d&c=i&c=k')
        .then(response => response.json())
        .then(data => {
            const hitokoto = document.getElementById('hitokoto')
            const from = document.getElementById('from-work')
            hitokoto.innerText = data.hitokoto
            from.innerText = data.from
            sessionStorage.setItem("word", hitokoto.innerText);
            sessionStorage.setItem("work", from.innerText);
        })
        .catch(console.error)
};
for(let i=0;sessionStorage.getItem("word") === null || sessionStorage.getItem("word") === 'undefined';i++){
    setTimeout("refresh()", 300);
    if(i > 3){
        break;
    }
}