import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    url: any;
    constructor(
        public router: Router,
    ) {
        router.events.subscribe(() => {
            this.url = this.router.url;
        });
    }

    ngOnInit() { }

}
