import {Component, OnInit} from '@angular/core';
import {LunchModel} from './lunch.model'
import {FormControl} from "@angular/forms";
import {UserModel} from "./user.model";
import {SummaryModel} from "./summary.model";

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

  data: SummaryModel[] = [];
  selectedUserValue: number = -1;
  selectedLunchValue: number = -1;
  selectedLunch: LunchModel | undefined = undefined;
  selectedUser: UserModel | undefined = undefined;
  selectedRowIndex: number | undefined = undefined;

  usernames: UserModel[] = [
    {username: "Zbyňa", value: 10},
    {username: "Zbyňa1", value: 11},
    {username: "Zbyňa2", value: 12},
    {username: "Zbyňa3", value: 13},
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
        if (this.selectedRowIndex !== undefined) {
          this.data[this.selectedRowIndex] = entry;
          this.selectedRowIndex = undefined;
        } else {
          this.data.push(entry)
        }


        console.log('Oběd:', this.selectedLunch.name);
        console.log('Value:', this.selectedLunch.value);
        console.log('Jméno uživatele:', this.selectedUser.username);
        console.log('Value uživatele:', this.selectedUser.value);
        console.log('selected date', selectedDateFormatted)
        console.log('Poznamky', this.NotesFc.value)

        this.selectedUserValue = -1;
        this.selectedLunchValue = -1;
        this.selectedLunch = undefined;
        this.selectedUser = undefined;
        this.NotesFc.reset();

      } else {
        console.log('obed nebo user nenalezen');
      }

    }
  }
  editRow(index: number) {
    const selectedEntry = this.data[index];
    const selectedDateFormatted = new Date(this.selectedDate.value).toLocaleDateString('en-GB');
    this.selectedUserValue = this.usernames.find((u) => u.username === selectedEntry.user)?.value || -1;
    this.selectedLunchValue = this.lunchItems.find((l) => l.name === selectedEntry.lunch)?.value || -1;
    this.selectedLunch = this.lunchItems.find((l) => l.value === +this.selectedLunchValue);
    this.selectedUser = this.usernames.find((u) => u.value === +this.selectedUserValue);
    this.NotesFc.setValue(selectedEntry.notes);
    this.selectedRowIndex = index;

    console.log("Upravit Oběd", this.selectedLunch?.name);
    console.log("Upravit jméno", this.selectedUser?.username);
    console.log("Upravit notes:", this.NotesFc.value);
    console.log(this.selectedDate);



  }


  onDelete(index: number) {
    this.data.splice(index, 1)
  }

  clearTable() {
    this.data = [];
  }


}
