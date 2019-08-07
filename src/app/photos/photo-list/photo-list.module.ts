import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PhotoModule } from '../photo/photo.modules'
import { PhotoListComponent } from './photo-list.component'
import { LoadButtonComponent } from './load-button/load-button.component'
import { PhotoGridComponent } from './photo-grid/photo-grid.component'
import { ImageFilterPipe } from './image-filter.pipe';

@NgModule({
  declarations: [
    PhotoGridComponent,
    LoadButtonComponent,
    PhotoListComponent,
    ImageFilterPipe
  ],
  imports: [
    CommonModule,
    PhotoModule
  ]
})

export class PhotoListModule { }
