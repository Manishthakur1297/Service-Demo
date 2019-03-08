import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  constructor(private ls : LogService) 
  {
    //this.ls = new LogService();
  }

  ngOnInit() {
  }

  atoz(msg) : void
  {
    //console.log(msg);
    //let ls = new LogService();
    this.ls.logMessage(msg);
  }

}
