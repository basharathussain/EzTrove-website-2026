import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-fulfillment',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="section bg-gradient-to-b from-brand-50 to-white">
      <div class="container-page grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span class="eyebrow">Fulfillment</span>
          <h1 class="h1 mt-3">Ship like a pro without owning a warehouse.</h1>
          <p class="lede mt-5">
            EzTrove Fulfillment handles ordering, tracking, returns and re-shipping with the
            supplier — so you keep your account health, your buyers stay happy, and you stay out of customer support.
          </p>
          <div class="mt-8 flex gap-3 flex-wrap">
            <a href="#" class="btn-primary">Start free trial</a>
            <a routerLink="/pricing" class="btn-secondary">See pricing</a>
          </div>
        </div>
        <div class="aspect-[4/3] rounded-3xl bg-white shadow-card ring-1 ring-ink-300/20 p-6 flex items-center justify-center">
          <div class="grid grid-cols-2 gap-3 w-full">
            @for (k of kpis; track k) {
              <div class="bg-brand-50 rounded-xl p-4">
                <div class="text-3xl font-extrabold text-brand-700">{{ k.value }}</div>
                <div class="text-xs uppercase tracking-wide text-ink-500 mt-1">{{ k.label }}</div>
              </div>
            }
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container-page text-center max-w-3xl mx-auto">
        <span class="eyebrow">What’s included</span>
        <h2 class="h2 mt-3">Every order, end to end.</h2>
      </div>
      <div class="container-page mt-14 grid md:grid-cols-3 gap-6">
        @for (f of features; track f.title) {
          <div class="card">
            <div class="h-10 w-10 rounded-lg bg-brand-100 text-brand-700 inline-flex items-center justify-center font-bold">{{ f.icon }}</div>
            <h3 class="mt-4 font-bold text-lg">{{ f.title }}</h3>
            <p class="mt-2 text-ink-500 leading-relaxed text-sm">{{ f.body }}</p>
          </div>
        }
      </div>
    </section>

    <section class="section bg-ink-900 text-white">
      <div class="container-page">
        <div class="text-center max-w-2xl mx-auto">
          <span class="eyebrow text-brand-300">Risk reduction</span>
          <h2 class="h2 mt-3 text-white">Built around the metrics platforms actually score you on.</h2>
          <p class="lede mt-4 text-ink-300">
            Order-defect rate, late-shipment rate, valid-tracking rate — every fulfillment decision is
            optimised to keep these green.
          </p>
        </div>
        <div class="mt-12 grid md:grid-cols-4 gap-4">
          @for (m of metrics; track m.label) {
            <div class="rounded-2xl bg-ink-700/40 ring-1 ring-white/10 p-5 text-center">
              <div class="text-3xl font-extrabold text-white">{{ m.value }}</div>
              <div class="text-xs uppercase tracking-wide text-ink-300 mt-2">{{ m.label }}</div>
            </div>
          }
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container-page max-w-3xl mx-auto">
        <span class="eyebrow">Returns workflow</span>
        <h2 class="h2 mt-3">Returns handled the same way you sell — automatically.</h2>
        <ol class="mt-8 space-y-6">
          @for (s of returnSteps; track s; let i = $index) {
            <li class="flex gap-4">
              <div class="h-9 w-9 rounded-full bg-brand-600 text-white font-bold flex items-center justify-center flex-shrink-0">{{ i + 1 }}</div>
              <div>
                <h4 class="font-bold">{{ s.title }}</h4>
                <p class="text-ink-500 mt-1">{{ s.body }}</p>
              </div>
            </li>
          }
        </ol>
      </div>
    </section>

    <section class="section bg-brand-600 text-white">
      <div class="container-page text-center">
        <h2 class="text-3xl md:text-4xl font-extrabold">Hands-off fulfillment, starting today.</h2>
        <p class="mt-4 text-brand-100">7-day free trial — connect a store and watch the first order route itself.</p>
        <div class="mt-8 flex justify-center gap-3 flex-wrap">
          <a href="#" class="btn-primary bg-white text-brand-700 hover:bg-brand-50">Start free trial</a>
          <a routerLink="/contact" class="btn-secondary bg-transparent border-white/40 text-white hover:bg-white/10">Talk to fulfillment team</a>
        </div>
      </div>
    </section>
  `
})
export class FulfillmentComponent {
  kpis = [
    { label: 'Orders shipped / mo', value: '1.4M' },
    { label: 'Avg fulfillment time', value: '4m' },
    { label: 'Tracking-valid rate', value: '99.7%' },
    { label: 'Late-ship rate', value: '0.3%' }
  ];

  features = [
    { icon: '⚡', title: 'Sub-five-minute order routing', body: 'Each buyer order is matched to a supplier, paid, and confirmed before the customer has closed the tab.' },
    { icon: '📦', title: 'Tracking auto-uploaded', body: 'Once the supplier issues tracking, EzTrove pushes it back to the storefront — no scripts, no spreadsheets.' },
    { icon: '↩', title: 'Returns + reshipping', body: 'Standard return reasons trigger pre-built workflows: refund, partial refund, reship, or dispute support.' },
    { icon: '🌐', title: 'Multi-supplier fallback', body: 'If your primary supplier is out, EzTrove can route the order to a pre-approved backup without missing the ship-by date.' },
    { icon: '🛡', title: 'Buyer-message handling', body: 'Custom buyer notes (gift, address change) are surfaced before the order is sent, with a one-click approve.' },
    { icon: '📊', title: 'Per-order P&L', body: 'Every order gets a cost-of-goods, shipping and platform-fee row so margin reporting is real, not estimated.' }
  ];

  metrics = [
    { label: 'ODR', value: '< 0.5%' },
    { label: 'Late-ship', value: '< 1%' },
    { label: 'Valid tracking', value: '> 99%' },
    { label: 'Cancellation', value: '< 0.6%' }
  ];

  returnSteps = [
    { title: 'Buyer files a return', body: 'EzTrove picks up the marketplace notification and classifies the reason.' },
    { title: 'Workflow chosen automatically', body: 'Refund, partial refund, reship, or dispute — based on the rules you set per channel.' },
    { title: 'Supplier action triggered', body: 'For reships, EzTrove places the supplier order with original buyer details. For refunds, the platform refund is issued directly.' },
    { title: 'Buyer kept in the loop', body: 'Status messages are sent through the marketplace messaging system so the conversation stays attached to the order.' }
  ];
}
