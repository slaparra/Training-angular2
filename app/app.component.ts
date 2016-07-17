import { Component } from '@angular/core';
import { NavComponent } from './component/nav.component';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MemberProfileComponent } from './component/member-profile.component';
import { AtrapaloTeamComponent } from './component/atrapalo-team.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/view/layout.html',
    styleUrls: ['assets/css/styles.css'],
    directives: [ NavComponent, ROUTER_DIRECTIVES ],
    precompile: [ AtrapaloTeamComponent, MemberProfileComponent]
})

export class AppComponent { }
