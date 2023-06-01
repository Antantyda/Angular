import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SummaryModel} from "../../models/summary.model";

@Component({
  selector: 'datera-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  selectedRowIndex: number | undefined = undefined;
  @Input()
  data: SummaryModel[] | null = [];

  @Output()
  deleteItem: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  editItem: EventEmitter<number> = new EventEmitter<number>();


  onDelete(id: number) {
    this.deleteItem.emit(id);
  }

  onEdit(id: number) {
    this.editItem.emit(id);
  }
}
