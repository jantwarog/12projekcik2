import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'gallery', component: GalleryComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
