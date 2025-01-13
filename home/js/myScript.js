// Picture Gallery Component
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
  
  // Survey Form Component
  const SurveyForm = {
    template: `
      <div class="comment-box">
        <h2>Guestbook</h2>
        <textarea v-model="comment" placeholder="Leave your comment..."></textarea>
        <button @click="submitComment">Submit</button>
        <div v-if="comments.length">
          <h3>Previous Comments:</h3>
          <ul>
            <li v-for="(comment, index) in comments" :key="index">{{ comment }}</li>
          </ul>
        </div>
      </div>
    `,
    data() {
      return {
        comment: '',
        comments: []
      };
    },
    methods: {
      submitComment() {
        if (this.comment.trim()) {
          this.comments.push(this.comment);
          this.comment = '';
        } else {
          alert("Please write a comment before submitting!");
        }
      }
    }
  };
  
  // Demo Gallery Component
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
        gifs: ['gifs/demo1.gif', 'gifs/demo2.gif', 'gifs/demo3.gif'],
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
  
  // Vue App
  const app = Vue.createApp({
    components: {
      PictureGallery,
      SurveyForm,
      DemoGallery
    }
  });
  
  app.mount('#app');
  