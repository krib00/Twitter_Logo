function bezier(color) {
  const canvas = document.getElementById("canv");
  const ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.moveTo(252, 132); 

  ctx.bezierCurveTo(256, 111, 269, 92, 269, 92);
  ctx.bezierCurveTo(269, 92, 287, 68, 311, 58);
  ctx.bezierCurveTo(337, 45, 368, 49, 368, 49);
  ctx.bezierCurveTo(368, 49, 387, 53, 403, 61);
  ctx.bezierCurveTo(420, 69, 431, 82, 431, 82);
  ctx.bezierCurveTo(431, 82, 449, 78, 465, 72);
  ctx.bezierCurveTo(477, 68, 488, 62, 493, 59);
  ctx.bezierCurveTo(496, 57, 497, 57, 497, 57);
  ctx.bezierCurveTo(497, 57, 494, 71, 483, 85);
  ctx.bezierCurveTo(472, 100, 452, 114, 452, 114);
  ctx.bezierCurveTo(452, 114, 466, 112, 479, 109);
  ctx.bezierCurveTo(495, 105, 511, 98, 511, 98);
  ctx.bezierCurveTo(511, 98, 506, 106, 498, 115);
  ctx.bezierCurveTo(495, 119, 492, 123, 488, 127);
  ctx.bezierCurveTo(483, 132, 478, 137, 473, 141);
  ctx.bezierCurveTo(465, 147, 459, 151, 459, 151);
  ctx.bezierCurveTo(459, 151, 460, 170, 458, 198);
  ctx.bezierCurveTo(457, 200, 457, 203, 457, 206);
  ctx.bezierCurveTo(456, 211, 456, 217, 454, 223);
  ctx.bezierCurveTo(450, 239, 446, 259, 437, 277);
  ctx.bezierCurveTo(435, 284, 432, 289, 429, 296);
  ctx.bezierCurveTo(427, 301, 425, 305, 422, 310);
  ctx.bezierCurveTo(396, 362, 342, 405, 342, 405);
  ctx.bezierCurveTo(342, 405, 329, 414, 318, 421);
  ctx.bezierCurveTo(314, 423, 308, 427, 308, 427);
  ctx.bezierCurveTo(308, 427, 294, 435, 275, 443);
  ctx.bezierCurveTo(258, 449, 241, 454, 241, 454);
  ctx.bezierCurveTo(241, 454, 207, 462, 172, 464);
  ctx.bezierCurveTo(143, 464, 118, 461, 118, 461);
  ctx.bezierCurveTo(118, 461, 75, 455, 45, 440);
  ctx.bezierCurveTo(21, 431, 3, 418, 3, 418);
  ctx.bezierCurveTo(3, 418, 47, 421, 84, 410);
  ctx.bezierCurveTo(100, 405, 117, 398, 129, 391);
  ctx.bezierCurveTo(146, 382, 155, 373, 155, 373);
  ctx.bezierCurveTo(155, 373, 115, 373, 91, 349);
  ctx.bezierCurveTo(67, 331, 58, 301, 58, 301);
  ctx.bezierCurveTo(57, 302, 62, 302, 68, 302);
  ctx.bezierCurveTo(72, 302, 78, 302, 83, 302);
  ctx.bezierCurveTo(104, 301, 104, 298, 104, 298);
  ctx.bezierCurveTo(104, 298, 95, 296, 84, 292);
  ctx.bezierCurveTo(70, 286, 55, 274, 45, 262);
  ctx.bezierCurveTo(20, 232, 21, 195, 21, 195);
  ctx.bezierCurveTo(21, 195, 31, 200, 42, 204);
  ctx.bezierCurveTo(57, 208, 68, 208, 68, 208);
  ctx.bezierCurveTo(69, 208, 59, 200, 47, 188);
  ctx.bezierCurveTo(40, 179, 30, 166, 27, 152);
  ctx.bezierCurveTo(12, 100, 36, 68, 36, 68);
  ctx.bezierCurveTo(36, 68, 69, 111, 124, 141);
  ctx.bezierCurveTo(134, 147, 146, 152, 157, 156);
  ctx.bezierCurveTo(167, 160, 181, 165, 191, 168);
  ctx.bezierCurveTo(226, 177, 252, 177, 252, 177);
  ctx.bezierCurveTo(252, 178, 248, 154, 252, 132);

  ctx.strokeStyle = color;
  ctx.stroke(); 
  ctx.fillStyle = color;
  ctx.fill();
}
