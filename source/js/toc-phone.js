document.addEventListener('DOMContentLoaded', function () {
    let c = document.querySelector('#menu-wrap');
    const t = window.matchMedia('(max-width: 767px)').matches;
    if (c && t) {
        function toggle () {
            if(c.style.display === 'none'){
                c.style.display = 'block';
            } else {
                c.style.display = 'none';
            }
        }
        function body(){
            toggle();
            if(c.style.display === 'none'){
                document.body.removeEventListener('click',body);
            }
        }
        c.classList.add('toc-fixed-phone');
        c.querySelector('.widget-title').innerHTML='目录';
        c.addEventListener('click',toggle);
        const s = document.querySelector('#sidebar');
        let b = document.createElement('button');
        b.id = 'menu-nav';
        s.appendChild(b);
        b.addEventListener('click',(e)=>{
            e.stopPropagation();
            document.body.addEventListener('click',body);
            toggle();
        });
    }
});