import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Photo } from '../photo/photo'
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})

export class PhotoListComponent implements OnInit {
  photos: Photo[] = []
  filter: string = ''
  user: string = ''
  currentPage: number = 1
  hasMore: boolean = true

  constructor(
    private route: ActivatedRoute,
    private service: PhotoService
  ) { }

  ngOnInit(): void {
    this.user = this.route.snapshot.params.user
    this.photos = this.route.snapshot.data.photos
  }

  load() {
    this.filter = ''
    this.service.listPhotosPaginated(this.user, ++this.currentPage)
      .subscribe(photos => 
        photos.length ? this.photos = this.photos.concat(photos) : this.hasMore = false
      )
  }
}
