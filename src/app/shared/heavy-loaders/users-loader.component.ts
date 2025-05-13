import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-user-loader',
  imports: [CommonModule],
  templateUrl: `./users-loader.component.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserLoaderComponent {

}
