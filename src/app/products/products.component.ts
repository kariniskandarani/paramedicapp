import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() title:string='';
  // @Input() description:string='';
  @Input() price:string='';
  @Input() image:string='';

   
  constructor() { }

  ngOnInit(): void {
    
  }

}
