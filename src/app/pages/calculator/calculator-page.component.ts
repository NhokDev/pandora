import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { CalculatorViewComponent } from '@artifacts/calculator-components/calculator-view/calculator-view.component';
import { HeaderComponent } from '@shared/header/header.component';

@Component({
    selector: 'app-calculator-page',
    imports: [HeaderComponent, CalculatorViewComponent],
    templateUrl: './calculator-page.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class CalculatorComponent {

    private route = inject( ActivatedRoute )

    public page_title = toSignal<string | undefined>(
        this.route.title
    )

}
