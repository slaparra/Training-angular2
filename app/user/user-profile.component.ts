import { Component, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetUserService } from './get-user.service';
import {User} from "./user.model";
import {Commit} from "../user-activity/commit.model";

@Component({
    templateUrl: '/app/user/user-profile.html',
    providers: [GetUserService]
})
export class UserProfileComponent implements OnInit {

    private user: User = new User('','/assets/image/profile.png');
    private commits: Array<Commit> = [];
    private sub: any;
    private userCreated: EventEmitter<User>;
    private tableHidden: boolean = true;

    constructor(
        private route: ActivatedRoute,
        private getUserService: GetUserService
    ) {
        this.userCreated  = new EventEmitter<User>();

        this.userCreated.subscribe((data) => {
            this.getUserService.getUserEvents(data)
                .then(commits => {
                    this.commits = commits;
                });
        });
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = params['id'];
            this.getUserService.getUser(id)
                .then(user => {
                    this.userCreated.emit(user);
                    this.user = user;
                })
                .catch(error => { console.log('error----:'); console.log(error); });
        });
    }

    public showCommitsTable() {
        this.tableHidden = false;
    }

}