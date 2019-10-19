import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(public route: Router) { }

  ngOnInit() {
    
  }

  async finish(){
    await Swal.fire({
      type: 'success',
      title: 'Muito bem!',
      text: 'Você concluiu a prova!',
     
    })

    this.route.navigate(['/']);
  }

}
