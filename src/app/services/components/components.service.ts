import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ComponentsService {

    constructor() { }

    animateOnScroll(id, animated) {
        const documents = document.querySelectorAll('.' + id);

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting === true) {
                for (let i = 0, max = documents.length; i < max; i++) {
                    documents[i].className += ' ' + animated;
                }
            }
        });

        observer.observe(document.querySelector('.' + id));
    }
}
