import {Component, OnInit} from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ["./examples.component.css"]
})
export class ExamplesComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    const storedOption = localStorage.getItem('selectedOption');
    if (storedOption) {
      this.selectedOption = storedOption;
    }
  }

  selectedOption: string = '';
  selectedSubOptionName: string = "";
  selectedSubOptionName2: string = "";

  onOptionChange() {
    localStorage.setItem("selectedOption", this.selectedOption)
    console.log("Name1:", this.selectedSubOptionName)
    console.log("Name2:", this.selectedSubOptionName2)

  }

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ]


}
