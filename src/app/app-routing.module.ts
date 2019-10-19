import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { UserTypeComponent } from './pages/user-type/user-type.component';
import { TestComponent } from './pages/test/test.component';

const routes: Routes = [
  {
    path: '',
    component: UserTypeComponent,
  },
  {
    path:'login/:usuario',
    component: LoginComponent
  },
  {
    path: 'prova',
    component: TestComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  

}
