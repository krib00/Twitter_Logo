document.addEventListener('DOMContentLoaded', function () {

    const btnBezier = document.getElementById('btnBezier');
    const btnPNG = document.getElementById('btnPNG');
    const btnSVG = document.getElementById('btnSVG');
    const btnVizitka = document.getElementById('btnVizitka');

    const page1 = document.getElementById('pageMain');
    const page2 = document.getElementById('page2');
    const page3 = document.getElementById('page3');
    const page4 = document.getElementById('page4');

    btnBezier.addEventListener('click', function () {
        btnBezier.classList.add('active');  // pobarva gumb v modro
        btnSVG.classList.remove('active');
        btnPNG.classList.remove('active');
        btnVizitka.classList.remove('active');

        page1.classList.add('pageShown');
        page2.classList.remove('pageShown');
        page3.classList.remove('pageShown');
        page4.classList.remove('pageShown');
    });

    btnSVG.addEventListener('click', function () {
        btnBezier.classList.remove('active');
        btnSVG.classList.add('active');
        btnPNG.classList.remove('active');
        btnVizitka.classList.remove('active');

        page1.classList.remove('pageShown');
        page2.classList.add('pageShown');
        page3.classList.remove('pageShown');
        page4.classList.remove('pageShown');
    });

    btnPNG.addEventListener('click', function () {
        btnBezier.classList.remove('active');
        btnSVG.classList.remove('active');
        btnPNG.classList.add('active');
        btnVizitka.classList.remove('active');

        page1.classList.remove('pageShown');
        page2.classList.remove('pageShown');
        page3.classList.add('pageShown');
        page4.classList.remove('pageShown');
    });

    btnVizitka.addEventListener('click', function () {
        btnBezier.classList.remove('active');
        btnSVG.classList.remove('active');
        btnPNG.classList.remove('active');
        btnVizitka.classList.add('active');

        page1.classList.remove('pageShown');
        page2.classList.remove('pageShown');
        page3.classList.remove('pageShown');
        page4.classList.add('pageShown');
    });
});