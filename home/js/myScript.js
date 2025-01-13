// Picture Gallery Vue App
const galleryApp = Vue.createApp({
    data() {
        return {
            currentImage: 0,
            images: ['images/image1.jpg', 'images/image2.jpg', 'images/image3.jpg']
        };
    },
    methods: {
        nextImage() {
            this.currentImage = (this.currentImage + 1) % this.images.length;
        },
        prevImage() {
            this.currentImage = (this.currentImage - 1 + this.images.length) % this.images.length;
        }
    }
});

galleryApp.mount('#gallery-app');

// Animation Demos Vue App
const animationApp = Vue.createApp({
    data() {
        return {
            currentGif: 0,
            gifs: ['gifs/animation1.gif', 'gifs/animation2.gif']
        };
    },
    methods: {
        nextGif() {
            this.currentGif = (this.currentGif + 1) % this.gifs.length;
        },
        prevGif() {
            this.currentGif = (this.currentGif - 1 + this.gifs.length) % this.gifs.length;
        }
    }
});

animationApp.mount('#animation-app');

// Guestbook Vue App
const guestbookApp = Vue.createApp({
    data() {
        return {
            newComment: '',
            comments: []
        };
    },
    methods: {
        addComment() {
            if (this.newComment.trim()) {
                this.comments.push(this.newComment);
                this.newComment = '';
            } else {
                alert('Please enter a valid comment!');
            }
        }
    }
});

guestbookApp.mount('#guestbook-app');
