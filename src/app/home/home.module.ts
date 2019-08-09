import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { MessagesModule } from './../shared/components/messages/messages.module'
import { SigninComponent } from './signin/signin/signin.component'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [
    SigninComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MessagesModule,
    RouterModule
  ]
})

export class HomeModule { }
