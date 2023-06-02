import {Component, OnInit} from '@angular/core';
import {LunchModel} from '../models/lunch.model'
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserModel} from "../models/user.model";
import {SummaryModel} from "../models/summary.model";
import {LunchService} from "../services/lunch.service";
import {UserService} from "../services/user.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component.css']
})
export class LunchComponent implements OnInit {
  data$: Observable<SummaryModel[]> = this.lunchService.data$;
  updateLunch: SummaryModel | undefined = undefined;
  lunchItems: LunchModel[] = [];
  usernames: UserModel[] = [];
  form: FormGroup = new FormGroup<any>({});
  selectedRowId: number | null = null;
  constructor(
    private lunchService: LunchService,
    private userService: UserService,
    private fb: FormBuilder,
  ){
  }

  ngOnInit(): void {
    this.lunchItems = this.lunchService.getLaunchOptions();
    this.usernames = this.userService.getUsers();
    this.lunchService.loadAllLunches();
    this.form = this.fb.group({
      date: ['', Validators.required],
      user: ['', Validators.required],
      lunch: ['', Validators.required],
      note: [''],
    })
  }
  submitForm() {
    const userName = this.usernames.find((item) => item.value === +this.form.value.user)?.username as string;
    const lunchName = this.lunchItems.find((item) => item.value === +this.form.value.lunch)?.name as string;
    const summeryItem: SummaryModel = {
      id: this.updateLunch !== undefined ? this.updateLunch.id : 0,
      date: this.form.value.date,
      user: this.form.value.user,
      lunch: this.form.value.lunch,
      note: this.form.value.note,
      userName,
      lunchName
    }
    if (this.updateLunch !== undefined) {
      this.lunchService.updateLunch(this.updateLunch.id, summeryItem);
      this.updateLunch = undefined;
      this.form.reset();
      return;
    }
    this.lunchService.addLunch(summeryItem);
    this.form.reset();
  }

  editRow(id: number) {
    this.selectedRowId = id;
    this.updateLunch = this.lunchService.getLunch(id);
    this.form.setValue({
      date: this.updateLunch.date,
      user: this.updateLunch.user,
      lunch: this.updateLunch.lunch,
      note: this.updateLunch.note,
    });
  }

  onDelete(id: number) {
    this.lunchService.deleteLunch(id);
  }

  isFormValid() {
    return this.form.valid;
  }

  clearTable() {
    this.lunchService.deleteAllLunches();
  }

  cancelUpdate() {
    this.updateLunch = undefined;
    this.form.reset();
  }

}
