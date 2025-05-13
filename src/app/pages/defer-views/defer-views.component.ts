import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from '@app/shared/header/header.component';

@Component({
  imports: [HeaderComponent],
  templateUrl: './defer-views.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class DeferViewsComponent {

}
