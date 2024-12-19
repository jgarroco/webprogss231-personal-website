// myScript.js
const canvas = document.getElementById("drawingCanvas");
const ctx = canvas.getContext("2d");

// Adjust canvas size
canvas.width = canvas.parentElement.offsetWidth;
canvas.height = canvas.parentElement.offsetHeight;

// State variables
let drawing = false;
let currentColor = "#000000";
let brushSize = 5;
let history = [];
let redoStack = [];

// Function to start drawing
function startDrawing(e) {
    drawing = true;
    const { x, y } = getMousePosition(e);
    ctx.beginPath();
    ctx.moveTo(x, y);
}

// Function to stop drawing
function stopDrawing() {
    if (drawing) {
        history.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
        redoStack = []; // Clear redo stack
    }
    drawing = false;
}

// Function to draw
function draw(e) {
    if (!drawing) return;
    const { x, y } = getMousePosition(e);
    ctx.lineTo(x, y);
    ctx.strokeStyle = currentColor;
    ctx.lineWidth = brushSize;
    ctx.lineCap = "round";
    ctx.stroke();
}

// Get mouse position on canvas
function getMousePosition(e) {
    const rect = canvas.getBoundingClientRect();
    return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
    };
}

// Undo functionality
function undo() {
    if (history.length > 0) {
        redoStack.push(history.pop());
        if (history.length > 0) {
            ctx.putImageData(history[history.length - 1], 0, 0);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }
}

// Redo functionality
function redo() {
    if (redoStack.length > 0) {
        const redoImage = redoStack.pop();
        history.push(redoImage);
        ctx.putImageData(redoImage, 0, 0);
    }
}

// Clear canvas
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    history = [];
    redoStack = [];
}

// Event listeners
canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mousemove", draw);
document.getElementById("colorPicker").addEventListener("input", (e) => {
    currentColor = e.target.value;
});
document.getElementById("brushSize").addEventListener("input", (e) => {
    brushSize = e.target.value;
});
document.getElementById("undo").addEventListener("click", undo);
document.getElementById("redo").addEventListener("click", redo);
document.getElementById("new").addEventListener("click", clearCanvas);
