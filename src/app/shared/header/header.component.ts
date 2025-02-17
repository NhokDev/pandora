import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: `./header.component.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {

    @Input() title: string = "";

    constructor() {}

}
