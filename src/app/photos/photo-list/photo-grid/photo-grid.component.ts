import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core'
import { Photo } from '../../../shared/interfaces/photo'

@Component({
  selector: 'app-photo-grid',
  templateUrl: './photo-grid.component.html',
  styleUrls: ['./photo-grid.component.css']
})
export class PhotoGridComponent implements OnChanges {
  @Output() onHasRows = new EventEmitter<boolean>()
  @Input() photos: Photo[] = []
  filter: string
  rows: any[] = []  

  ngOnChanges(changes: SimpleChanges) {
    changes.photos && this.getRows()     
    this.disableLoadButton()
  }

  getRows(): any {    
    this.rows = []
    this.photos.forEach((valor, index) => 
      index % 3 === 0 && this.rows.push(this.photos.slice(index, index + 3))) 
  }  

  disableLoadButton() {
    this.onHasRows.emit(!this.rows.length ? false: true)
  }
}
