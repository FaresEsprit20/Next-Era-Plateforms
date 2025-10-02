import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomTradingChartComponent } from '../../shared/resuables/trading_view/custom-trading-chart';

@Component({
  selector: 'app-chart-section',
  standalone: true,
  imports: [CommonModule, CustomTradingChartComponent],
  templateUrl: './chart-section.html',
  styleUrls: ['./chart-section.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartSectionComponent {

}
