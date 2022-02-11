import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.page.html',
    styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

    constructor(
        public toastController: ToastController
    ) { }

    ngOnInit() {

    }

    async sendMail() {
        const toast = await this.toastController.create({
            color: 'primary',
            duration: 2000,
            message: 'Correo enviado correctamente.'
        });

        await toast.present();
    }

}
