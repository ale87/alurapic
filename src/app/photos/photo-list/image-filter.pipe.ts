import { Pipe, PipeTransform } from '@angular/core'
import { Photo } from './../photo/photo'

@Pipe({ name: 'imageFilter' })
export class ImageFilterPipe implements PipeTransform {
    transform(photos: Photo[], query: string) {
        query = query.trim().toLowerCase()
        return !query ? photos :
            photos.filter(photo => photo.description.toLowerCase().includes(query))
    }    
}