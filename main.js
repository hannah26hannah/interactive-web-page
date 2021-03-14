const main = document.getElementById('App');
const title = document.createElement('h1');
title.innerText = 'Interactive Web Technology - Example'
const menu = document.createElement('ul');

const examples = [
    {title: '3D Card Animation', href:'./Pages/01_3d_Animation/index.html', visible: true},
    {title: 'SVG Morphing Animation w/anime.js', href:'./Pages/02_SVG_Animation/index.html', visible: true},
    {title: 'Text SVG Path Animation', href:'./Pages/03_Text_SVG_Animation/index.html', visible: true},
    {title: 'Text SVG Path Animation 2', href:'./Pages/04_Text_SVG_Animation_2/index.html', visible: true},
    {title: 'Text SVG Path Animation 3', href:'./Pages/05_Text_SVG_Animation_3/index.html', visible: true},
    {title: 'Line Chart Animation', href: './Pages/06_Line_Chart/index.html', visible: true},
    {title: 'Static', href: './Pages/07_Static', visible: false},
    {title: 'Interactive Journal Page', href: './Pages/08_Interactive_Journal/index.html', visible: true},
    {title: 'Interactive Journal Page 2', href: './Pages/09_Interactive_Journal_2/index.html', visible: true},
    {title: 'Canvas Animation (Bouncing Ball)', href: './Pages/10_Canvas_Animation/index.html', visible: true},
    {title: 'Canvas Animation (Logo)', href: './Pages/11_Canvas_Animation_2/index.html', visible: true},
    {title: 'Canvas Animation (Snowy Canvas)', href: './Pages/12_Canvas_Animation_3/index.html', visible: true},
]


examples.forEach(example => {
    if (example.visible) {
        menu.innerHTML += `<li><a href='${example.href}' target='_blank'>${example.title}</a></li>`
    }
})

main.appendChild(title);
main.appendChild(menu);

