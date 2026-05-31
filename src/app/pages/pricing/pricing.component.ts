import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="section bg-gradient-to-b from-brand-50 to-white">
      <div class="container-page text-center max-w-3xl mx-auto">
        <span class="eyebrow">Pricing</span>
        <h1 class="h1 mt-3">Pay for the orders you ship, not the seats you sit in.</h1>
        <p class="lede mt-5">
          Every plan includes every marketplace, every feature, and a 7-day free trial. The only thing that
          changes between tiers is how many orders and listings we automate for you each month.
        </p>

        <div class="mt-8 inline-flex rounded-full bg-white shadow-sm ring-1 ring-ink-300/30 p-1 text-sm font-semibold">
          <button (click)="period.set('monthly')"
                  [class.bg-brand-600]="period() === 'monthly'"
                  [class.text-white]="period() === 'monthly'"
                  class="rounded-full px-5 py-2 transition">Monthly</button>
          <button (click)="period.set('annual')"
                  [class.bg-brand-600]="period() === 'annual'"
                  [class.text-white]="period() === 'annual'"
                  class="rounded-full px-5 py-2 transition">Annual <span class="ml-1 text-xs font-normal">— save 20%</span></button>
        </div>
      </div>
    </section>

    <section class="pb-20">
      <div class="container-page grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        @for (t of tiers; track t.name) {
          <div class="card relative flex flex-col"
               [class.ring-2]="t.popular"
               [class.ring-brand-500]="t.popular">
            @if (t.popular) {
              <span class="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-600 text-white text-xs font-bold px-3 py-1 rounded-full">Most popular</span>
            }
            <h3 class="text-lg font-bold">{{ t.name }}</h3>
            <p class="text-sm text-ink-500 mt-1">{{ t.tagline }}</p>
            <div class="mt-6 flex items-baseline gap-1">
              @if (t.price !== null) {
                <span class="text-4xl font-extrabold">\${{ priceFor(t) }}</span>
                <span class="text-ink-500 text-sm">/ month</span>
              } @else {
                <span class="text-4xl font-extrabold">Custom</span>
              }
            </div>
            @if (period() === 'annual' && t.price !== null) {
              <div class="text-xs text-brand-700 mt-1">billed annually</div>
            }
            <ul class="mt-6 space-y-3 text-sm flex-1">
              @for (b of t.bullets; track b) {
                <li class="flex items-start gap-2">
                  <span class="mt-1 h-4 w-4 rounded-full bg-brand-100 text-brand-700 inline-flex items-center justify-center text-[10px] font-bold">✓</span>
                  <span class="text-ink-700">{{ b }}</span>
                </li>
              }
            </ul>
            <a href="#" class="mt-8 btn-primary w-full" [class.bg-ink-900]="!t.popular" [class.hover:bg-ink-700]="!t.popular">{{ t.cta }}</a>
          </div>
        }
      </div>
    </section>

    <section class="section bg-white border-t border-ink-300/10">
      <div class="container-page max-w-4xl">
        <span class="eyebrow">Everything included</span>
        <h2 class="h2 mt-3">No feature gates between tiers.</h2>
        <p class="lede mt-4">
          Every plan ships with every feature. Tiers exist purely to size order volume and repricing listings.
        </p>
        <div class="mt-10 grid md:grid-cols-2 gap-4">
          @for (item of included; track item) {
            <div class="flex items-start gap-3 rounded-xl bg-brand-50/60 p-4">
              <span class="mt-1 h-5 w-5 rounded-full bg-brand-600 text-white inline-flex items-center justify-center text-xs font-bold">✓</span>
              <span class="text-ink-700">{{ item }}</span>
            </div>
          }
        </div>
      </div>
    </section>

    <section class="section bg-ink-900 text-white text-center">
      <div class="container-page">
        <h2 class="h2 text-white">Not sure which plan fits?</h2>
        <p class="lede text-ink-300 mt-4 max-w-2xl mx-auto">Tell us your monthly order volume and we’ll point you at the right tier — usually a smaller one than you’d pick yourself.</p>
        <a routerLink="/contact" class="mt-8 inline-flex btn-primary bg-white text-brand-700 hover:bg-brand-50">Talk to us</a>
      </div>
    </section>
  `
})
export class PricingComponent {
  period = signal<'monthly' | 'annual'>('monthly');

  tiers = [
    {
      name: 'Starter', tagline: 'Solo sellers finding their first winners.', price: 39, popular: false,
      cta: 'Start free trial',
      bullets: ['Up to 150 auto orders / mo', '1,500 repricing listings', 'All marketplaces', 'Email support']
    },
    {
      name: 'Grow', tagline: 'Steady multi-channel stores.', price: 69, popular: false,
      cta: 'Start free trial',
      bullets: ['Up to 300 auto orders / mo', '3,000 repricing listings', 'All marketplaces', 'Priority email + chat']
    },
    {
      name: 'Scale', tagline: 'Teams running ads and pushing volume.', price: 99, popular: true,
      cta: 'Start free trial',
      bullets: ['Up to 500 auto orders / mo', '5,000 repricing listings', 'All marketplaces', 'Slack + priority chat', 'Custom margin rules']
    },
    {
      name: 'Enterprise', tagline: 'High-volume sellers and agencies.', price: null, popular: false,
      cta: 'Talk to sales',
      bullets: ['Unlimited orders', 'Unlimited listings', 'Dedicated success manager', 'SAML SSO', 'SLA + uptime guarantee']
    }
  ];

  included = [
    'All five marketplaces (Amazon, eBay, Walmart, Shopify, AliExpress)',
    'Auto-ordering with supplier fallback',
    'Variant-aware repricer with margin floor',
    'Stock and price monitoring',
    'Tracking auto-upload',
    'Returns workflows',
    'Per-order P&L reporting',
    '7-day free trial — no credit card'
  ];

  priceFor(t: { price: number | null }): string {
    if (t.price === null) return '';
    const monthly = t.price;
    return this.period() === 'annual'
      ? (monthly * 0.8).toFixed(0)
      : monthly.toFixed(0);
  }
}
