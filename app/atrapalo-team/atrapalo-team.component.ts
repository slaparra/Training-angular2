import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { USERS } from '../user/users.mock';
import { User } from '../user/user.model';

@Component({
    templateUrl: '/app/atrapalo-team/atrapalo-team.html',
    directives: [ROUTER_DIRECTIVES]
})

export class AtrapaloTeamComponent implements OnInit {

    private users: User[] = [];

    constructor() { }

    ngOnInit() {
        this.users = USERS;
    }
}