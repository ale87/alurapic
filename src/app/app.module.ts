import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { PhotosModule } from './photos/photos.module'
import { ErrorsModule } from './errors/errors.module'
import { CardModule } from './shared/components/card/card.module'
import { HomeModule } from './home/home.module'
import { MessagesModule } from './shared/components/messages/messages.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PhotosModule,
    ErrorsModule,
    CardModule,
    HomeModule,
    MessagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
