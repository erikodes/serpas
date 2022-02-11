import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ComponentsService } from 'src/app/services/components/components.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    constructor(
        public toastController: ToastController,
        public components: ComponentsService
    ) {
    }

    ngOnInit() {
    }

    ionViewDidEnter() {
        this.components.animateOnScroll('service', 'animate__fadeInUp');
        this.components.animateOnScroll('about-text', 'animate__fadeInUp');
        this.components.animateOnScroll('about-image', 'animate__fadeInRight');
        this.components.animateOnScroll('contact__info', 'animate__fadeInLeft');
        this.components.animateOnScroll('contact__form', 'animate__fadeInUp');
    }

    async sendMail() {
        const toast = await this.toastController.create({
            color: 'primary',
            duration: 2000,
            message: 'Correo enviado correctamente.'
        });

        await toast.present();
    }
    hola() {
        console.log('a');

    }
}
