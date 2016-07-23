import {Injectable} from '@angular/core';
import {Commit} from "./commit.model";
import {GitHubCommitService} from "./github-commit.service";
import {User} from "../user/user.model";

@Injectable()
export class CommitProvider {

    private gitHubCommitService: GitHubCommitService;

    constructor(gitHubCommitService: GitHubCommitService) {
        this.gitHubCommitService = gitHubCommitService;
    }

    public getUserCommits(user: User): Promise<Commit[]> {
        return this.gitHubCommitService.getUserCommits(user);
    }
}