import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./components/features/home/home').then(m => m.HomeComponent),
    title: 'Home - Dewi'
  },
  {
    path: 'about',
    loadComponent: () => import('./components/features/about/about').then(m => m.AboutComponent),
    title: 'About Us - Dewi'
  },
  {
    path: 'services',
    loadComponent: () => import('./components/features/services/services').then(m => m.ServicesComponent),
    title: 'Services - Dewi'
  },
  {
    path: 'portfolio',
    loadComponent: () => import('./components/features/portfolio/portfolio').then(m => m.PortfolioComponent),
    title: 'Portfolio - Dewi'
  },
  {
    path: 'team',
    loadComponent: () => import('./components/features/team/team').then(m => m.TeamComponent),
    title: 'Our Team - Dewi'
  },
  {
    path: 'contact',
    loadComponent: () => import('./components/features/contact/contact').then(m => m.ContactComponent),
    title: 'Contact Us - Dewi'
  },
  {
    path: 'testimonials',
    loadComponent: () => import('./components/features/testimonials/testimonials').then(m => m.TestimonialsComponent),
    title: 'Testimonials - Dewi'
  },
  {
    path: 'clients',
    loadComponent: () => import('./components/features/clients/clients').then(m => m.ClientsComponent),
    title: 'Our Clients - Dewi'
  },
  {
    path: 'stats',
    loadComponent: () => import('./components/features/stats/stats').then(m => m.StatsComponent),
    title: 'Statistics - Dewi'
  },
  {
    path: 'features',
    loadComponent: () => import('./components/features/features-tabs/features-tabs').then(m => m.FeaturesTabsComponent),
    title: 'Features - Dewi'
  },
  {
    path: 'services2',
    loadComponent: () => import('./components/features/services2/services2').then(m => m.Services2Component),
    title: 'Additional Services - Dewi'
  },
  {
    path: '404',
    loadComponent: () => import('./components/features/not-found/not-found').then(m => m.NotFoundComponent),
    title: 'Page Not Found - Dewi'
  },
  {
    path: '**',
    redirectTo: '404'
  }
];