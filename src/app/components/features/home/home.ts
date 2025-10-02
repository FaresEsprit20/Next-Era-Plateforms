import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../hero/hero';
import { AboutComponent } from '../about/about';
import { ServicesComponent } from '../services/services';
import { ClientsComponent } from '../clients/clients';
import { FeaturesTabsComponent } from '../features-tabs/features-tabs';
import { Services2Component } from '../services2/services2';
import { TestimonialsComponent } from '../testimonials/testimonials';
import { ContactComponent } from '../contact/contact';
import { StatsComponent } from '../stats/stats';
import { ChartSectionComponent } from '../chart-section/chart-section';
import { CustomTradingChartComponent } from '../../shared/resuables/trading_view/custom-trading-chart';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    AboutComponent,
    StatsComponent,
    ChartSectionComponent,
    ServicesComponent,
    ClientsComponent,
    FeaturesTabsComponent,
    Services2Component,
    TestimonialsComponent,
    ContactComponent
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush

})
export class HomeComponent {}