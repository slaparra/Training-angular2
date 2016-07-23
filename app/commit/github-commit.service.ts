import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {Commit} from "./commit.model";
import {Repository} from "../repository/repository.model";
import {User} from "../user/user.model";
import 'rxjs/Rx';

@Injectable()
export class GitHubCommitService {

    constructor(private http:Http) {
    }

    public getUserCommits(user:User) {
        return new Promise<Commit[]>(resolve => {

            this.http.get('https://api.github.com/users/' + user.getId() + '/events')
                .map((response) => {
                    return response.json();
                })
                .map((eventsJson:Array<any>) => {
                    let commits = [];
                    if (eventsJson) {
                        let repositories:Array<Repository> = [];
                        eventsJson.forEach(function (eventJson) {
                            if (eventJson.payload.commits) {
                                if (undefined == repositories[eventJson.repo.id]) {
                                    repositories[eventJson.repo.id] = new Repository(eventJson.repo.id, eventJson.repo.name);
                                }
                                eventJson.payload.commits.forEach(function (commit) {
                                    commits.push(
                                        new Commit(
                                            commit.sha,
                                            commit.message,
                                            new Date(eventJson.created_at),
                                            repositories[eventJson.repo.id],
                                            commit.author.name
                                        )
                                    );
                                });
                            }
                        });
                    }

                    return commits;
                })
                .subscribe(function (commits:Commit[]) {
                    resolve(commits);
                });
        });
    }
}
