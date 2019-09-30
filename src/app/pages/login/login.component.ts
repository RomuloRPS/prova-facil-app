import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userType;

  constructor(private route: Router, private activedRoute: ActivatedRoute) { 
    
  
  }

  ngOnInit() {
    this.activedRoute.paramMap.subscribe( paramMap =>
      this.userType = paramMap.get('usuario')
      );

      console.log(this.userType);
  }

  toType(){
    this.route.navigate(['/'])
  }

}
