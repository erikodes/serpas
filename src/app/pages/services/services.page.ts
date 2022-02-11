import { Component, OnInit } from '@angular/core';
import { ComponentsService } from 'src/app/services/components/components.service';

@Component({
    selector: 'app-services',
    templateUrl: './services.page.html',
    styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {

    constructor(
        public components: ComponentsService
    ) { }

    ngOnInit() {
    }

    ionViewDidEnter() {
        this.components.animateOnScroll('header', 'animate__fadeInUp');
        this.components.animateOnScroll('service', 'animate__fadeInUp');
    }
}
