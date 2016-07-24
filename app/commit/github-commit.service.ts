import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {Commit} from "./commit.model";
import {Repository} from "../repository/repository.model";
import {User} from "../user/user.model";
import 'rxjs/Rx';

@Injectable()
export class GitHubCommitService {

    constructor(private http:Http) { }

    public getUserCommits(user:User) {
        return new Promise<Commit[]>(resolve => {

            this.http.get('https://api.github.com/users/' + user.getId() + '/events')
                .map((response) => {
                    return response.json();
                })
                .map((eventsJson:Array<any>) => {
                    if (eventsJson) {
                        return this.parseCommits(eventsJson);
                    }

                    return [];
                })
                .subscribe(function (commits:Commit[]) {
                    resolve(commits);
                });
        });
    }

    private parseCommits(eventsJson:Array<any>): Array<Commit> {
        let commits: Array<Commit> = [];
        let repositories:Array<Repository> = [];

        eventsJson.forEach((eventJson) => {
            if (eventJson.payload.commits) {
                repositories = this.buildRepository(repositories, eventJson);
                commits = this.buildCommits(eventJson, commits, repositories[eventJson.repo.id]);
            }
        });

        return commits;
    }

    private buildCommits(eventJson, commits:Array<Commit>, repository: Repository): Array<Commit> {
        eventJson.payload.commits.forEach(commit => {
            commits.push(
                this.buildCommit(commit, eventJson, repository)
            );
        });

        return commits;
    }

    private buildCommit(commit, eventJson, repository: Repository): Commit {
        return new Commit(
            commit.sha,
            commit.message,
            new Date(eventJson.created_at),
            repository,
            commit.author.name
        );
    }

    private buildRepository(repositories:Array<Repository>, eventJson): Array<Repository> {
        if (undefined == repositories[eventJson.repo.id]) {
            repositories[eventJson.repo.id] = new Repository(eventJson.repo.id, eventJson.repo.name);
        }

        return repositories;
    }
}
