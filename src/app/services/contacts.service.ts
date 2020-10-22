import { Injectable } from '@angular/core';
import { Contact } from '../models/contacts.model';
import { BehaviorSubject, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { retry, catchError, map } from 'rxjs/operators';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private http: HttpClient,private utilsService: UtilsService) { }

  private BASE_URL = 'http://localhost:3000/contacts'

  private _contacts$ = new BehaviorSubject<Contact[]>([]);
  public contacts$ = this._contacts$.asObservable()

  public loadContacts(filterBy = { name: '',phone:'' }) {
    this.http.get<Contact[]>(this.BASE_URL)
      .pipe(
        map(contacts => {
          return contacts.filter(({ name,phone }) => {
            return name.toLowerCase().includes(filterBy.name.toLowerCase()) && phone.includes(filterBy.phone);
          })
        })
      
      ).subscribe(contacts => {
        this._contacts$.next(contacts);
      })
  }
  


  public removeContact(contactId:string) {
    return this.http.delete(this.BASE_URL + `/${contactId}`).subscribe(data => {
      console.log(data);

      this.loadContacts()

    })
  }
  public getContactById(id:string) {
    return this.http.get<Contact>(this.BASE_URL + `/${id}`)
      .pipe(
        retry(1),
        catchError(() => throwError('no contact found!'))
      )
  }

  public getEmptyContact(){
    return {
      name: "",
      email: "",
      phone: ""
    }
  }
public save(contact){
  if (contact._id) return this.http.put<any>(this.BASE_URL + `/${contact._id}`, contact).subscribe(contact=>this.loadContacts());
  else {
    contact._id = this.utilsService.getRandomId();
    return this.http.post<any>(this.BASE_URL, contact).subscribe(contact=>this.loadContacts());
  }
}

// UTILS
// private _getRandomId() {
//     var pt1 = Date.now().toString(16);
//     var pt2 = this._getRandomInt(1000, 9999).toString(16);
//     var pt3 = this._getRandomInt(1000, 9999).toString(16);
//     return `${pt3}-${pt1}-${pt2}`.toUpperCase();
// }

// private _getRandomInt(num1, num2) {
//     var max = (num1 >= num2)? num1+1 : num2+1;
//     var min = (num1 <= num2)? num1 : num2;
//     return (Math.floor(Math.random()*(max - min)) + min);
// }
  

}
