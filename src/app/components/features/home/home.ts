import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../hero/hero';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    AboutComponent,
    StatsComponent,
    ServicesComponent,
    ClientsComponent,
    FeaturesTabsComponent,
    Services2Component,
    TestimonialsComponent,
    PortfolioComponent,
    TeamComponent,
    ContactComponent
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
    changeDetection: ChangeDetectionStrategy.OnPush

})
export class HomeComponent {}