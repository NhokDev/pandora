import { computed, Injectable, signal } from '@angular/core';


const numbers = ['0', '1', '2', '3', '4','5', '6', '7', '8', '9'];
const operators = ['+', '-', '*', 'x', '/', '%', '÷']
const specialOperators = [
    '+/-',
    '%',
    '.',
    '=',
    'C',
    'Backspace'
]

interface State {
    resultText:     string;
    subResultText:  string;
    lastOperator:   string;
}

@Injectable({
    providedIn: 'root'
})
export class CalculatorService {

    #state = signal<State>({
        resultText: '0',
        subResultText: '0',
        lastOperator: '+'
    });

    resultText = computed(() => this.#state().resultText );
    subResultText = computed(() => this.#state().subResultText );
    lastOperator = computed(() => this.#state().lastOperator );

    private clearState(): void {
        this.#state.set({
            resultText: '0',
            subResultText: '0',
            lastOperator: '+'
        })
    }

    public calculateResult() {

        const number1 = parseFloat( this.subResultText() );
        const number2 = parseFloat( this.resultText() );

        let result = 0;

        switch( this.lastOperator() ) {
            case '+':
                result = number1 + number2;
                break;
            case '-':
                result = number1 - number2;
                break;
            case '*':
                result = number1 * number2;
                break;
            case '/':
                result = number1 / number2;
                break;
        }

        this.#state.update((current) => ({
            resultText: result.toString(),
            subResultText: '0',
            lastOperator: 'pepa'
        }));
    }

    public isValidValue( value: string ): boolean {
        return [...numbers, ...operators, ...specialOperators ].includes(value);
    }

    public constructNumber( value: string ): void {
        // Validate input
        if (!this.isValidValue(value)) {
            return;
        }

        if ( value === '=' ) {
            this.calculateResult();
            return;
        }

        if (value === 'C') {
            this.clearState()
            return;
        }

        if (value === 'Backspace') {
            if ( this.resultText() === '0' ) return;
            if ( this.resultText().includes('-') && this.resultText().length === 2 ) {
                this.#state.update(current => ({
                    ...current,
                    resultText: '0'
                }));
            }
            if ( this.resultText().length === 1 ) {
                this.#state.update(current => ({
                    ...current,
                    resultText: '0'
                }));
                return;
            }

            this.#state.update(current => ({
                ...current,
                resultText: current.resultText.slice(0, -1)
            }));

            return;
        }

        if ( operators.includes(value) ) {
            this.calculateResult()
            this.#state.update(current => ({
                resultText: '0',
                subResultText: current.resultText,
                lastOperator: value
            }));
            return;
        }

        if ( this.resultText().length >= 10  ) {
            console.log('Max length reached');
            return;
        }


        if (value === '.' && !this.resultText().includes('.') ) {
            if( this.resultText() === '0') {
                this.#state.update(current => ({
                    ...current,
                    resultText: '0.'
                }));
                return;
            }
            this.#state.update(current => ({
                ...current,
                resultText: current.resultText + '.'
            }));
            return;
        }

        if ( value === '0' && (this.resultText() === '0' || this.resultText() === '-0' )) {
            return;
        }

        if( value === '+/-') {
            if ( this.resultText().includes('-') ) {
                this.#state.update(current => ({
                    ...current,
                    resultText: current.resultText.slice(1)
                }));
                return;
            }
            this.#state.update(current => ({
                ...current,
                resultText: '-' + current.resultText
            }));
            return;

        }

        if ( numbers.includes(value) ) {

            if (this.resultText() === '-0') {
                this.#state.update(current => ({
                    ...current,
                    resultText: '-' + value
                }));
                return;
            }

            if ( this.resultText() === '0') {
                this.#state.update(current => ({
                    ...current,
                    resultText: value
                }));
                return;
            }

            this.#state.update(current => ({
                ...current,
                resultText: current.resultText + value
            }));
            return;
        }

    }

}
