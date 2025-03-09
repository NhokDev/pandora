import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '@app/shared/header/header.component';
import { HighlightDirective } from '@app/utils/directives/highlight/highlight.directive';

@Component({
  imports: [HeaderComponent, HighlightDirective],
  templateUrl: './directives.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class DirectivesComponent {

    private route = inject( ActivatedRoute )

    public page_title = toSignal(
        this.route.title
    )

    public highlightColor: string = '';

}
