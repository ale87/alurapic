import { NgModule } from '@angular/core'
import { PhotoModule } from './photo/photo.modules'
import { PhotoFormModule } from './photo-form/photo-form.module'
import { PhotoListModule } from './photo-list/photo-list.module'

@NgModule({
    imports: [        
        PhotoModule,
        PhotoListModule,
        PhotoFormModule
    ] 
})

export class PhotosModule { }