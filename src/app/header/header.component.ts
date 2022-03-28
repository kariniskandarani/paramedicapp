import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'header1',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() name:string='Paramedic';
  @Input() name1:string='Emergency';
  constructor() { }

  ngOnInit(): void {
  }

}
