var mouseEvent="empty";
var lastx,lasty;
canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
color="yellow";
width=1;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e) {
    mouseEvent="mousedown";

}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e) {
    mouseEvent="mouseup";
    
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e) {
    mouseEvent="mouseleave";
    
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e) {
    current_x=e.clientX-canvas.offsetLeft;
    current_y=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.linewidth=width;
        console.log("last position of x and y =");
        console.log("x="+lastx+"y="+lasty);
        ctx.moveTo(lastx,lasty);
        console.log("current position of x and y =");
        console.log("x="+current_x+"y="+current_y);
        ctx.lineTo(current_x,current_y);
        ctx.stroke();
        lastx=current_x;
        lasty=current_y;
    }
}
