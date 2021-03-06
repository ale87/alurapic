import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Photo } from '../shared/interfaces/photo';

const API = 'http://localhost:3000'

@Injectable({ providedIn: 'root' })
export class PhotoService {
    constructor(private http: HttpClient) { }

    listPhotos(name: string) {
        return this.http.get<Photo[]>(API + `/${name}/photos`)
    }    

    listPhotosPaginated(name: string, page: number) {
        const params = new HttpParams().append('page', page.toString())
        return this.http.get<Photo[]>(API + `/${name}/photos`, { params })
    }
}