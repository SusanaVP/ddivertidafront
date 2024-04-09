import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StoryService } from '../../services/story.service';
import { Stories } from '../interfaces/stories';
import { Router } from '@angular/router';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrl: './story.component.css'
})
export class StoryComponent implements OnInit {

  constructor(private _storyService: StoryService, private _router: Router) { }

  stories: Stories[] | undefined = [];
  categorySelected: string | undefined;
  async ngOnInit() {

    // this._storyService.getStory().subscribe((data: StoryCategory[]) => { 
    //   this.stories = data;
    //   if (this.stories.length === 0) {
    //     console.log("la lista de cuentos esta vacía");
    //   }
    // });
  }

  async moreView(category: string) {
    this.categorySelected = category;
    try {
      const storiesCategory = await this._storyService.getStoriesByCategory(category);
      if (storiesCategory.length === 0) {
        alert("No hay historias en esta categoría");
      }
      console.log(storiesCategory);
    } catch (error) {
      console.error('Error al obtener historias por categoría:', error);
      this._router.navigate(['/error']).then(() => {
        window.location.reload();
      });
    }
  }
}
