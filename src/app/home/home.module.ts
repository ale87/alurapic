import { SignupService } from './../services/signup.service';
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { HomeRoutingModule } from './home.routing.module'
import { MessagesModule } from './../shared/components/messages/messages.module'
import { SigninComponent } from './signin/signin/signin.component'
import { SignupComponent } from './signup/signup.component'
import { HomeComponent } from './home.component'

@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MessagesModule,
    RouterModule,
    FormsModule,
    HomeRoutingModule
  ],
  providers: [
    SignupService
  ]
})

export class HomeModule { }
