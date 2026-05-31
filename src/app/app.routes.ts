import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MarketplacesComponent } from './pages/marketplaces/marketplaces.component';
import { FulfillmentComponent } from './pages/fulfillment/fulfillment.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ArticleBestFulfillmentComponent } from './pages/blog/articles/best-fulfillment.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'EzTrove — Dropshipping operations on autopilot' },
  { path: 'marketplaces', component: MarketplacesComponent, title: 'Marketplaces — EzTrove' },
  { path: 'fulfillment', component: FulfillmentComponent, title: 'Fulfillment — EzTrove' },
  { path: 'pricing', component: PricingComponent, title: 'Pricing — EzTrove' },
  { path: 'blog', component: BlogComponent, title: 'Blog — EzTrove' },
  { path: 'blog/best-dropshipping-fulfillment', component: ArticleBestFulfillmentComponent,
    title: 'Picking the best dropshipping fulfillment model in 2026 — EzTrove' },
  { path: 'contact', component: ContactComponent, title: 'Contact — EzTrove' },
  { path: '**', redirectTo: '' }
];
