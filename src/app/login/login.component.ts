import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [DataService]
})
export class LoginComponent implements OnInit {

  constructor(private data : DataService) { 
    data.getData();    
  }

  ngOnInit() {
    console.log();
  }

}
