import { Injectable } from '@angular/core';
import { Users } from './users';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: Users[] = [
    { id: 1, firstname: 'Nourhan',lastname: ' Meddhat', email: 'nouhan@example.com', age:25 },
    { id: 2, firstname: 'Toka',lastname: ' Mehdhat', email: 'toqa@example.com' , age:22 },
 
  ];


  constructor() { }



  getUsers(): Observable<Users[]> {
    return of(this.user);
  }

  getUserById(id: number): Observable<Users | undefined> {
    return of(this.user.find(user => user.id === id));
  }

  addUser(user: Users): void {
    user.id = Math.max(...this.user.map(u => u.id)  ) + 1;
    this.user.push(user);
  }
  updateuser(userid: number, updateduser: Users) {

    const index = this.user.findIndex(user => user.id === userid);

    this.user[index] = { ...updateduser, id: userid }


  }
  deleteuser (id: number): void {
    this.user = this.user.filter(user => user.id !== id);
  }

}
