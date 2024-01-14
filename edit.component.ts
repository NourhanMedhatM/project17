import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { Users } from '../users';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  updateuserform! : FormGroup;
  userid!:number;
  


constructor( private formbuilder:FormBuilder ,private userservice:UserService ,private route:ActivatedRoute  ){

  this.updateuserform =  this.formbuilder.group({
    name:['' ],
    age :[''],
    email:[''],
    add:[''],
    password:[''],
    city: [''],
    useername: ['']
  })


}


ngOnInit() {
  this.route.params.subscribe(params => {
    this.userid = +params['id'];
    this.loaduserDetails();
  });
}

loaduserDetails() {
  const useeee = this.userservice.getUserById(this.userid);

  if (useeee) {
    this.updateuserform.patchValue(useeee);
  } else {
  
  }
}

updateUser() {
  if (this.updateuserform.valid) {
    const updateUser: Users = {
      id: this.userid,
      ...this.updateuserform.value
    };

    this.userservice.updateuser(this.userid, updateUser);
  
  }
}



}


