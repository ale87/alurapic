import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-default-message',
  templateUrl: './default-message.component.html',
  styleUrls: ['./default-message.component.css']
})

export class DefaultMessageComponent {
  @Input() message: string = ''
}
