import {Http} from '@angular/http';
import { Injectable } from '@angular/core';
import { User } from "./user.model";
import {Commit} from "../user-activity/commit.model";
import {Repository} from "../repository/repository.model";
import 'rxjs/Rx';

export interface GitHubUser {
    login: string,
    avatar_url: string,
    company: string,
    events_url: string
}

@Injectable()
export class GetUserService {

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

                    return user;
                })
                .subscribe(function (user: User) {
                    resolve(user);
                });
            }
        );
    }

    public getUserEvents(user: User) {
        return new Promise<Commit[]>(resolve => {

            this.http.get('https://api.github.com/users/'+user.getId()+'/events')
                .map((response) => {
                    return response.json();
                })
                .map((eventsJson: Array<any>) => {
                    let commits = [];
                    if (eventsJson) {
                        let repositories:Array<Repository> = [];
                        eventsJson.forEach(function(eventJson) {
                            if (eventJson.payload.commits) {
                                if (undefined == repositories[eventJson.repo.id]) {
                                    repositories[eventJson.repo.id] = new Repository(eventJson.repo.id, eventJson.repo.name);
                                }
                                eventJson.payload.commits.forEach( function(commit) {
                                    commits.push(
                                        new Commit(
                                            commit.sha,
                                            commit.message,
                                            new Date(eventJson.created_at),
                                            repositories[eventJson.repo.id]
                                        )
                                    );
                                });
                            }
                        });
                    }

                    return commits;
                })
                .subscribe(function (commits: Commit[]) {
                    resolve(commits);
                });
        });
    }
}
