import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StoryCategory } from '../components/interfaces/storyCategory';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  private apiUrl: string = environment.storyUrl;

  constructor(private _http: HttpClient) { }

  getStory(): Observable<StoryCategory[]> {
    return this._http.get<StoryCategory[]>(this.apiUrl);
  }
}
