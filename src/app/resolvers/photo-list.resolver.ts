import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Photo } from '../shared/interfaces/photo';
import { PhotoService } from 'src/app/services/photo.service';

@Injectable({ providedIn: 'root' })
export class PhotoListResolver implements Resolve<Observable<Photo[]>>{
    constructor(private service: PhotoService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Photo[]> {
        const { user } = route.params
        return this.service.listPhotosPaginated(user, 1)
    }
}