import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  users = [
    {
      name : "arjun",
      password : "123"
    },
    {
      name : "atul",
      password : "321"
    },
    {
      name: "",
      password: ""
    }
  ]

  constructor() { }

  verifyCredentials(user){
    for(var i = 0; i< this.users.length; i++){
      if(user.name ==  this.users[i].name && user.password == this.users[i].password){
        return true;
      }
    }
    return false;
  }

  getData(){
    console.log("Hello from Data Service");
  }
}
