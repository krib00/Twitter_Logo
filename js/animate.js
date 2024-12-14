function animation() {
    const canvasAni = document.getElementById("canv");
    const ctxAni = canvasAni.getContext("2d");
    ctxAni.clearRect(0, 0, canvasAni.width, canvasAni.height);  // pocisti zaslon oz. canvas
  
    const pathSegments = [
      { moveTo: [513, 52] },
      { bezierTo: [513, 52, 513, 53, 513, 53] },
      { bezierTo: [512, 54, 511, 55, 510, 56] },
      { bezierTo: [498, 73, 484, 89, 467, 102] },
      { bezierTo: [461, 106, 460, 110, 460, 116] },
      { bezierTo: [460, 128, 459, 140, 458, 151] },
      { bezierTo: [457, 163, 455, 174, 453, 186] },
      { bezierTo: [446, 216, 434, 245, 419, 271] },
      { bezierTo: [404, 297, 386, 322, 363, 341] },
      { bezierTo: [351, 352, 338, 362, 325, 371] },
      { bezierTo: [307, 384, 288, 393, 267, 400] },
      { bezierTo: [252, 405, 236, 409, 221, 412] },
      { bezierTo: [209, 414, 197, 416, 185, 417] },
      { bezierTo: [169, 417, 152, 417, 136, 416] },
      { bezierTo: [122, 415, 108, 413, 95, 410] },
      { bezierTo: [68, 403, 42, 393, 18, 380] },
      { bezierTo: [13, 377, 8, 374, 3, 371] },
      { bezierTo: [60, 376, 110, 362, 156, 327] },
      { bezierTo: [133, 327, 113, 320, 96, 306] },
      { bezierTo: [79, 293, 66, 276, 59, 254] },
      { bezierTo: [75, 257, 89, 257, 104, 253] },
      { bezierTo: [49, 239, 20, 188, 24, 150] },
      { bezierTo: [31, 152, 38, 155, 45, 157] },
      { bezierTo: [52, 160, 60, 161, 67, 162] },
      { bezierTo: [68, 162, 68, 162, 68, 161] },
      { bezierTo: [46, 145, 32, 124, 26, 98] },
      { bezierTo: [21, 71, 24, 46, 38, 22] },
      { bezierTo: [95, 89, 165, 125, 252, 132] },
      { bezierTo: [252, 129, 252, 128, 252, 128] },
      { bezierTo: [249, 113, 250, 98, 253, 84] },
      { bezierTo: [258, 65, 267, 48, 280, 34] },
      { bezierTo: [290, 24, 302, 16, 315, 11] },
      { bezierTo: [337, 3, 358, 2, 380, 7] },
      { bezierTo: [399, 11, 415, 20, 428, 34] },
      { bezierTo: [430, 35, 432, 36, 434, 36] },
      { bezierTo: [455, 31, 474, 24, 493, 14] },
      { bezierTo: [494, 13, 496, 12, 498, 11] },
      { bezierTo: [490, 35, 476, 53, 455, 68] },
      { bezierTo: [456, 68, 457, 68, 458, 68] },
      { bezierTo: [467, 66, 477, 64, 486, 61] },
      { bezierTo: [495, 59, 504, 55, 513, 52] }
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
      ctxAni.strokeStyle="rgb(3, 169, 244)";
      ctxAni.stroke();
  
      index++;
      if (index < pathSegments.length) {
        setTimeout(drawNextSegment, 40); 
      } else {
        ctxAni.fillStyle = "rgb(3, 169, 244)";
        ctxAni.fill();
      }
    }
    drawNextSegment();
    
    setTimeout(() => {
        bezier(); // delay za 1.9 sekundi po animaciji se slika zamenja z staticno bezier sliko, da je bolj clean
      }, 1900);
  }
  