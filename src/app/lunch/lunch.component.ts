import {Component} from '@angular/core';

@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component.css']
})
export class LunchComponent {

  selectedLunch: any;
  lunchItems: any[] = [
    { name: 'Guláš', value: 1 },
    { name: 'Svíčková', value: 2 },
    { name: 'Rajská', value: 3 }
  ];

  submitForm() {
    if (this.selectedLunch) {
      const selected = this.selectedLunch - 1;
      console.log('Oběd:', this.lunchItems[selected].name);
      console.log('Value:', this.lunchItems[selected].value);

    }
  }
}

