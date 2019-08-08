import { Component, OnInit, OnDestroy, Output, EventEmitter, Input } from '@angular/core'
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit, OnDestroy {
  @Output() onFiltering = new EventEmitter<string>()
  @Input() filter = ''
  debounce: Subject<string> = new Subject<string>()

  ngOnInit(): void {    
    this.debounce.pipe(debounceTime(500)).subscribe(filter => this.onFiltering.emit(filter))
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe()    
  }
}
