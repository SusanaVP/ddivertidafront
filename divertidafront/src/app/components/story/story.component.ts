import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StoryService } from '../../services/story.service';
import { StoryCategory } from '../interfaces/storyCategory';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrl: './story.component.css'
})
export class StoryComponent implements OnInit {

  constructor(private _storyService: StoryService) { }

  stories: StoryCategory[] | undefined = [];

  async ngOnInit() {

    // this._storyService.getStory().subscribe((data: StoryCategory[]) => { 
    //   this.stories = data;
    //   if (this.stories.length === 0) {
    //     console.log("la lista de cuentos esta vacía");
    //   }
    // });
  }
}
