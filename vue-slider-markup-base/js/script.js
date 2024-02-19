const { createApp } = Vue;
createApp({
    data() {
        return {
            thisSlideIndex: 0,
            slides: {
                titles: [
                    'Marvel\'s Spiderman Miles Morale',
                    'Ratchet & Clank: Rift Apart',
                    'Fortnite',
                    'Stray',
                    "Marvel's Avengers",
                ],
                texts: [
                    'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                    'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                    'Grab all of your friends and drop into Epic Games Fortnite, a massive 100-player face-off that combines looting, crafting, shootouts and chaos.',
                    'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                    'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                ],
                images: [
                    'img/01.webp',
                    'img/02.webp',
                    'img/03.webp',
                    'img/04.webp',
                    'img/05.webp'
                ],
            },
        }
    },
    methods: {

        nextSlide() {
            this.thisSlideIndex = (this.thisSlideIndex + 1) % this.slides.images.length;
            this.activeThumb(this.thisSlideIndex);
        },

        prevSlide() {
            this.thisSlideIndex = (this.thisSlideIndex - 1 + this.slides.images.length) % this.slides.images.length;
            this.activeThumb(this.thisSlideIndex);
        },

        changeSlide(index) {
            this.thisSlideIndex = index;
            this.activeThumb(index);
        },

        activeThumb(index) {
            const thumbnails = document.querySelectorAll(".thumb");

            thumbnails.forEach(function (thumbnail) {

                thumbnail.classList.remove("active");
            });

            thumbnails[index].classList.add("active");
        },

        startAutoplay: function() {
            let change = this;
        
            if (!this.autoplayTime) {
                this.autoplayTime = setInterval(function() {
                    change.nextSlide();
                }, 3000);
            }
        },

        
        stopAutoplay() {
            clearInterval(this.autoplayTime);

            this.autoplayTime = 0;
        }
    },
}).mount("#app");