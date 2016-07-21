import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { UserProfileComponent } from './user/user-profile.component';
import { AtrapaloTeamComponent } from './atrapalo-team/atrapalo-team.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/shared/layout.html',
    styleUrls: ['assets/css/styles.css'],
    directives: [ ROUTER_DIRECTIVES ],
    precompile: [ AtrapaloTeamComponent, UserProfileComponent]
})

export class AppComponent { }
