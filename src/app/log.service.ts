// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class LogService {

  constructor() 
  {
    console.log("Log Constructor invoked !!!");
  }

  logMessage(msg) : void
  {
    console.log("Log Service : "+msg);
  }

}
