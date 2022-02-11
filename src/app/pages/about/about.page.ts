import { Component, OnInit } from '@angular/core';
import { ComponentsService } from 'src/app/services/components/components.service';

@Component({
    selector: 'app-about',
    templateUrl: './about.page.html',
    styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

    constructor(
        public components: ComponentsService
    ) { }

    ngOnInit() {
    }

    ionViewDidEnter() {
        this.components.animateOnScroll('about-text', 'animate__fadeInUp');
        this.components.animateOnScroll('about-image', 'animate__fadeInRight');
        this.components.animateOnScroll('mision-text', 'animate__fadeInUp');
        this.components.animateOnScroll('mision-image', 'animate__fadeInLeft');
    }
}
