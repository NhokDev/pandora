import { DecimalPipe } from '@angular/common';
import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[fwkRowField]',
  providers: [DecimalPipe]
})
export class RowFieldDirective implements OnInit {

    // Permite pasar el nombre del campo si en algún momento deseas hacer algo dinámico con él
    @Input('fwkRowField') fieldName!: string;

    @Input() entidad: any;

    @Input() textAlign: 'left' | 'right' | 'center' = 'left';

    // Optional parameter to set the width of the column
    @Input() fWd?: string;

    @Input() precision?: number = 2;

    @Input() trueText?: string = "Si";

    @Input() falseText?: string = "No";

    constructor(
        private el: ElementRef,
        private renderer: Renderer2) {}

    ngOnInit() {
        // Aplicar la clase de alineación según el valor recibido
        let alignmentClass = '';
        switch (this.textAlign) {
            case 'left':
            alignmentClass = 'text-left';
            break;
            case 'right':
            alignmentClass = 'text-right';
            break;
            case 'center':
            alignmentClass = 'text-center';
            break;
        }
        if (alignmentClass) {
            this.renderer.addClass(this.el.nativeElement, alignmentClass);
        }

        // Aplicar ancho si se ha definido fWd
        if (this.fWd) {
            this.renderer.setStyle(this.el.nativeElement, 'width', `${this.fWd}%`);
        }

        // Default styling
        // TODO: Crear custom class en style.css
        this.renderer.addClass(this.el.nativeElement, 'px-6');
        this.renderer.addClass(this.el.nativeElement, 'py-4');
        this.renderer.addClass(this.el.nativeElement, 'whitespace-nowrap');

        let value = this.entidad?.[this.fieldName];

        if (value != null && typeof value === 'number') {
            this.el.nativeElement.textContent = new DecimalPipe('es-ES').transform(value, `1.${this.precision}-${this.precision}`);

        } else if (typeof value === 'boolean') {
            this.el.nativeElement.textContent = value ? this.trueText : this.falseText;

        } else {
            this.el.nativeElement.textContent = value;
        }


    }
}
