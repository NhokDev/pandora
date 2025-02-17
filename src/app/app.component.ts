import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidemenuComponent } from './shared/sidemenu/sidemenu.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidemenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
