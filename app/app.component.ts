import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'app/app.component.html',
    selector: 'my-app'
})
export class AppComponent {

    constructor(
        private router: Router) {
    }

    handleChange(e) {
        let index = e.index;
        let link;
        switch (index) {
            case 0:
                link = ['/home'];
                break;
            case 1:
                link = ['/hierarquia'];
                break;
            case 2:
                link = ['/config'];
                break;
            case 3:
                link = ['/car'];
                break;
            case 4:
                link = ['/validation'];
        }
        this.router.navigate(link);
    }

}
