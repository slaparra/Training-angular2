import { Component } from '@angular/core';
import { NavComponent } from './component/nav.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/view/layout.html',
    styleUrls: ['assets/css/styles.css'],
    directives: [ NavComponent ]
})

export class AppComponent { }
