import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MessagesComponent } from './messages.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { SuccessMessageComponent } from './success-message/success-message.component';
import { WarningMessageComponent } from './warning-message/warning-message.component';
import { DefaultMessageComponent } from './default-message/default-message.component';

@NgModule({
  declarations: [
    ErrorMessageComponent,
    SuccessMessageComponent,
    WarningMessageComponent,
    DefaultMessageComponent,
    MessagesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MessagesComponent
  ]
})

export class MessagesModule { }
