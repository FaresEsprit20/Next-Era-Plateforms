import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../hero/hero';
import { AboutComponent } from '../about/about';
import { ServicesComponent } from '../services/services';
import { ClientsComponent } from '../clients/clients';
import { FeaturesTabsComponent } from '../features-tabs/features-tabs';
import { Services2Component } from '../services2/services2';
import { TestimonialsComponent } from '../testimonials/testimonials';
import { PortfolioComponent } from '../portfolio/portfolio';
import { TeamComponent } from '../team/team';
import { ContactComponent } from '../contact/contact';
import { StatsComponent } from '../stats/stats';


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
  styleUrls: ['./home.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush

})
export class HomeComponent {}