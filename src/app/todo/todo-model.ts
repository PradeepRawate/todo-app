export class ToDo {
    title: string;
    description: string;
    timestamp: string;

    constructor(title: string, description: string) {
        this.title = title;
        this.description = description;
        this.timestamp = new Date().toString();
    }
}
