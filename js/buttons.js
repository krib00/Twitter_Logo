document.addEventListener('DOMContentLoaded', function () {

    const btnBezier = this.getElementById('btnBezier');
    const btnPNG = document.getElementById('btnPNG');
    const btnSVG = document.getElementById('btnSVG');
    const btnVizitka = document.getElementById('btnVizitka');

    btnBezier.addEventListener('click', function () {
        btnBezier.classList.add('active');  // pobarva gumb v modro
        btnPNG.classList.remove('active');
        btnSVG.classList.remove('active');
        btnVizitka.classList.remove('active');
    });

    btnPNG.addEventListener('click', function () {
        btnBezier.classList.remove('active');
        btnPNG.classList.add('active');
        btnSVG.classList.remove('active');
        btnVizitka.classList.remove('active');
    });

    btnSVG.addEventListener('click', function () {
        btnBezier.classList.remove('active');
        btnPNG.classList.remove('active');
        btnSVG.classList.add('active');
        btnVizitka.classList.remove('active');
    });

    btnVizitka.addEventListener('click', function () {
        btnBezier.classList.remove('active');
        btnPNG.classList.remove('active');
        btnSVG.classList.remove('active');
        btnVizitka.classList.add('active');
    });
});