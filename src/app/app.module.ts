import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderModule } from './shared/components/header/header.module'
import { PhotosModule } from './photos/photos.module'
import { ErrorsModule } from './errors/errors.module'
import { CardModule } from './shared/components/card/card.module'
import { MessagesModule } from './shared/components/messages/messages.module'
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { RequestInterceptor } from './interceptors/request.interceptor'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    PhotosModule,
    ErrorsModule,
    CardModule,
    MessagesModule,
    HeaderModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
