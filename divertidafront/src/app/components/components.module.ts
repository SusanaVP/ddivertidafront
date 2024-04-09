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
import { ROUTES, RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { ErrorComponent } from './error/error.component';
import { PipesModule } from "../pipes/pipes.module";
import { RecommendedVideosComponent } from './recommended-videos/recommended-videos.component';
import { FormsModule } from '@angular/forms';



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
        ErrorComponent,
        RecommendedVideosComponent
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
        ErrorComponent,
        RecommendedVideosComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        PipesModule,
        FormsModule
    ]
})
export class ComponentsModule { }
