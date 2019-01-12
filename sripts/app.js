class Carousel {
    constructor(el) {
        this.el = el;
        this.currentIndex = 0;
        this.slidesMargin = 0;
        this.initElements();
        this.initCarousel();
        this.listenEvents();
    }

    initElements() {
        this.elements = {
            prev: this.el.querySelector('[data-prev]'),
            next: this.el.querySelector('[data-next]'),
            slides: this.el.querySelector('.slides'),
        };
    }

    initCarousel() {
        this.initSlides();
    }

    initSlides() {
        this.slides = this.el.querySelectorAll('.slide');
    }

    listenEvents() {
        this.elements.prev.addEventListener('click', () => {
            if (this.currentIndex <= 0) {
                this.currentIndex = this.slides.length - 1;
                this.elements.slides.insertBefore(this.slides[this.currentIndex], this.slides[0]);
                return;
            }
            this.elements.slides.insertBefore(this.slides[this.currentIndex - 1], this.slides[this.currentIndex]);
            this.currentIndex--;
        });

        this.elements.next.addEventListener('click', () => {
            if (this.currentIndex >= this.slides.length) {
                this.currentIndex = 0;
            }
            this.elements.slides.appendChild(this.slides[this.currentIndex]);
            this.currentIndex++;
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const carousel = new Carousel(document.querySelector('.carousel'));
    console.dir(carousel);
});
