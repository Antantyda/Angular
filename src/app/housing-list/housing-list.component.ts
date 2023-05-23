import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {HousingLocation} from "../housing-location";

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css']
})
export class HousingListComponent implements OnInit {

  @Input() locationList: HousingLocation[] = [];
  result:HousingLocation[]=[];
  @Output()selectedLocationEvent = new EventEmitter<HousingLocation>();
  constructor() {
  }

  ngOnInit() {

  }

  SearchHousingLocations(searchText: string) {
    if (!searchText)return;
    this.result = this.locationList
      .filter(
        location => location.city.toLowerCase().includes(searchText.toLowerCase())
      )
  }

  selectHousingLocation(location: HousingLocation) {
    this.selectedLocationEvent.emit(location);
  }
}
