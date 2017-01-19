import {Item} from "./item";
import {ConsoleLoggerService} from '../utils/console-logger.service';
import {Injectable} from '@angular/core';
import {StorageService} from '../utils/storage.service';

@Injectable()
export class Todolist {

    private _items : Item[];
    private logger: ConsoleLoggerService;
    private storage: StorageService;

    constructor(consoleLogger: ConsoleLoggerService, storage: StorageService) {
        this._items = storage.fetch('LIST') || [];
        this.logger = consoleLogger;
        this.storage = storage;
        this.logger.log("list start");
    }

    get items(): Item[] {
        return this._items;
    }

    public addItem(title: string) : Item {
        const newItem = new Item(title);
        this._items.push(newItem);
        this.logger.log("Item added: " + title);
        this.sync();
        return newItem;
    }

    public removeItem(item: Item) : void {
        const index = this._items.indexOf(item);
        this._items.splice(index, 1);
        this.logger.log("Item removed: " + item.title);
        this.sync();
    }

    public clearDone() : void {
        this._items = this.remainingTasks()
    }

    private remainingTasks() : Item[] {
        return this._items.filter((item) => (!item.done))
    }

    public numberOfTasksRemaining() : number {
        return this.remainingTasks().length;
    }
    
    public toggleAll() : void {
        this._items.forEach(item => item.done = true);
    }

    private sync() {
        this.storage.save('LIST', this._items);
    }
}