import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contacts.model';
import { User } from 'src/app/models/users.model';
import { ContactService } from 'src/app/services/contacts.service';
import { UserService } from 'src/app/services/users.service';
import { BitcoinService } from 'src/app/services/bitcoin.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {
  contacts: Contact[] = []
  user: User = null;
  rate: number = 0;
  private subscriptions = new Subscription()
  constructor(private contactService: ContactService,private userService: UserService,
    private bitcoinService: BitcoinService ) { }

  ngOnInit(): void {
    this.contactService.loadContacts()
    this.subscriptions.add(this.contactService.contacts$.subscribe(contacts => {
      this.contacts = contacts;
    }))
    this.userService.getUser()
    this.subscriptions.add(this.userService.user$.subscribe(user => {
      this.user = user[user.length-1];
    }))

      this.bitcoinService.getRate()
      this.subscriptions.add(this.bitcoinService.rate$.subscribe(rate => {
      this.rate = rate;
    }))
  }


  get userBTC():number  {
    return this.user.coins * this.rate
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }

  onFilterHandler(filterBy) {
    this.contactService.loadContacts(filterBy)
  }
}
