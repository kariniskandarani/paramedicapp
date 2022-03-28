import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  prodData:prodInfo[]=[];
  constructor(){}
  ngOnInit() {
    fetch('https://webserver-paramedic.herokuapp.com/Products')
  .then(response => response.json())
  .then((json:any):any =>{
    
    json.forEach((x:any) => {
      let p= new prodInfo();
      p.title=x.Title;
      // p.description=x.Description;
      p.image=x.Image;
      p.price=x.Price;
      this.prodData.push(p);


    });
     console.log(json)
     console.log(this.prodData);
    
    })
  }
  
}
class prodInfo{
  title:string='';
  price:string='';
  description:string='';
  image:string='';

}
