import { Component, OnInit } from '@angular/core';
import { VideosService } from '../../services/videos.service';
import { StorageService } from '../../services/storage.service';
import { Video } from '../interfaces/videos';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';

type VideoProperty = "title" | "description" | "category";
@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.css'
})
export class VideosComponent implements OnInit {

  constructor(private _videosService: VideosService, private _storageService: StorageService, private _sanitizer: DomSanitizer, private _router: Router) {
  }

  public selectedCategory: VideoProperty = "title";
  public searchTerm: string = '';
  category: string = '';

  public selectedOptions: string[] = [];
  filteredVideos: Video[] = [];
  videos: Video[] = [];

  public showRecommendedVideos: boolean = false;
  favoriteVideosIds: Set<number> = new Set<number>();

  async ngOnInit() {
    this.showRecommendedVideos = true;
  }

  filterVideos() {
    try {
      this.showRecommendedVideos = false;

      if (this.searchTerm === null || this.searchTerm === undefined) {
        return;
      }

      this._videosService.getVideos().subscribe((videos) => {
        this.filteredVideos = videos;

        this.selectedOptions = ['title', 'description', 'category'];

        if (this.selectedCategory === 'category') {
          this.filterByCategory();
        } else {
          this.filterByTitleOrDescription();
        }
      });

    } catch (err: any) {
      console.log("ERROR: Al filtrar los vídeos.");
      this._router.navigate(['/error']).then(() => {
        window.location.reload();
      });
      this.filteredVideos = [];
    }
  }

  filterByTitleOrDescription() {
    // Realizar búsqueda por título o descripción
    this._videosService.getVideos().subscribe((videos) => {
      this.filteredVideos = videos.filter(item => {
        return (item.title && item.title.toLowerCase().includes(this.searchTerm.toLowerCase())) ||
          (item.description && item.description.toLowerCase().includes(this.searchTerm.toLowerCase()));
      });

      if (this.filteredVideos.length === 0) {
        this.filteredVideos = [];
        this._router.navigate(['/error']).then(() => {
          window.location.reload();
        });
        return;
      }
    });
  }

 async filterByCategory() {

    this.searchTerm = this.category.toLowerCase();

    this.filteredVideos = await this._videosService.getVideosByCategories(this.category);

    if (this.filteredVideos.length === 0 || this.filteredVideos === undefined) {
      this.filteredVideos = [];
      this._router.navigate(['/error']).then(() => {
        window.location.reload();
      });
      return;
    }
     return this.filteredVideos;
  }

  async editFavorite(idVideo: number) {
    const idPerson = await this._storageService.getUserId('loggedInUser');
    const favoritesVideos = await this._videosService.getFavoritesVideos();
    this.favoriteVideosIds = new Set<number>(favoritesVideos.map(video => video.id));

    if (idPerson !== null && idPerson !== undefined) {
      try {
        if (this.favoriteVideosIds.has(idVideo)) {
          console.log('Ups! El vídeo ya estaba en tu lista de favoritos.');
        } else {
          await this._videosService.addFavoriteVideo(idVideo, idPerson);
          console.log('Añadido correctamente a tu lista de favoritos.');
        }
      } catch (err: any) {
        console.log("ERROR: Al añadir el vídeo a favoritos.");
      }
    } else {
      console.log('Tienes que loguearte o registrarte. Ve a la página Inicio');
    }
  }

  extractVideoId(url: string): string {
    const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regExp);

    return match ? match[1] : '';
  }

  getEmbeddedUrl(url: string): SafeResourceUrl {
    const videoId = this.extractVideoId(url);

    return this._sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoId}`);
  }
}
