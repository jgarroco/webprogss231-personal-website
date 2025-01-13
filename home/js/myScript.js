// Gallery for Pictures
const galleryImages = [
    "images/image.jpg", 
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg",
  ];
  
  let currentIndex = 0;
  const galleryDisplay = document.querySelector(".gallery-display");
  
  function updateGalleryImage() {
    galleryDisplay.innerHTML = `<img src="${galleryImages[currentIndex]}" alt="Gallery Image">`;
  }
  
  document.querySelector(".gallery-nav.left").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    updateGalleryImage();
  });
  
  document.querySelector(".gallery-nav.right").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    updateGalleryImage();
  });
  
  updateGalleryImage();
  
  // Gallery for Animation Demos
  const demoGifs = [
    "gifs/animation1.gif", 
    "gifs/animation2.gif", 
  ];
  
  let demoIndex = 0;
  const demoDisplay = document.querySelector(".demo-display");
  
  function updateDemoGif() {
    demoDisplay.innerHTML = `<img src="${demoGifs[demoIndex]}" alt="Animation Demo">`;
  }
  
  document.querySelector(".demo-nav.left").addEventListener("click", () => {
    demoIndex = (demoIndex - 1 + demoGifs.length) % demoGifs.length;
    updateDemoGif();
  });
  
  document.querySelector(".demo-nav.right").addEventListener("click", () => {
    demoIndex = (demoIndex + 1) % demoGifs.length;
    updateDemoGif();
  });
  
  updateDemoGif();
  
  // Comment Box
  document.querySelector(".comment-box button").addEventListener("click", () => {
    const comment = document.querySelector(".comment-box textarea").value;
    if (comment.trim() === "") {
      alert("Please enter a comment!");
    } else {
      alert("Thank you for your comment!");
      document.querySelector(".comment-box textarea").value = "";
    }
  });
  