import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '@app/shared/header/header.component';
import { HighlightDirective } from '@app/utils/directives/highlight/highlight.directive';

@Component({
  selector: 'app-directives',
  imports: [HeaderComponent, HighlightDirective],
  templateUrl: './directives.component.html'
})
export default class DirectivesComponent {

    private route = inject( ActivatedRoute )

    public page_title = toSignal(
        this.route.title
    )

    public highlightColor: string = '';

}
