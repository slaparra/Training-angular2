import {Repository} from "../repository/repository.model";

export class Commit {
    private sha: string;
    private message: string;
    private createDate: Date;
    private repository: Repository;

    constructor(
        id: string,
        message: string,
        createDate: Date,
        repository: Repository
    ) {
        this.sha = id;
        this.message = message;
        this.createDate = createDate;
        this.repository = repository;
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
}