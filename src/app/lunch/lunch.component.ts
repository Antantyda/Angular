import {Component, OnInit} from '@angular/core';
import {LunchModel} from './lunch.model'
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component.css']
})
export class LunchComponent implements OnInit{
  selectedDate = new FormControl
  ngOnInit() {
  }

  today: number = Date.now();

  showResult = false;
  selectedLunchValue: number = -1;
  selectedLunch: LunchModel | undefined = undefined;

  lunchItems: LunchModel[] = [
    { name: 'Guláš', value: 1 },
    { name: 'Svíčková', value: 2 },
    { name: 'Rajská', value: 3 },
    { name: "vegan", value: 4}
  ];

  submitForm() {
    console.log('selected', this.selectedLunchValue)
    console.log('lunch items', this.lunchItems)
    if (this.selectedLunchValue !== null) {
      this.selectedLunch = this.lunchItems.find((o) => o.value === +this.selectedLunchValue);

      if (this.selectedLunch !== undefined) {
        console.log('Oběd:', this.selectedLunch.name);
        console.log('Value:', this.selectedLunch.value);
        console.log('selected date', this.selectedDate.value)
      } else {
        console.log('obed nenalezen');
      }


    }
  }

}
