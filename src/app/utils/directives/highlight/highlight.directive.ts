import { Directive, ElementRef, HostListener, Input} from '@angular/core';

// The @Directive() decorator's configuration property
// specifies the directive's CSS attribute selector
// [appHighlight]
@Directive({
    selector: '[appHighlight]'
})
export class HighlightDirective {

    // The @Input() decorator adds metadata to the class that makes the directive's
    // appHighlight property available for binding.

    private color: string = 'red';

    @Input() public appHighlight: string = '';

    @Input() public defaultColor: string = '';

    constructor(private el: ElementRef) {}

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight(this.appHighlight || this.defaultColor || this.color);
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight('');
    }

    private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }

}
