document.addEventListener('DOMContentLoaded', function () {
    
    const profilBtn = document.querySelector('.profilBtn');
    const arrowCont = document.querySelector('.arrowCont');

    const profilModal = document.querySelector('.profilModal');
    
    const btnSlika = document.querySelector('.slikaBtn')
    const btnBezier = document.getElementById('btnBezier');
    const btnPNG = document.getElementById('btnPNG');
    const btnSVG = document.getElementById('btnSVG');

    const pageMain = document.querySelector('.homePage');
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    const page3 = document.getElementById('page3');

    const canvasCont = document.querySelector('.canvasCont');
    const svgCont = document.querySelector('.svgCont');
    const pngCont = document.querySelector('.pngCont');
    
    const downloadPic = document.querySelector('.picCont');
    const downloadPic2 = document.querySelector('.picCont2');
    const downloadPic3 = document.querySelector('.picCont3');


    btnSlika.addEventListener('click', function () {
        btnSlika.classList.add('active');
        btnBezier.classList.remove('active');
        btnSVG.classList.remove('active');
        btnPNG.classList.remove('active');

        pageMain.classList.add('pageShown');
        page1.classList.remove('pageShown');
        page2.classList.remove('pageShown');
        page3.classList.remove('pageShown');
    });
    btnBezier.addEventListener('click', function () {
        btnSlika.classList.remove('active');
        btnBezier.classList.add('active');  // pobarva gumb v modro
        btnSVG.classList.remove('active');
        btnPNG.classList.remove('active');

        page1.classList.add('pageShown');
        page2.classList.remove('pageShown');
        page3.classList.remove('pageShown');
        pageMain.classList.remove('pageShown');
    });

    btnSVG.addEventListener('click', function () {
        btnSlika.classList.remove('active');
        btnBezier.classList.remove('active');
        btnSVG.classList.add('active');
        btnPNG.classList.remove('active');

        page1.classList.remove('pageShown');
        page2.classList.add('pageShown');
        page3.classList.remove('pageShown');
        pageMain.classList.remove('pageShown');
    });

    btnPNG.addEventListener('click', function () {
        btnSlika.classList.remove('active');
        btnBezier.classList.remove('active');
        btnSVG.classList.remove('active');
        btnPNG.classList.add('active');

        page1.classList.remove('pageShown');
        page2.classList.remove('pageShown');
        page3.classList.add('pageShown');
        pageMain.classList.remove('pageShown');
    });
    canvasCont.addEventListener('mouseenter', function () {
        downloadPic.classList.add("downShown");
    });
    canvasCont.addEventListener('mouseleave', function () {
        downloadPic.classList.remove("downShown");
    });

    svgCont.addEventListener('mouseenter', function () {
        downloadPic2.classList.add("downShown");
    });
    svgCont.addEventListener('mouseleave', function () {
        downloadPic2.classList.remove("downShown");
    });

    pngCont.addEventListener('mouseenter', function () {
        downloadPic3.classList.add("downShown");
    });
    pngCont.addEventListener('mouseleave', function () {
        downloadPic3.classList.remove("downShown");
    });



    profilBtn.addEventListener('click', function () {
        arrowCont.classList.toggle("rotate");
        profilModal.classList.toggle("profileActive");
    });
});

