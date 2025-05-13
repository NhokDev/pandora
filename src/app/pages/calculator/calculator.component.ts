import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '@app/shared/header/header.component';

@Component({
    selector: 'app-calculator',
    imports: [HeaderComponent],
    templateUrl: './calculator.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class CalculatorComponent {

    private route = inject( ActivatedRoute )

    public page_title = toSignal(
        this.route.title
    )

}
