import { Component, OnInit, EventEmitter, Output,Input  } from '@angular/core';
import { Contact } from 'src/app/models/contacts.model';
import { User } from 'src/app/models/users.model';

@Component({
  selector: 'app-transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss']
})
export class TransferFundComponent implements OnInit {
  @Output() transfer = new EventEmitter();
  @Input() contact: Contact;
  @Input() maxCoins: number; 
  @Input() currUser: User; 
  amount:number = 0;
  constructor() { }

  

  ngOnInit(): void {
  }

}
