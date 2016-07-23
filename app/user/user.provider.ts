import {Injectable} from '@angular/core';
import {GitHubUserService} from "./github-user.service";
import {User} from "./user.model";
import {USERS} from "./users.mock";

@Injectable()
export class UserProvider {
    private gitHubUserService: GitHubUserService;
    private users: Array<User> = [];

    constructor(gitHubUserService: GitHubUserService) {
        this.users = USERS;
        this.gitHubUserService = gitHubUserService;
    }

    public getUser(id:string) {
        return new Promise<User>(resolve => {
            let user = this.users.find(user => user.getId() === id);

            if (!user.isUserUpdated()) {
                let index:number = +this.users.indexOf(user, 0);
                this.gitHubUserService.getUser(user.getId())
                    .then(user => {
                        user.setUserUpdated();
                        this.users[index] = user;
                        resolve(user);
                    });
            } else {
                resolve(user);
            }

        });
    }

    public getAll() {
        return this.users;
    }
}