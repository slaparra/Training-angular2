import {Repository} from "../repository/repository.model";

export class Commit {
    private sha: string;
    private message: string;
    private createDate: Date;
    private repository: Repository;
    private authorName: string;

    constructor(
        id: string,
        message: string,
        createDate: Date,
        repository: Repository,
        authorName: string
    ) {
        this.sha = id;
        this.message = message;
        this.createDate = createDate;
        this.repository = repository;
        this.authorName = authorName;
    }

    public getSha(): string {
        return this.sha;
    }

    public getMessage(): string {
        return this.message;
    }

    public getCreateDate(): Date {
        return this.createDate;
    }

    public getRepository(): Repository {
        return this.repository;
    }

    public getAuthorName(): string {
        return this.authorName;
    }
}