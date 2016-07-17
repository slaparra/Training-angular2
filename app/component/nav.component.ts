import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'ang-training-nav',
    templateUrl: '/app/view/nav.html',
    directives: [ ROUTER_DIRECTIVES ]
})

export class NavComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}