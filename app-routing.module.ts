import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserlistComponent } from './userlist/userlist.component';
import { AdduserComponent } from './adduser/adduser.component';
import { EditComponent } from './edit/edit.component';
import { ViewuserComponent } from './view/view.component';

const routes: Routes = [
  {path:'',component:UserlistComponent},
  {path:'users/add', component:AdduserComponent},
  {path:'users/edit/:id',component:EditComponent},
  {path:'users/view/:id', component:ViewuserComponent},
  {path:'*', component:UserlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
