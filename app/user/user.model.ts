export class User {
    private id: string;
    private imageUrl: string;
    private name: string;
    private followers: number;
    private following: number;
    private githubUserUrl: string;
    private publicRepos: number;
    private company: string;
    private eventsUrl: string;

    constructor(id: string, imageUrl: string) {
        this.id = id;
        this.imageUrl = imageUrl;
    }

    public getId() {
        return this.id;
    }

    public getImageUrl() {
        return this.imageUrl;
    }

    public getCompany(): string {
        return this.company;
    }

    public setCompany(company: string) {
        this.company = company;
    }

    public getEventsUrl(): string {
        return this.eventsUrl;
    }

    public setEventsUrl(eventsUrl: string) {
        this.eventsUrl = eventsUrl;
    }

    public getName():string {
        return this.name;
    }

    public setName(name:string) {
        this.name = name;
    }

    public getFollowers():number {
        return this.followers;
    }

    public setFollowers(followers:number) {
        this.followers = followers;
    }

    public getFollowing():number {
        return this.following;
    }

    public setFollowing(following:number) {
        this.following = following;
    }

    public getGithubUserUrl():string {
        return this.githubUserUrl;
    }

    public setGithubUserUrl(githubUserUrl:string) {
        this.githubUserUrl = githubUserUrl;
    }

    public getPublicRepos():number {
        return this.publicRepos;
    }

    public setPublicRepos(publicRepos:number) {
        this.publicRepos = publicRepos;
    }
}
