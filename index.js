const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
});
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);
const mouse = {
  x: undefined,
  y: undefined,
};
canvas.addEventListener("click", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
  drawCircle();
});

function drawCircle() {
  ctx.fillStyle = "pink";
  ctx.beginPath();
  ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2);
  ctx.save();
  // ctx.fill();
  ctx.clip();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.restore();
  // ctx.clearRect(mouse.x - 30, mouse.y - 30, 60, 60);
}
//drawCircle();
