import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BlogComponent } from './blog/blog.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ScrollComponent } from './scroll/scroll.component';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';
import { ContactFormComponent } from './contact-form/contact-form.component';





@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AboutComponent,
    GalleryComponent,
    BlogComponent,
    HomeComponent,
    ScrollComponent,
    ContactFormComponent,
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    RouterModule,
    NgbModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAq0HjUS3MPWfnHaIEAGqGdKPggp8USlyw'
    })
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 