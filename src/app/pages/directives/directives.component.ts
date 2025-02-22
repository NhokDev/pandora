import { Component } from '@angular/core';
import { HeaderComponent } from '@app/shared/header/header.component';
import { HighlightDirective } from '@app/utils/directives/highlight/highlight.directive';

@Component({
  selector: 'app-directives',
  imports: [HeaderComponent, HighlightDirective],
  templateUrl: './directives.component.html'
})
export default class DirectivesComponent {

    public highlightColor: string = '';

}
