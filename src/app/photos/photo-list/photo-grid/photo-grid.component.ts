import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Photo } from '../../photo/photo';

@Component({
  selector: 'app-photo-grid',
  templateUrl: './photo-grid.component.html',
  styleUrls: ['./photo-grid.component.css']
})
export class PhotoGridComponent implements OnChanges {
  @Input() photos: Photo[] = []
  filter: string
  rows: any[] = []  

  ngOnChanges(changes: SimpleChanges) {
    changes.photos && this.getRows()
  }

  getRows(): any {    
    this.rows = []
    this.photos.forEach((valor, index) => 
      index % 3 === 0 && this.rows.push(this.photos.slice(index, index + 3)))    
  }  
}
