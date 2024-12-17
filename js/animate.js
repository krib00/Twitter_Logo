function animation() {
  const canvasAni = document.getElementById("canv");
  const ctxAni = canvasAni.getContext("2d");
  ctxAni.clearRect(0, 0, canvasAni.width, canvasAni.height);

  const pathSegments = [
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
  let index = 0;
  ctxAni.beginPath();

  function drawNextSegment() {
      const segment = pathSegments[index];
      if (segment.moveTo) {
          ctxAni.moveTo(...segment.moveTo);
      }
      if (segment.bezierTo) {
          ctxAni.bezierCurveTo(...segment.bezierTo);
      }
      ctxAni.strokeStyle = "rgb(3, 169, 244)";
      ctxAni.stroke();

      index++;
      if (index < pathSegments.length) {
          setTimeout(drawNextSegment, 30); 
      } else {
          ctxAni.fillStyle = "rgb(3, 169, 244)";
          ctxAni.fill(); 
      }
  }
  drawNextSegment();

  setTimeout(() => {
    bezier(); // delay za 2 sekundi po animaciji se slika zamenja z staticno bezier sliko, da je bolj clean
  }, 2000);
}
