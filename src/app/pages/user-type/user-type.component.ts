import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-user-type',
  templateUrl: './user-type.component.html',
  styleUrls: ['./user-type.component.css']
})
export class UserTypeComponent implements OnInit {

  constructor(private router: Router) { 

  }

  toTeacher(){
    this.router.navigate(['login/professor'])
  }

  toStudent(){
    this.router.navigate(['login/aluno'])
  }

  ngOnInit() {
  }

}
