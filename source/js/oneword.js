function refresh() {
    fetch('https://v1.hitokoto.cn/?c=a&c=b&c=d&c=i&c=k&min_length=0&max_length=30')
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
if (sessionStorage.getItem("word") === null || sessionStorage.getItem("word") === 'undefined') {
    refresh();
    document.getElementById('hitokoto').innerText = sessionStorage.getItem("word");
    document.getElementById('from-work').innerText = sessionStorage.getItem("work");
}