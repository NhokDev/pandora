import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ContentChild, input, output, TemplateRef } from '@angular/core';

@Component({
  selector: 'f-button-footer',
  imports: [CommonModule],
  templateUrl: 'f-button-footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FButtonFooterComponent {

    entityTst = input<any>()

    entityTstReturn = output<any>()

    @ContentChild('left', { static: true }) leftSideTemplate!: TemplateRef<any>;
    @ContentChild('right', { static: true }) rightSideTemplate!: TemplateRef<any>;
}
