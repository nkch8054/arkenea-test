import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser(): Observable<User[]> {
    return this.http.get<User[]>('assets/user-list.json').pipe(
      map(res => {
        return res.map(user => new User(
          user.name, user.email, user.gender,
          user.address, user.dateOfBirth
        ))
      })
    )
  }
}
