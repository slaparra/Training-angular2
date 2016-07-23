import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { User } from '../user/user.model';
import {UserProvider} from "../user/user.provider";

@Component({
    templateUrl: '/app/atrapalo-team/atrapalo-team.html',
    directives: [ROUTER_DIRECTIVES]
})

export class AtrapaloTeamComponent {

    private users: User[];

    constructor(userProvider: UserProvider) {
        this.users = userProvider.getAll();
    }
}