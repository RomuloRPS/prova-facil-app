import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { UserTypeComponent } from './pages/user-type/user-type.component';

const routes: Routes = [
  {
    path: '',
    component: UserTypeComponent,
  },
  {
    path:'login/:usuario',
    component: LoginComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  

}
