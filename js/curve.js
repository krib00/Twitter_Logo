function bezier(){
  const canvas = document.getElementById("can");
  const ctx = canvas.getContext("2d");
  
  ctx.clearRect(0, 0, canvas.width, canvas.height); // pocisti zaslon

  ctx.beginPath();
  ctx.moveTo(513, 52);

  ctx.bezierCurveTo(513, 52, 513, 53, 513, 53);
  ctx.bezierCurveTo(512, 54, 511, 55, 510, 56);
  ctx.bezierCurveTo(498, 73, 484, 89, 467, 102);
  ctx.bezierCurveTo(461, 106, 460, 110, 460, 116);
  ctx.bezierCurveTo(460, 128, 459, 140, 458, 151);
  ctx.bezierCurveTo(457, 163, 455, 174, 453, 186);
  ctx.bezierCurveTo(446, 216, 434, 245, 419, 271);
  ctx.bezierCurveTo(404, 297, 386, 322, 363, 341);
  ctx.bezierCurveTo(351, 352, 338, 362, 325, 371);
  ctx.bezierCurveTo(307, 384, 288, 393, 267, 400);
  ctx.bezierCurveTo(252, 405, 236, 409, 221, 412);
  ctx.bezierCurveTo(209, 414, 197, 416, 185, 417);
  ctx.bezierCurveTo(169, 417, 152, 417, 136, 416);
  ctx.bezierCurveTo(122, 415, 108, 413, 95, 410);
  ctx.bezierCurveTo(68, 403, 42, 393, 18, 380);
  ctx.bezierCurveTo(13, 377, 8, 374, 3, 371);
  ctx.bezierCurveTo(60, 376, 110, 362, 156, 327);
  ctx.bezierCurveTo(133, 327, 113, 320, 96, 306);
  ctx.bezierCurveTo(79, 293, 66, 276, 59, 254);
  ctx.bezierCurveTo(75, 257, 89, 257, 104, 253);
  ctx.bezierCurveTo(49, 239, 20, 188, 24, 150);
  ctx.bezierCurveTo(31, 152, 38, 155, 45, 157);
  ctx.bezierCurveTo(52, 160, 60, 161, 67, 162);
  ctx.bezierCurveTo(68, 162, 68, 162, 68, 161);
  ctx.bezierCurveTo(46, 145, 32, 124, 26, 98);
  ctx.bezierCurveTo(21, 71, 24, 46, 38, 22);
  ctx.bezierCurveTo(95, 89, 165, 125, 252, 132);
  ctx.bezierCurveTo(252, 129, 252, 128, 252, 128);
  ctx.bezierCurveTo(249, 113, 250, 98, 253, 84);
  ctx.bezierCurveTo(258, 65, 267, 48, 280, 34);
  ctx.bezierCurveTo(290, 24, 302, 16, 315, 11);
  ctx.bezierCurveTo(337, 3, 358, 2, 380, 7);
  ctx.bezierCurveTo(399, 11, 415, 20, 428, 34);
  ctx.bezierCurveTo(430, 35, 432, 36, 434, 36);
  ctx.bezierCurveTo(455, 31, 474, 24, 493, 14);
  ctx.bezierCurveTo(494, 13, 496, 12, 498, 11);
  ctx.bezierCurveTo(490, 35, 476, 53, 455, 68);
  ctx.bezierCurveTo(456, 68, 457, 68, 458, 68);
  ctx.bezierCurveTo(467, 66, 477, 64, 486, 61);
  ctx.bezierCurveTo(495, 59, 504, 55, 513, 52);

  ctx.strokeStyle = "#1DA1F2";
  ctx.stroke(); // narisana pot
  ctx.fillStyle = "#1DA1F2";
  ctx.fill(); // pobarvana slika
}