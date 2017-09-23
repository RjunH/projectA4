import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})

export class AppComponent {
  title = 'app';
  private name: String = "Alien";
  private isValid: Boolean = false;
  private user: any = {};

  cancel() {
  	console.log("asda");
    this.user = {};
    this.isValid = false;
  }

  constructor(private data : DataService) { 
      
  }

  submit() { 
    this.user.loginSuccess = true;
    console.log("submit success " + this.user.name);
    this.isValid = this.data.verifyCredentials(this.user); 
  }

}


export class ButtonTypesExample {}


export class PizzaPartyAppModule { 

}
