import { Component, Input, OnInit } from '@angular/core';
import { Photo } from '../../photo/photo';

@Component({
  selector: 'app-photo-grid',
  templateUrl: './photo-grid.component.html',
  styleUrls: ['./photo-grid.component.css']
})
export class PhotoGridComponent implements OnInit {
  @Input() photos: Photo[] = []
  rows: any[] = []  

  ngOnInit() {
    this.rows = this.getRows(this.photos)
  }

  getRows(photos: Photo[]): any {    
    photos.forEach((valor, index) =>
      index % 3 === 0 && this.rows.push(photos.slice(index, index + 3)))    
  }  
}
