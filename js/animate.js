let isAnimating = false; 

function animation() {
  if (isAnimating) return;  // če je isAnimatin true se nič ne zgodi, v primerui da je false, se začne proces risanja

  isAnimating = true; 
  const canvasAni = document.getElementById("canv");
  const ctxAni = canvasAni.getContext("2d");
  ctxAni.clearRect(0, 0, canvasAni.width, canvasAni.height); // pocisti zaslon v primeru, če je kaj narisano od prej

  const pathSegments = [ // kordinati, isti kot v curve.js, shranjeni v tabeli, da se omeji točke po segmentih
    { moveTo: [252, 132] },
    { bezierTo: [256, 111, 269, 92, 269, 92] },
    { bezierTo: [269, 92, 287, 68, 311, 58] },
    { bezierTo: [337, 45, 368, 49, 368, 49] },
    { bezierTo: [368, 49, 387, 53, 403, 61] },
    { bezierTo: [420, 69, 431, 82, 431, 82] },
    { bezierTo: [431, 82, 449, 78, 465, 72] },
    { bezierTo: [477, 68, 488, 62, 493, 59] },
    { bezierTo: [496, 57, 497, 57, 497, 57] },
    { bezierTo: [497, 57, 494, 71, 483, 85] },
    { bezierTo: [472, 100, 452, 114, 452, 114] },
    { bezierTo: [452, 114, 466, 112, 479, 109] },
    { bezierTo: [495, 105, 511, 98, 511, 98] },
    { bezierTo: [511, 98, 506, 106, 498, 115] },
    { bezierTo: [495, 119, 492, 123, 488, 127] },
    { bezierTo: [483, 132, 478, 137, 473, 141] },
    { bezierTo: [465, 147, 459, 151, 459, 151] },
    { bezierTo: [459, 151, 460, 170, 458, 198] },
    { bezierTo: [457, 200, 457, 203, 457, 206] },
    { bezierTo: [456, 211, 456, 217, 454, 223] },
    { bezierTo: [450, 239, 446, 259, 437, 277] },
    { bezierTo: [435, 284, 432, 289, 429, 296] },
    { bezierTo: [427, 301, 425, 305, 422, 310] },
    { bezierTo: [396, 362, 342, 405, 342, 405] },
    { bezierTo: [342, 405, 329, 414, 318, 421] },
    { bezierTo: [314, 423, 308, 427, 308, 427] },
    { bezierTo: [308, 427, 294, 435, 275, 443] },
    { bezierTo: [258, 449, 241, 454, 241, 454] },
    { bezierTo: [241, 454, 207, 462, 172, 464] },
    { bezierTo: [143, 464, 118, 461, 118, 461] },
    { bezierTo: [118, 461, 75, 455, 45, 440] },
    { bezierTo: [21, 431, 3, 418, 3, 418] },
    { bezierTo: [3, 418, 47, 421, 84, 410] },
    { bezierTo: [100, 405, 117, 398, 129, 391] },
    { bezierTo: [146, 382, 155, 373, 155, 373] },
    { bezierTo: [155, 373, 115, 373, 91, 349] },
    { bezierTo: [67, 331, 58, 301, 58, 301] },
    { bezierTo: [57, 302, 62, 302, 68, 302] },
    { bezierTo: [72, 302, 78, 302, 83, 302] },
    { bezierTo: [104, 301, 104, 298, 104, 298] },
    { bezierTo: [104, 298, 95, 296, 84, 292] },
    { bezierTo: [70, 286, 55, 274, 45, 262] },
    { bezierTo: [20, 232, 21, 195, 21, 195] },
    { bezierTo: [21, 195, 31, 200, 42, 204] },
    { bezierTo: [57, 208, 68, 208, 68, 208] },
    { bezierTo: [69, 208, 59, 200, 47, 188] },
    { bezierTo: [40, 179, 30, 166, 27, 152] },
    { bezierTo: [12, 100, 36, 68, 36, 68] },
    { bezierTo: [36, 68, 69, 111, 124, 141] },
    { bezierTo: [134, 147, 146, 152, 157, 156] },
    { bezierTo: [167, 160, 181, 165, 191, 168] },
    { bezierTo: [226, 177, 252, 177, 252, 177] },
    { bezierTo: [252, 178, 248, 154, 252, 132] }
  ];

  const drawSpeed = 0.1; // hitrost risanja
  let index = 0;
  let t = 0; // t predstavlja čas, ko pride do 1, se segment konča in se prične novi
  ctxAni.beginPath();

  drawNextSegment(); // se izvede funkcija odspodi
  function drawNextSegment() {
    const segment = pathSegments[index];

    if (segment.moveTo) { // ce segment  vsebuje moveTo komando, premakne risalni kurzor na kordinate določene v segmentu
      ctxAni.moveTo(...segment.moveTo);
      t = 0;
      index++; // nov index, da pride nov segment na vrsto

    } else if (segment.bezierTo) { // ce vsebuje bezierTo komando se zgodi naslednje:
      const [cp1x, cp1y, cp2x, cp2y, x, y] = segment.bezierTo; // se kordinati za bezier shranijo v posamezne spremenljivke, cp1 = zač točka, cp2 = druga točka, x,y a zadne točka
      const start = ctxAni.currentX && ctxAni.currentY ? [ctxAni.currentX, ctxAni.currentY] : ctxAni.__currentPoint || [252, 132];
      const [x0, y0] = start;

      const cx = (1 - t)**3 * x0 + 3 * (1 - t)**2 * t * cp1x + 3 * (1 - t) * t * t * cp2x + t**3 * x; // Formula za Bezier Curve kordinato X
      const cy = (1 - t)**3 * y0 + 3 * (1 - t)**2 * t * cp1y + 3 * (1 - t) * t * t * cp2y + t**3 * y; // Formula za Bezier Curve kordinato Y

      ctxAni.bezierCurveTo(cx, cy, cx, cy, cx, cy); // RISANJE - preko tega vidimo animacijo, use tocke so iste, zato da se prikaže tenka črta za lep prikaz
      ctxAni.strokeStyle = "rgb(3, 169, 244)";
      ctxAni.stroke();
      t += drawSpeed;

      if (t >= 1) { // ce je t ena se konča risanje segmenta in se prične novi
        ctxAni.__currentPoint = [x, y]; // trenutna točka (konec bezier curva) se shrani v canvas komando currentpoint.!!!! (ČE TEGA NI, PROGRAM NE VE KJE SE SEGMENT KONČA, IN KO SE RIŠE NOV SEGMENT SE BO ZAČEL RISATI VEDNO IZ ISTE TOČKE IN JE ANIMACIJA POPAČENA)
        index++;
        t = 0;
      }
    }

    if (index < pathSegments.length) { // če risanje NI končano, pokliče metodo za
      requestAnimationFrame(drawNextSegment); // poklice metodo preden se screen updejta, tako ostane animacija smooth
    } else {
      isAnimating = false; // boolean, postane false, da se animacija lahko ponovno predvaja, če uporabnik klikne na gumb
      bezier(); // po koncani animaciji, se slika zamenja s prvotno
    }
  }
}
