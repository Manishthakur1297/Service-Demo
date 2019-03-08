import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  atoz(msg) : void
  {
    console.log(msg);
  }

}
