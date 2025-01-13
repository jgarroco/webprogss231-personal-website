// Adjust canvas size dynamically
function resizeCanvas() {
  const canvas = document.getElementById("drawingCanvas");
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}

window.onload = resizeCanvas;
window.addEventListener("resize", resizeCanvas);

// Add fixes to drawing functionality
canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mousemove", draw);

// Improved undo and redo
document.getElementById("undo").addEventListener("click", undo);
document.getElementById("redo").addEventListener("click", redo);
