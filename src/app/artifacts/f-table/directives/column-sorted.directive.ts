import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[fwkColumnSorted]'
})
export class ColumnSortedDirective implements OnInit {

    // Permite pasar el nombre del campo si en algún momento deseas hacer algo dinámico con él
    @Input('fwkColumnSorted') columnName!: string;

    @Input() textAlign: 'left' | 'right' | 'center' = 'left';

    @Input() label: string = '';

    // Optional parameter to set the width of the column
    @Input() fWd?: string;

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
            this.renderer.setStyle(this.el.nativeElement, 'width', this.fWd);
        }

        // Default styling
        // TODO: Crear custom class en style.css
        this.renderer.addClass(this.el.nativeElement, 'px-6');
        this.renderer.addClass(this.el.nativeElement, 'py-3');
        this.renderer.addClass(this.el.nativeElement, 'text-xs');
        this.renderer.addClass(this.el.nativeElement, 'font-medium');
        this.renderer.addClass(this.el.nativeElement, 'text-gray-500');
        this.renderer.addClass(this.el.nativeElement, 'uppercase');
        this.renderer.addClass(this.el.nativeElement, 'tracking-wider');

        this.el.nativeElement.textContent = this.label || this.columnName;
    }
}
