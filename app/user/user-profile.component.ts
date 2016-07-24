import { Component, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GitHubUserService } from './github-user.service';
import {User} from "./user.model";
import {UserProvider} from "./user.provider";
import {CommitProvider} from "../commit/commit.provider";

@Component({
    templateUrl: '/app/user/user-profile.html',
    providers: [GitHubUserService]
})
export class UserProfileComponent implements OnInit {

    private user: User = new User('','/assets/image/profile.png');
    private sub: any;
    private userCreated: EventEmitter<User>;
    private githubHidden: boolean = true;

    constructor(
        private route: ActivatedRoute,
        private userProvider: UserProvider,
        private commitProvider: CommitProvider
    ) {
        this.userCreated  = new EventEmitter<User>();
        this.userCreated.subscribe((user) => {
            // console.log('user created: ', user);
        });
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.githubHidden = true;
            let id = params['id'];
            this.userProvider.getUser(id)
                .then(user => {
                    this.userCreated.emit(user);
                    this.user = user;
                })
                .catch(error => console.log('error----:', error));
        });
    }

    public showCommits(e) {
        e.preventDefault();
        this.commitProvider.getUserCommits(this.user)
            .then(commits => {
                this.user.setCommits(commits);
                this.githubHidden = false;
            });
    }
}