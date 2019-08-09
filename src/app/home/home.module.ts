import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { MessageModule } from './../shared/components/message/message.module'
import { SigninComponent } from './signin/signin/signin.component'

@NgModule({
  declarations: [
    SigninComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MessageModule
  ]
})

export class HomeModule { }
