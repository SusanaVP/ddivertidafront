import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog/blog.component';
import { EventsComponent } from './events/events.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RiddlesComponent } from './riddles/riddles.component';
import { StoryComponent } from './story/story.component';
import { VideosComponent } from './videos/videos.component';
import { ROUTES, RouterModule, RouterState, RoutesRecognized } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { ErrorComponent } from './error/error.component';



@NgModule({
  declarations: [
    BlogComponent,
    EventsComponent,
    FavoritesComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    RiddlesComponent,
    StoryComponent,
    VideosComponent,
    NavComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    BlogComponent,
    EventsComponent,
    FavoritesComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    RiddlesComponent,
    StoryComponent,
    VideosComponent,
    NavComponent,
    ErrorComponent
  ]
})
export class ComponentsModule { }
