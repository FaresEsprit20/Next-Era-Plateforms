import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-services2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services2.html',
  styleUrl: './services2.scss',
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class Services2Component {

}
