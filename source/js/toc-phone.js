document.addEventListener('DOMContentLoaded', function () {
    let c = document.querySelector('#menu-wrap');
    const t = window.matchMedia('(max-width: 767px)').matches;
    if (c && t) {
        c.classList.add('toc-fixed-phone');
        c.querySelector('.widget-title').innerHTML='目录 （再次点击退出）';
        const s = document.querySelector('#sidebar');
        let b = document.createElement('button');
        b.id = 'menu-nav';
        s.appendChild(b);
        b.addEventListener('click',function() {
            if(c.style.display === 'none'){
                c.style.display = 'block';
            } else {
                c.style.display = 'none';
            }
        });
    }
});