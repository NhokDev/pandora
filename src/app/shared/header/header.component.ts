import { CommonModule } from '@angular/common';
import { booleanAttribute, ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: `./header.component.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {

    @Input({ required: true}) title!: string | undefined;

    // Permite que se pueda pasar un booleano como atributo
    @Input({ transform: booleanAttribute}) withShadow: boolean = false;

    constructor() {}

}
