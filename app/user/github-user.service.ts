import {Http} from '@angular/http';
import { Injectable } from '@angular/core';
import { User } from "./user.model";
import 'rxjs/Rx';

export interface GitHubUser {
    login: string,
    avatar_url: string,
    company: string,
    events_url: string,
    name: string,
    followers: number,
    following: number,
    public_repos: number,
    html_url: string
}

@Injectable()
export class GitHubUserService {

    constructor(private http: Http) {
    }

    public getUser(id: string) {
        return new Promise<User>(resolve => {
            this.http.get('https://api.github.com/users/' + id)
                .map( (responseData) => {
                    return responseData.json();
                })
                .map((gitHubUser: GitHubUser) => {
                    let user = new User(gitHubUser.login, gitHubUser.avatar_url);
                    user.setCompany(gitHubUser.company);
                    user.setEventsUrl(gitHubUser.events_url);
                    user.setName(gitHubUser.name);
                    user.setFollowers(gitHubUser.followers);
                    user.setFollowing(gitHubUser.following);
                    user.setPublicRepos(gitHubUser.public_repos);
                    user.setGithubUserUrl(gitHubUser.html_url);

                    return user;
                })
                .subscribe(function (user: User) {
                    resolve(user);
                });
            }
        );
    }

}
