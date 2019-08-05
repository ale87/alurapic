import { Component } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})

export class PhotoComponent {
  title: String = 'Sakura'
  image: String = 'https://catracalivre.com.br/wp-content/uploads/2019/05/festival-de-sakura.jpg'
  
  constructor() { }
}
