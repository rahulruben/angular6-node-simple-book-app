export class BookModel {
    public author: string;
    public description: string;
    public isbn: string;
    public pages: number;
    public published: string;
    public publisher: string;
    public subtitle: string;
    public title: string;
    public website: string;

    constructor(data?: any) {
        this.initProperties(data);
    }

    protected initProperties(data: any) {
        if (data) {
            for (let prop in data) {
                if (data.hasOwnProperty(prop)) {
                    this.setProperty(prop, data[prop]);
                }
            }
        }
    }

    public setProperty(prop: string, value: any) {
        (this)[prop] = value;
    }
}