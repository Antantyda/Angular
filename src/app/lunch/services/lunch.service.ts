import {Injectable} from "@angular/core";
import {LunchModel} from "../models/lunch.model";
import {SummaryModel} from "../models/summary.model";
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LunchService {

  private _data: BehaviorSubject<SummaryModel[]> = new BehaviorSubject<SummaryModel[]>([]);
  readonly data$ = this._data.asObservable();

  private data: SummaryModel[] = [];
  private nextId: number = 0;
  getLaunchOptions = (): LunchModel[] => {
    return [
      {name: 'Guláš', value: 1},
      {name: 'Svíčková', value: 2},
      {name: 'Rajská', value: 3},
      {name: "vegan", value: 4}
    ];
  }

  loadAllLunches = (): void => {
    this.data = [];
    this._data.next(this.data);

  }

  addLunch = (lunch: SummaryModel) => {
    console.log(lunch);
    lunch.id = ++this.nextId;
    this.data.push(lunch);
    this._data.next(Object.assign([], this.data));
  }

  deleteLunch = (id: number) => {
    const index = this.data.findIndex((item) => item.id === id);
    if (index === -1) {
      return;
    }
    this.data.splice(index, 1);
    this._data.next(Object.assign([], this.data));
  }

  updateLunch = (id: number, lunch: SummaryModel) => {
    const oldLunch = this.data.find((item) => item.id === id) as SummaryModel;
    if (oldLunch === undefined) {
      return;
    }
    oldLunch.date = lunch.date;
    oldLunch.user = lunch.user;
    oldLunch.lunch = lunch.lunch;
    oldLunch.note = lunch.note;
    oldLunch.userName = lunch.userName;
    oldLunch.lunchName = lunch.lunchName;

    this._data.next(Object.assign([], this.data));
  }

  getLunch = (id: number): SummaryModel => {
    return this.data.find((item) => item.id === id) as SummaryModel;
  }

  deleteAllLunches = () => {
    this.data = [];
    this._data.next(Object.assign([], this.data));
  }
}
