import {Component, OnInit} from '@angular/core';
import {LunchModel} from './lunch.model'
import {FormControl} from "@angular/forms";
import {UserModel} from "./user.model";

@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component.css']
})
export class LunchComponent implements OnInit {

  selectedDate = new FormControl;
  NotesFc = new FormControl();
  ngOnInit() {
  }
  constructor() {
  }

  data: any[] = [];
  selectedUserValue: number = -1;
  selectedLunchValue: number = -1;
  selectedLunch: LunchModel | undefined = undefined;
  selectedUser: UserModel | undefined = undefined;

  usernames: UserModel[] = [
    {username: "Zbyňa", value: 10},
    {username: "Zbyňa1", value: 11},
    {username: "Zbyňa2", value: 12},
    {username: "Zbyňa3", value: 13}
  ]

  lunchItems: LunchModel[] = [
    {name: 'Guláš', value: 1},
    {name: 'Svíčková', value: 2},
    {name: 'Rajská', value: 3},
    {name: "vegan", value: 4}
  ];

  submitForm() {
    console.log('selected', this.selectedLunchValue)
    console.log('lunch items', this.lunchItems)
    if (this.selectedLunchValue !== null && this.selectedUserValue !== null) {
      this.selectedLunch = this.lunchItems.find((o) => o.value === +this.selectedLunchValue);
      this.selectedUser = this.usernames.find((o) => o.value === +this.selectedUserValue);

      if (this.selectedLunch !== undefined && this.selectedUser !== undefined) {
        const selectedDateFormatted = new Date(this.selectedDate.value).toLocaleDateString('en-GB');
        const entry = {
          user: this.selectedUser.username,
          lunch: this.selectedLunch.name,
          date: selectedDateFormatted,
          notes: this.NotesFc.value,
        }
        this.data.push(entry)
        console.log('Oběd:', this.selectedLunch.name);
        console.log('Value:', this.selectedLunch.value);
        console.log('Jméno uživatele:', this.selectedUser.username);
        console.log('Value uživatele:', this.selectedUser.value);
        console.log('selected date', selectedDateFormatted)
        console.log('Poznamky',this.NotesFc.value)
      } else {
        console.log('obed nenalezen');
      }

    }
  }

  onDelete(index: number){
    this.data.splice(index, 1)
  }

  clearTable() {
    this.data = [];
  }

}
