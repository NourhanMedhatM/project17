import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  users!: Users[];
  constructor(private userservice: UserService) {

  }

  ngOnInit(): void {
    this.userservice.getUsers().subscribe(
      (users) => { this.users = users }
    );
  }
  deleteUser(id: number): void {
   
    this.userservice.deleteuser(id);
  
}
}
