import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features-tabs.html',
  styleUrls: ['./features-tabs.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeaturesTabsComponent {}