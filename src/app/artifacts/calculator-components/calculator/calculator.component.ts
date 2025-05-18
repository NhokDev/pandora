import { ChangeDetectionStrategy, Component, computed, inject, Signal, viewChildren } from '@angular/core';
import { CalculatorButtonComponent } from '../calculator-button/calculator-button.component';
import { CalculatorService } from '@app/pages/calculator/calculator.service';

@Component({
    selector: 'calculator',
    imports: [CalculatorButtonComponent],
    styleUrl: './calculator.component.css',
    templateUrl: './calculator.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '(document:keyup)': 'handleKeyboardEvent($event)'
    }
})
export class CalculatorComponent {

    private sv = inject(CalculatorService);

    public resultText = this.sv.resultText;
    public subResultText = this.sv.subResultText;
    public lastOperator = this.sv.lastOperator;

    private _keyEquivalents: Record<string, string> = {
        Escape: 'C',
        Enter: '=',
        'x': '*',
        '÷': '/'
    }

    public calculatorButtons: Signal<readonly CalculatorButtonComponent[]> = viewChildren( CalculatorButtonComponent );

    handleClick( key: string ) {
        console.log(key)
        this.sv.constructNumber( key );
    }

    handleKeyboardEvent( event: KeyboardEvent ) {

        const key = this._keyEquivalents[event.key] ?? event.key

        this.handleClick( key )

        this.calculatorButtons().forEach( button => {
            button.keyboardPressedStyle(key);
        })
    }
}
