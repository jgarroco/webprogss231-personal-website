// Vue.js Components for Gallery and Survey
const app = Vue.createApp({});

// Picture Gallery Component
app.component('picture-gallery', {
    template: `
        <div class="gallery">
            <img v-for="image in images" :src="image.src" :alt="image.alt" class="gallery-item">
        </div>
    `,
    data() {
        return {
            images: [
                { src: 'images/photo1.jpg', alt: 'Photo 1' },
                { src: 'images/photo2.jpg', alt: 'Photo 2' },
                { src: 'images/photo3.jpg', alt: 'Photo 3' }
            ]
        };
    }
});

// Survey Form Component
app.component('survey-form', {
    template: `
        <form class="survey-form">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="name">
            
            <label for="comments">Comments:</label>
            <textarea id="comments" v-model="comments"></textarea>
            
            <button @click.prevent="submitForm">Submit</button>
        </form>
    `,
    data() {
        return {
            name: '',
            comments: ''
        };
    },
    methods: {
        submitForm() {
            alert(`Thank you, ${this.name}! Your feedback: "${this.comments}" has been submitted.`);
            this.name = '';
            this.comments = '';
        }
    }
});

app.mount('.vue-app');
