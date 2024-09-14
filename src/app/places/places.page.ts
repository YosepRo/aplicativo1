import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {

 public  places = [

  {
   id : 1,
   Title: 'Eifel',
   imageUrl:'https://images.squarespace-cdn.com/content/v1/5efce1f1f1c14550f51a35e4/1641583875048-TUZBF5Y4LWSFQH4CZ9I4/Alma+de+Viaje+-+Francia+-+Paris-418.jpg',
   Comments: ['Lugar asombroso','Paris'],

  },

  {
    id : 2,
    Title: 'Tatoo',
    imageUrl:'https://i.pinimg.com/474x/50/f5/00/50f50069764651fa763325d7d1165756.jpg',
    Comments: ['Tatuaje','Scoot'],
 
   }



 ]




  constructor() { }

  ngOnInit() {
  }

}
