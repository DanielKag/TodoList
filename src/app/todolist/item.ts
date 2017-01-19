export class Item {

    public title   : string;
    public done    : boolean;
    public created : Date;


    constructor(title: string) {
        this.title   = title;
        this.done    = false;
        this.created = new Date();
    }
}