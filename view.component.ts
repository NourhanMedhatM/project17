import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { Users } from '../users';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewuserComponent implements OnInit {
  id!:number
  user!: Users |undefined;


constructor(  private route: ActivatedRoute, private userService: UserService){

}

ngOnInit(): void {
  this.id =Number(this.route.snapshot.params['id']);

}

}
