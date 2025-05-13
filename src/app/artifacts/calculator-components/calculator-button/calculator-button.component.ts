import { booleanAttribute, ChangeDetectionStrategy, Component, HostBinding, input } from '@angular/core';

@Component({
    selector: 'calculator-button',
    imports: [],
    styleUrl: './calculator-button.component.css',
    templateUrl: './calculator-button.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'w-1/4 border-r border-b border-indigo-400'
    }
})
export class CalculatorButtonComponent {

    // public isCommand = input( false, {
    //     transform: ( value: boolean | string ) =>
    //         typeof value === 'string' ? value === '' : value
    // });

    public isCommand = input( false, { transform: booleanAttribute });

    public isDoubleSize = input( false, { transform: booleanAttribute });

    @HostBinding('class.w-2/4') get doubleSizeStyle() {
        return this.isDoubleSize();
    }

}
