import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-fast',
  imports: [CommonModule],
  templateUrl: `./heavy-loaders-fast.component.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeavyLoadersFastComponent {

}
