import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '@app/app.routes';

@Component({
  selector: 'app-sidemenu',
  imports: [CommonModule, RouterModule],
  templateUrl: `./sidemenu.component.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidemenuComponent {

    public route = routes

    public menuItems = routes
        .filter( route => route && route.path )

    constructor() {}

}
