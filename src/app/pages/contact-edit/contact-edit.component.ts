import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Contact } from 'src/app/models/contacts.model';
import { ContactService } from 'src/app/services/contacts.service';


@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {
  contact: Contact;

  constructor(private route: ActivatedRoute,
    private contactService: ContactService, private router: Router) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      const contactId = params.get('_id')
      if (!contactId) this.contact = this.contactService.getEmptyContact()
      else this.contactService.getContactById(contactId).subscribe(contact => {
        this.contact = contact})
    })

  }

  onSaveContact() {
    this.contact.name = this.contact.name.charAt(0).toUpperCase() + this.contact.name.slice(1);
    this.contactService.save(this.contact)
    this.goBack()
  }

  goBack(){
    this.router.navigateByUrl('/contact');
  }

  onRemove(){
    this.contactService.removeContact(this.contact._id)
    this.goBack()
  }
}


