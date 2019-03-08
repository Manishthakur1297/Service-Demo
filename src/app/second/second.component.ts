import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor(private ls : LogService) 
  {
    //this.ls = new LogService();
  }

  ngOnInit() {
  }

  abc(msg) : void
  {
    //console.log(msg);
    //let ls = new LogService();
    this.ls.logMessage(msg);
  }

}
