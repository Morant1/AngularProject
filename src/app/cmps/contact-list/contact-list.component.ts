import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Contact } from 'src/app/models/contacts.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  @Input() contacts: Contact[]
  constructor() { }

  ngOnInit(): void {
  }

}
