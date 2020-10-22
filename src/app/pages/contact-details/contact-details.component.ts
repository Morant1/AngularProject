import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Contact } from 'src/app/models/contacts.model';

import { ContactService } from 'src/app/services/contacts.service';
import { User } from 'src/app/models/users.model';
import { UserService } from 'src/app/services/users.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
contact:Contact;
currUser: User;

  constructor( private route: ActivatedRoute,
    private contactService: ContactService,private userService: UserService,private location: Location) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const contactId = params.get('_id')
      this.contactService.getContactById(contactId).subscribe(contact => this.contact = contact)
    })

    this.currUser = this.userService.getCurrentUser();

  }


  goBack():void{
    this.location.back();
  }
  get getImg() {
    return `https://robohash.org/${this.contact.name}`;
  }

  onTransferCoins(amount:number) {
    if(amount > this.currUser.coins) return;
    this.currUser.coins = this.currUser.coins - amount;
    this.userService.updateUser(this.currUser)
  }

}
