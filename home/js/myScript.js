// Gallery Navigation
let currentIndex = 0;
const galleryDisplay = document.querySelector('.gallery-display');

document.querySelector('.gallery-nav.left').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : 0;
    galleryDisplay.textContent = `Image ${currentIndex + 1}`;
});

document.querySelector('.gallery-nav.right').addEventListener('click', () => {
    currentIndex += 1; // Placeholder for gallery navigation logic
    galleryDisplay.textContent = `Image ${currentIndex + 1}`;
});

// Animation demos placeholder
console.log('Animation demos script loaded');

// Comment box submission logic
document.querySelector('.comment-box button').addEventListener('click', () => {
    const comment = document.querySelector('.comment-box textarea').value;
    if (comment.trim() === "") {
        alert("Please enter a comment!");
    } else {
        alert("Thank you for your comment!");
        document.querySelector('.comment-box textarea').value = "";
    }
});
