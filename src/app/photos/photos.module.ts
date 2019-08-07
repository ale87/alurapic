import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PhotoComponent } from './photo/photo.component'
import { PhotoListComponent } from './photo-list/photo-list.component'
import { PhotoFormComponent } from './photo-form/photo-form.component'
import { PhotoGridComponent } from './photo-list/photo-grid/photo-grid.component'
import { ImageFilterPipe } from './photo-list/image-filter.pipe'

@NgModule({
    declarations: [ 
        PhotoComponent, 
        PhotoListComponent, 
        PhotoFormComponent,
        PhotoGridComponent,
        ImageFilterPipe
    ],
    imports: [ HttpClientModule, CommonModule ] 
})

export class PhotosModule { }