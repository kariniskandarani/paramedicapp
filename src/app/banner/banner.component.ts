import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
   @Input() imgSrc:string='./assets/images/Paramedslide1.jpeg';
  constructor() { }

  ngOnInit(): void {
  }

}
