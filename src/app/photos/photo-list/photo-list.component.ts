import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Photo } from '../photo/photo'
import { PhotoService } from '../photo/photo.service'

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
  photos: Photo[] = []

  constructor(
    private service: PhotoService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const { user } = this.route.snapshot.params
    this.service.listPhotos(user)
      .subscribe(photos => this.photos = photos)
  }
}
