import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-contact',
  templateUrl: './filter-contact.component.html',
  styleUrls: ['./filter-contact.component.scss']
})
export class FilterContactComponent implements OnInit {
  @Output() onFilter = new EventEmitter();
  filterBy = {
    name: '',
    phone: ''
  }
  constructor() { }

  ngOnInit(): void {
  }

}
