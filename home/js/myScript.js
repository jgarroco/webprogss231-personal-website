// Gallery Navigation
const galleryImages = [
    "images/image1.jpg", // Replace these paths with your actual images
    "images/image2.jpg",
    "images/image3.jpg",
    "images/image4.jpg",
  ];
  
  let currentIndex = 0;
  const galleryDisplay = document.querySelector(".gallery-display");
  
  // Update the displayed image
  function updateGalleryImage() {
    galleryDisplay.innerHTML = `<img src="${galleryImages[currentIndex]}" alt="Gallery Image" class="gallery-image">`;
  }
  
  // Left Button Click
  document.querySelector(".gallery-nav.left").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    updateGalleryImage();
  });
  
  // Right Button Click
  document.querySelector(".gallery-nav.right").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    updateGalleryImage();
  });
  
  // Initialize the gallery with the first image
  updateGalleryImage();
  
  // Animation demos placeholder
  console.log("Animation demos script loaded");
  
  // Comment box submission logic
  document.querySelector(".comment-box button").addEventListener("click", () => {
    const comment = document.querySelector(".comment-box textarea").value;
    if (comment.trim() === "") {
      alert("Please enter a comment!");
    } else {
      alert("Thank you for your comment!");
      document.querySelector(".comment-box textarea").value = "";
    }
  });
  