import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  selectedOption= '';
  displayTextValue = '';

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.displayText();
    console.log(form);
  }

  displayText() {
    if (this.selectedOption === 'Option1') {
      this.displayTextValue = 'Text 1';
    } else if (this.selectedOption === 'Option2') {
      this.displayTextValue = 'Text 2';
    } else if (this.selectedOption === 'Option3') {
      this.displayTextValue = 'Text 3';
    }
  }
}
