var main = document.querySelector("#main");
var crsr = document.querySelector(".cursor");

main.addEventListener("mousemove", (deta) => {
  //deta is a value that will show the functions details for the mouse movement
  crsr.style.top = deta.y + "px"; //deta.x & deta.y are the movement in twodimensional axis with px value
  crsr.style.left = deta.x + "px";
});
