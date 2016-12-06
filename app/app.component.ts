import { Component } from '@angular/core';

@Component({
    templateUrl: 'app/app.component.html',
    selector: 'my-app'
})
export class AppComponent {

    display: boolean = true;

    ngOnInit() {
        this.hideDialog(8000);
    }

    hideDialog(time: number) {
        setTimeout(() => {
            this.display = false;
        }, time);
    }

}
