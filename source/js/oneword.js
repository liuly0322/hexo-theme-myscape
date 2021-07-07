function refresh() {
    fetch('https://v1.hitokoto.cn/?c=a&c=b&c=d&c=i&c=k')
        .then(response => response.json())
        .then(data => {
            const hitokoto = document.getElementById('hitokoto')
            const from = document.getElementById('from-work')
            hitokoto.innerText = data.hitokoto
            from.innerText = data.from
        })
        .catch(console.error)
};
refresh()
