export class User {
    private id: string;
    private imageUrl: string;
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
}
