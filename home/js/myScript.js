// Vue Components
const PictureGallery = {
    template: `
      <div class="gallery">
        <h2>Picture Gallery</h2>
        <div class="gallery-container">
          <button @click="prevImage" class="gallery-nav">&lt;</button>
          <div class="gallery-display">
            <img :src="images[currentIndex]" alt="Gallery Image">
          </div>
          <button @click="nextImage" class="gallery-nav">&gt;</button>
        </div>
      </div>
    `,
    data() {
      return {
        images: [
          'images/image1.jpg',
          'images/image2.jpg',
          'images/image3.jpg'
        ],
        currentIndex: 0
      };
    },
    methods: {
      prevImage() {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
      },
      nextImage() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      }
    }
  };
  
  const DemoGallery = {
    template: `
      <div class="gallery demo-container">
        <div class="gallery-container">
          <button @click="prevGif" class="demo-nav">&lt;</button>
          <div class="demo-display">
            <img :src="gifs[currentGif]" alt="Demo GIF">
          </div>
          <button @click="nextGif" class="demo-nav">&gt;</button>
        </div>
      </div>
    `,
    data() {
      return {
        gifs: ['gifs/animation1.gif', 'gifs/danimation2.gif'],
        currentGif: 0
      };
    },
    methods: {
      prevGif() {
        this.currentGif = (this.currentGif - 1 + this.gifs.length) % this.gifs.length;
      },
      nextGif() {
        this.currentGif = (this.currentGif + 1) % this.gifs.length;
      }
    }
  };
  
  const app = Vue.createApp({
    components: {
      PictureGallery,
      DemoGallery
    }
  });
  
  app.mount('#app');
  