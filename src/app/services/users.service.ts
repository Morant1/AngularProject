import { Injectable } from '@angular/core';
import { User } from '../models/users.model';
import { BehaviorSubject, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { retry, catchError, map } from 'rxjs/operators';
import { UtilsService } from './utils.service';

const key = "USER";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient,private utilsService: UtilsService) { }
  private BASE_URL = 'http://localhost:3000/users'

  private _user$ = new BehaviorSubject<User[]>([]);
  public user$ = this._user$.asObservable()

  public getUser() {
    this.http.get<User[]>(this.BASE_URL)
      .pipe(
        map(user => user)
      ).subscribe(user => {
        this.utilsService.saveToStorage(key,user[user.length-1])
        this._user$.next(user);
      })
    }

  public signup(name:string){
    const userName = name.charAt(0).toUpperCase() + name.slice(1);
    const user = {
      _id:this.utilsService.getRandomId(),
      name: userName,
      coins: 100,
      moves: []
    }
    return this.http.post<any>(this.BASE_URL, user).subscribe(user=>this.getUser());
  }

  public getCurrentUser() {
    const user = this.utilsService.loadFromStorage(key);
    return user;
  }

  public updateUser(currUser:User) {
    return this.http.put<any>(this.BASE_URL+ `/${currUser._id}`, currUser).subscribe(currUser=>this.getUser());
  }

  // UTILS
// private _getRandomId() {
//   var pt1 = Date.now().toString(16);
//   var pt2 = this._getRandomInt(1000, 9999).toString(16);
//   var pt3 = this._getRandomInt(1000, 9999).toString(16);
//   return `${pt3}-${pt1}-${pt2}`.toUpperCase();
// }

// private _getRandomInt(num1, num2) {
//   var max = (num1 >= num2)? num1+1 : num2+1;
//   var min = (num1 <= num2)? num1 : num2;
//   return (Math.floor(Math.random()*(max - min)) + min);
// }


}


