import { Component, signal, inject} from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive  }from '@angular/router';
import { NewPost } from './modules/new-post/new-post';
import { ThemeSwitch } from './modules/theme-switch/theme-switch';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NewPost, ThemeSwitch],
  templateUrl: './app.html',
  styleUrl: './app.css',
  host: {
    '[class.dark]': 'themeService.isDark()'
  }
})
export class App {
  protected readonly title = signal('posts');

  isModalOpen = false;
  toggleModal() { this.isModalOpen = !this.isModalOpen; }
  public themeService = inject(ThemeService);
}
